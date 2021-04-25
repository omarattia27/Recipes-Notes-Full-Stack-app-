import express from 'express';
import mongoose from 'mongoose';
import schema from './schema.js';

const router = express.Router();

export const getArticles = async (req, res) => { 
    try {
        const recipe = await schema.find();
        res.status(200).json(recipe);
        console.log("Get request recieved");
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
}

export const getArticle = async (req, res) => { 
    const { id } = req.params;

    try {
        const recipe = await schema.findById(id);
        
        res.status(200).json(recipe);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
}

export const createArticle = async (req, res) => {
    const { title, text, selectedFile, creator } = req.body;

    const recipe = new schema({ title, text, selectedFile, creator})

    try {
        await recipe.save();

        res.status(200).json(recipe );
        console.log("Post Request recieved", recipe);
    } catch (err) {
        console.log("Error");
        res.status(404).json({ message: err.message });
    }
}

export const deleteArticle = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await schema.findByIdAndRemove(id);

    res.json();
    console.log("Succesful Deletion");
}

export default router;