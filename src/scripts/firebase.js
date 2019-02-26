const firebase = require('firebase/app');
require("firebase/firestore");
firebase.initializeApp({
    apiKey: "AIzaSyASvIZydpFWRQF98N0645Jl-Ag40MTTnjg",
    authDomain: "republia-222218.firebaseapp.com",
    databaseURL: "https://republia-222218.firebaseio.com",
    projectId: "republia-222218",
    storageBucket: "",
    messagingSenderId: "750372444315"
});


var db = firebase.firestore();
db.settings({
    timestampsInSnapshots: true
});

export {db};
/*
db.collection("videosData").doc("allVideos").get().then((doc) => {
    const videosData = {
        api: doc.data().apikey,
        playlist: doc.data().playlist
    }
    export {
        videosData
    };
});
*/
/*
db.collection("users").add({
        first: "Ada",
        last: "Lovelace",
        born: 1815
    })
    .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function (error) {
        console.error("Error adding document: ", error);
    });
*/
/*
db.collection("users").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
    });
});
*/

