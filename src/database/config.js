import * as firebase from 'firebase'
var config = {
    apiKey: "AIzaSyDpdfSUhGvBYHb9EuAlsicNweBGMeNjJLY",
    authDomain: "photowall-29acb.firebaseapp.com",
    databaseURL: "https://photowall-29acb.firebaseio.com",
    projectId: "photowall-29acb",
    storageBucket: "photowall-29acb.appspot.com",
    messagingSenderId: "807993336731"
};
 
firebase.initializeApp(config)

const database = firebase.database()

export {database}