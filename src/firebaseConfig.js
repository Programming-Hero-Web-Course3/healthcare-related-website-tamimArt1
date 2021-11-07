import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyD7Cm5CAgS9XhQ9dyCOzx7mo_ckYzY2pvg',
  authDomain: 'dental-hospital-a6a24.firebaseapp.com',
  projectId: 'dental-hospital-a6a24',
  storageBucket: 'dental-hospital-a6a24.appspot.com',
  messagingSenderId: '361687743328',
  appId: '1:361687743328:web:6f4c832c74a4a538657c05',
};

const firebaseInit = () => {
  initializeApp(firebaseConfig);
};

export default firebaseInit;
