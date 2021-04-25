import mongoose from 'mongoose';

const articleSchema = mongoose.Schema({
    title: String,
    text: String,
    creator: String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var PostArticle = mongoose.model('PostArticle', articleSchema);

export default PostArticle;