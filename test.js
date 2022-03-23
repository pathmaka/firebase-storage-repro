const firebase = require('firebase/app');
const { getStorage, ref, uploadString } = require('firebase/storage');

const firebaseConfig = {
    apiKey: 'AIzaSyAJmkVT-sk5rgJilGTfgh0oIESCN9cBSc4',
    authDomain: 'storage-issue-repro.firebaseapp.com',
    projectId: 'storage-issue-repro',
    storageBucket: 'storage-issue-repro.appspot.com',
    messagingSenderId: '454662959297',
    appId: '1:454662959297:web:5383edabbff67407746440',
    measurementId: 'G-SCR0WMM6ZQ',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = getStorage();

async function main() {
    const fileRef = ref(storage, `test-${Math.round(Math.random() * 10000)}.txt`);

    console.log('Uploading first version...');
    await uploadString(fileRef, 'Hello World');

    console.log('Uploading second version...');
    await uploadString(fileRef, 'Hello World 2');
}

main().then(
    () => {
        console.log('done');
    },
    (error) => {
        console.log(error);
    }
);
