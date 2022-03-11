const express = require('express');
const cors = require('cors');
const {firebase} = require('@firebase/app');
require('@firebase/firestore');

const app = express();
app.use(express.urlencoded({extended: false}));
app.use(cors());

firebase.initializeApp({
  apiKey: "AIzaSyCjrkT__Fd4eGjawbmqFD-nv-NetbywaHk",
  authDomain: "shinhub.firebaseapp.com",
  projectId: "shinhub",
  storageBucket: "shinhub.appspot.com",
  messagingSenderId: "234561194082",
  appId: "1:234561194082:web:021b2e75c2b9b30a5d693b",
  measurementId: "G-JQ2SRLVZJX"
});

var db = firebase.firestore();

app.get("/", (req, res) => {
    return res.send('server is running');
  
});

app.get("/api/:id", (req, res) => {
  var id =  req.params.id.toString();
  var videoRef = db.collection('videos').doc(id).get();

  videoRef.then(function(doc) {
  console.log(doc, doc.data());
  if (doc.data()) {
    return res.send(doc.data());
  }
});
  
});
  
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});