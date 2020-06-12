import express from 'express';

const routes = express.Router();

routes.get('/', (req, res) => {
    res.json({name: "Teste"})
})

export default routes;