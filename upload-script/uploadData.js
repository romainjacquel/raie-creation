const firestoreService = require('firestore-export-import');
const serviceAccount = require('./serviceAccountKey.json');

const databaseUrl = 'https://raie-creation-9dbaa.firebaseio.com';

firestoreService.initializeApp(serviceAccount, databaseUrl);

firestoreService.restore('data.json');
