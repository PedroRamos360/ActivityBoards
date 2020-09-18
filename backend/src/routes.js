import express from 'express';

const routes = express.Router();

routes.get('/teste', (request, response) => {
   response.send("foi bro");
});

export default routes;

