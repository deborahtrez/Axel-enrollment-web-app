import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAEyrvcmK75JwrmIVVFzoS5KZsy2XiRvUM",
    authDomain: "novum-student-enrollment.firebaseapp.com",
    databaseURL: "https://novum-student-enrollment.firebaseio.com",
    projectId: "novum-student-enrollment",
    storageBucket: "novum-student-enrollment.appspot.com",
    messagingSenderId: "267610275875",
    appId: "1:267610275875:web:9adf9b9aae776c1a127196"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire.database().ref();