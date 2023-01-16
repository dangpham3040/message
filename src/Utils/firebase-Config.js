
import { initializeApp, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDownloadURL, getStorage, uploadBytes } from "firebase/storage";
import { getDatabase, ref, push } from "firebase/database"
import { getMessaging, getToken } from "firebase/messaging";
// import { onBackgroundMessage } from "firebase/messaging/sw";

let config = {
    apiKey: "AIzaSyBEPh_setLlRtzbLFBy7qTT33skxPeEvmA",
    authDomain: "chat-linux-11828.firebaseapp.com",
    databaseURL: "https://chat-linux-11828-default-rtdb.firebaseio.com",
    projectId: "chat-linux-11828",
    storageBucket: "chat-linux-11828.appspot.com",
    messagingSenderId: "927049958767",
    appId: "1:927049958767:web:b6abd96a5095d22060949a",
    measurementId: "G-8P2CXPZXKP"  
};
const app = initializeApp(config);
const database = getDatabase()
const storage = getStorage();
const auth = getAuth()
const Adminid = "KIX43luQnZRTd8Mc5GtvJPcBkzd2"
// const messaging = getMessaging();

export { auth, database, storage, Adminid ,ref}



