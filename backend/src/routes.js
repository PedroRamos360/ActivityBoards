const express = require('express');

const routes = express.Router();

// Rota de registro do usuário
routes.post('/api/register', (req, res) => {
   const { email, firstname, lastname, password } = req.body;
   res.send("Usuário registrado");
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

