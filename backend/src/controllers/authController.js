const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Yup = require('yup');

const User = require('../models/user');
const authConfig = require('../config/auth.json');

const router = express.Router();

function generateToken(params = {}) {
   return jwt.sign(params, authConfig.secret, {
      expiresIn: 86400,
   });
}

router.post('/register', async (req, res) => {
   const { 
      email,
      firstname,
      lastname,
      password
   } = req.body;

   const data = {
      email,
      firstname,
      lastname,
      password
   };

   const schema = Yup.object().shape({
      email: Yup.string().email().required(),
      firstname: Yup.string().required(),
      lastname: Yup.string().required(),
      password: Yup.string().required(),
   });

   try {
      await schema.validate(data, {
         abortEarly: false,
      });
   } catch (error) {
      return res.status(400).send(error);
   }

   try {
      if (await User.findOne({ email }))
         return res.status(400).send({ error: "User already exists"});

      const user = await User.create(req.body);

      user.password = undefined;

      return res.send({ 
         user,
         token: generateToken({ id: user.id })
      });
   } catch (error) {
      return res.status(400).send({ error: 'Registration failed' });
   }
});

router.post('/authenticate', async (req, res) => {
   const { email, password } = req.body;

   const user = await User.findOne({ email }).select('+password');

   if (!user)
      return res.status(400).send({ error: 'User not found' });

   if (!await bcrypt.compare(password, user.password))
      return res.status(400).send({ error: 'Invalid password'})

   user.password = undefined;

   res.send({
      user, 
      token: generateToken({ id: user.id })
   });
});

module.exports = app => app.use('/auth', router);