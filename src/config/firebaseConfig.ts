import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyCdmttccd6NJzyqIVQo0AoP9S0H7kC25hs",
    authDomain: "fragate-petshop.firebaseapp.com",
    projectId: "fragate-petshop",
    storageBucket: "fragate-petshop.appspot.com",
    messagingSenderId: "313923183942",
    appId: "1:313923183942:web:0d9bd1c5adb993012a7147",
    measurementId: "G-99SB4XY58E"
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);