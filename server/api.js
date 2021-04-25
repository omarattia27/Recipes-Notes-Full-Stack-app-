import express from 'express';

import { getArticles, getArticle, createArticle, deleteArticle } from './methods.js';

const api = express.Router();

api.get('/', getArticles);
api.post('/', createArticle);
api.get('/:id', getArticle);
api.delete('/:id', deleteArticle);

export default api;