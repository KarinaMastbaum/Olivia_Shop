
import firebase from 'firebase/app';
import '@firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyB58ki23Y-AAXHah-nI-7yy2Bw8Yfe6HoQ",
    authDomain: "olivia-shop.firebaseapp.com",
    projectId: "olivia-shop",
    storageBucket: "olivia-shop.appspot.com",
    messagingSenderId: "192555444619",
    appId: "1:192555444619:web:97ffce74df5da37e4fa78e"
});

export function getFirebase() {
    return app;
}

export function getFirestore() {
    return firebase.firestore(app);
}