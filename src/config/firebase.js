import firebase from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';

const settings = { timestampsInSnapshots: true };

const firebaseConfig = {
    apiKey: "AIzaSyCI7KdfvqqbwzMCbwvDHqmdoFFSvf9KVUw",
    authDomain: "scriptshit.firebaseapp.com",
    databaseURL: "https://scriptshit.firebaseio.com",
    projectId: "scriptshit",
    storageBucket: "scriptshit.appspot.com",
    messagingSenderId: "80484944311",
    appId: "1:80484944311:web:eea10540c9322a33"
};

firebase.initializeApp(firebaseConfig);

firebase.firestore().settings(settings);

export default firebase;