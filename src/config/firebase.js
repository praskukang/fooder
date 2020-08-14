import firebase from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';

const settings = { timestampsInSnapshots: true };

const firebaseConfig = {

};

firebase.initializeApp(firebaseConfig);

firebase.firestore().settings(settings);

export default firebase;