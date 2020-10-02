const express = require('express');
const mongoose = require('./database/index');
const routes = express.Router();

const User = require('./models/user');

// Rota de registro do usuário
routes.post('/api/register', async (req, res) => {
   const { email } = req.body;

   try {
      if (await User.findOne({ email }))
         return res.status(400).send({ error: "User already exists"});

      const user = await User.create(req.body);

      user.password = undefined;

      return res.send({ user });
   } catch (error) {
      return res.status(400).send({ error: 'Registration failed' });
   }
});

// Rota de login do usuário
routes.post('/api/authenticate', (req, res) => {
   res.send("Usuário logado");
});

// Rota de pegar informações do usuário
routes.get('/api/me', (req, res) => {
   res.send("Informações do usuário");
});

module.exports = routes;

