import { getToken } from "firebase/messaging";
import { getFirebaseMessaging } from "./firebase";

export const requestNotificationPermission = async () => {
  if (typeof window === "undefined") return;

  try {
    const permission = await Notification.requestPermission();

    if (permission !== "granted") return;

    const messaging = await getFirebaseMessaging();
    if (!messaging) return;

    const token = await getToken(messaging, {
      vapidKey: "YOUR_VAPID_KEY",
    });

    console.log("FCM TOKEN:", token);
  } catch (err) {
    console.error("Notification error:", err);
  }
};
