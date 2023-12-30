const UserModel = require('../models/UserModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
var admin = require("firebase-admin");

var serviceAccount = require("../../firebase_credentials.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});


const signup = async (req, res) => {
    try {

        const hashpassword = await bcrypt.hash(password, 12);
        const response = await UserModel.create({
            username,
            email,
            password: hashpassword
        })
        res.status(201).send("User created successfully ");


    } catch (error) {
        res.status(500).json(error.message)
    }
}
const signin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await UserModel.findOne({ email })
        !user ? res.status(404).send("User not found") : null;
        const ValidUser = await bcrypt.compare(password, user.password)
        if (ValidUser) {
            const token = jwt.sign({ id: user._id, username: user.username }, process.env.TOKEN_SECRET, { expiresIn: '1h' });
            res.status(200).json({ token });
        }

    } catch (error) {
        console.log(error)
        res.status(404).send("user not found")
    }
}
const googleSignin = async (req, res) => {
    const { idToken } = req.body;
  
    try {
      // Verify the Google Sign-In token using Firebase Admin
      const decodedToken = await admin.auth().verifyIdToken(idToken);
      console.log(decodedToken)
      const uid = decodedToken.uid;
      
  
      // Check if the user with this Firebase UID already exists in your database
      let user = await UserModel.findOne({ googleId: uid });
  
      if (!user) {
        // If the user doesn't exist, create a new user with Google information
        user = await UserModel.create({
          username: decodedToken.name,
          email: decodedToken.email,
          googleId: uid,
             photoUrl:decodedToken.picture
        });
      }
  
      // Now you can authenticate the user, generate a session, or JWT
  
      // For example, you can create a session or JWT and send it back to the client
      const token = jwt.sign({ id: user._id, username: user.username }, process.env.TOKEN_SECRET, { expiresIn: '1h' });
  
      res.status(200).json({ token });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Server error' });
    }
  };

module.exports = {
    signup,
    signin,
    googleSignin
}