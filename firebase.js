import firebase from "firebase/app"
import "firebase/firestore"
var firebaseConfig = {
  apiKey: "AIzaSyCzvaGjS96tRARcN1H0FHXGz5u9O2SpB5Q",
  authDomain: "cynthias-baby-shower.firebaseapp.com",
  databaseURL: "https://cynthias-baby-shower.firebaseio.com",
  projectId: "cynthias-baby-shower",
  storageBucket: "cynthias-baby-shower.appspot.com",
  messagingSenderId: "271531207117",
  appId: "1:271531207117:web:83ea9fd30522e001e63c84",
  measurementId: "G-GLX6LWYG45",
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export const firestore = firebase.firestore()
window.firebase = firebase

export default firebaseConfig
