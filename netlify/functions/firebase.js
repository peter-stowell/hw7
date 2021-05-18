const firebase = require("firebase/app")
require("firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyD60QvO3TMRb5kC9wCYdQM-lC-ACMStA30",
  authDomain: "homework7-3ac4f.firebaseapp.com",
  projectId: "homework7-3ac4f",
  storageBucket: "homework7-3ac4f.appspot.com",
  messagingSenderId: "672070785275",
  appId: "1:672070785275:web:79b5f1883cb2e3a0fa785e",
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

module.exports = firebase