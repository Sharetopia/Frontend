// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
import { onMounted } from "vue";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTEwgx2CN6gyPjtxLbzcISmONhNmrAvzA",
  authDomain: "sharetopia-f2810.firebaseapp.com",
  projectId: "sharetopia-f2810",
  storageBucket: "sharetopia-f2810.appspot.com",
  messagingSenderId: "646311929423",
  appId: "1:646311929423:web:d03b50ea45463087faac3a",
  measurementId: "G-MTEDXZV49Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export function useAnalytics(name?: string, className?: string) {
  const postEvent = (event: string) => {
    logEvent(analytics, "test");
  };

  const didOpenComponent = (name: string, className: string) => {
    logEvent(analytics, "screen_view", {
      firebase_screen: name,
      firebase_screen_class: className,
    });
  };

  onMounted(() => {
    if (name != undefined && className != undefined)
      didOpenComponent(name, className);
  });

  return {
    postEvent,
    didOpenComponent,
  };
}
