import firebase from 'firebase/app';
import 'firebase/database';

/* This module is breaking when deploying nextjs to now
with mode set to serverless. No time to wait for a fix :( 
Instead of using realtime data with firebase I'll instead populate app
using the rest api: https://github.com/zeit/next.js/issues/6655 */

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export default firebase;
