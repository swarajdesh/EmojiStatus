const functions = require('firebase-functions');

// The Firebase Admin SDK to access Cloud Firestore.
const admin = require('firebase-admin');
admin.initializeApp();

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("My favorite emoji is \u{1F43C}");
});

exports.addUserToFirestore = functions.auth.user().onCreate((user) =>  {

    //this code runs evrytime new user is created
    var usersRef = admin.firestore().collection("users")
    return usersRef.doc(user.uid).set({
        displayName: user.displayName,
        emojis: '\u{1F43C}\u{1F33F}\u{2764}', //panda,herb,heart emoji

    });
});
