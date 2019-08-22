import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import './index.css';
import App from './App';
//npm install --save firebase    para instalar npm
firebase.initializeApp({
    apiKey: "AIzaSyAWF3m9TkYSupw9DgkYZedG0FItUshNgyo",
    authDomain: "pseudogram12.firebaseapp.com",
    databaseURL: "https://pseudogram12.firebaseio.com",
    projectId: "pseudogram12",
    storageBucket: "gs://pseudogram12.appspot.com/",
    messagingSenderId: "748661668612",
    appId: "1:748661668612:web:615824eb19fc499e"
});

ReactDOM.render(<App />, document.getElementById('root'));