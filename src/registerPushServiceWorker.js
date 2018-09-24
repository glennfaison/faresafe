const publicVapidKey = "BLWFaLuaYID7_znFlkLrdDbyYlXiZUbSfYwJBZKXtFcyPPGr77nVv0CT0dHNhvrmjLhuJgr_M3USdb5iR8N8qFQ";

export default function registerPushServiceWorker() {
  if ('serviceWorker' in navigator) {
    console.log('Registering service worker');

    run().catch(error => console.error(error));
  }
}

async function run() {
  console.log('Registering service worker');
  const registration = await navigator.serviceWorker
    .register(`${process.env.PUBLIC_URL}/pushServiceWorker.js`);
  console.log('Registered service worker');

  console.log('Registering push');
  const subscription = await registration.pushManager
    .subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(publicVapidKey)
    });
  console.log('Registered push');

  console.log('Sending push');
  await fetch('http://localhost:3001/subscribe', {
    method: 'POST',
    body: JSON.stringify(subscription),
    headers: {
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  });
  console.log('Sent push');
}

// Boilerplate borrowed from https://www.npmjs.com/package/web-push#using-vapid-key-for-applicationserverkey
function urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/-/g, '+')
    .replace(/_/g, '/');

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}
