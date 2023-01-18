let firebaseConfig = {
    apiKey: "AIzaSyA5Tet2jge8NCNP6Zlvy0t_v8r3aCStX24",
    authDomain: "blog-db8af.firebaseapp.com",
    projectId: "blog-db8af",
    storageBucket: "blog-db8af.appspot.com",
    messagingSenderId: "357187870469",
    appId: "1:357187870469:web:1118f8337b826d83efa16c",
};

firebase.initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
let db = firebase.firestore();

