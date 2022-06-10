import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore, setDoc, doc } from '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC1PNSt3HVXx_BcpOLOtvVPlsjY-hb_UfA",
    authDomain: "shabakat-1b5e9.firebaseapp.com",
    projectId: "shabakat-1b5e9",
    storageBucket: "shabakat-1b5e9.appspot.com",
    messagingSenderId: "526635501103",
    appId: "1:526635501103:web:73cd2c00269aec3ff4a8da"
};

var app;
if (!getApps().length) {
    app = initializeApp(firebaseConfig);
}

const firestore = getFirestore(app);


export default firestore;