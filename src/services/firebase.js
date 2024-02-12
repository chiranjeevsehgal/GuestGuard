import { initializeApp } from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyB5j_o_Wzg-CnUgdUawYwjvjvTZOBrIYa4",
    authDomain: "testguard-96ef1.firebaseapp.com",
    projectId: "testguard-96ef1",
    storageBucket: "testguard-96ef1.appspot.com",
    messagingSenderId: "1085763028558",
    appId: "1:1085763028558:web:7b3a2af4999693144fe51f",
    measurementId: "G-0F6MYNS3HQ",
    databaseURL:"https://console.firebase.google.com/u/0/project/testguard-96ef1/database/testguard-96ef1-default-rtdb/data/~2F",
};

export const app = initializeApp(firebaseConfig);
