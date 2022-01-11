const { Schema, model } = require('mongoose');
const postSchema = new Schema({
 title: {
     type : String,
     required : true
 },
 content : {
     type : String,
     required : true
 },
 authorID : {
     type : Schema.Types.ObjectId,
     ref : "Profile"
 },
 createdAt : {
    type : Date,
    default : Date.now
 },
 categoryID : {
    type : Schema.Types.ObjectId,
    ref : "Category"
}
});

const Post = model('Post', postSchema);

module.exports = Post;
