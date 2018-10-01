import axios from 'axios';


export function subscribePush() {
  navigator.serviceWorker.ready.then(
    (registration) => {
      if (!registration.pushManager) {
        alert("Push Unsupported");
        return;
      }
      registration.pushManager
        .subscribe({
          userVisibleOnly: true, //Always display notifications
          applicationServerKey: convertedVapidKey
        })
        .then((subscription) => axios.post("/api/push/register", subscription))
        .catch((err) => console.error("Push subscription error: ", err));
    });
}

export function unsubscribePush() {
  navigator.serviceWorker.ready.then((registration) => {
    //Find the registered push subscription in the service worker
    registration.pushManager
      .getSubscription()
      .then((subscription) => {
        if (!subscription) {
          return;
          //If there isn't a subscription, then there's nothing to do
        }
        subscription
          .unsubscribe()
          .then(() => axios.delete("/api/push/unregister"))
          .catch((err) => console.error(err));
      })
      .catch((err) => console.error(err));
  })
}