export const ApiKey = "AIzaSyCV9wcL49ADrEH7iPwtxWGOkMghR-NfML8";

export const vapidPrivateKey = "JeO9CBOFd52QyYMIOAOT5BkgjQ36ZCNWN-QbuPNSg6k";

export const vapidPublicKey =
  "BG4mjHp1ho5Owd3XTCt6yg_rbfPG-vY1x15mOjKoQBe1Gdmt27SFV67mzZbmzG6wf2V126wCh8axM0CFbvILtVQ";

export const convertedVapidKey = urlBase64ToUint8Array(vapidPublicKey)

function urlBase64ToUint8Array(base64String) {
  const padding = "=".repeat((4 - base64String.length % 4) % 4)
  const base64 = (base64String + padding).replace(/\-/g, "+").replace(/_/g, "/")

  const rawData = window.atob(base64)
  const outputArray = new Uint8Array(rawData.length)

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i)
  }
  return outputArray
}