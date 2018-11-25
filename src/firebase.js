import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyA1tw7CvVUUF93yTG6kesQwmecvji3QYTg",
  authDomain: "sicecui.firebaseapp.com",
  databaseURL: "https://sicecui.firebaseio.com",
  projectId: "sicecui",
  storageBucket: "sicecui.appspot.com",
  messagingSenderId: "14336781185"
};

firebase.initializeApp(config);

export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const firebaseAuth = firebase.auth();
export const firebaseDb = firebase.database();