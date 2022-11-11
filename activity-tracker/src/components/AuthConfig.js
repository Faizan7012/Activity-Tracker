import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC9ymXNbvTRpLnofCLtq0a0GsogF1JJYM0",
    authDomain: "activity-tracker-37902.firebaseapp.com",
    projectId: "activity-tracker-37902",
    storageBucket: "activity-tracker-37902.appspot.com",
    messagingSenderId: "80950548623",
    appId: "1:80950548623:web:c845863d2eef7b2792f8fa",
    measurementId: "G-GYYL037ZEN"
  };
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app)