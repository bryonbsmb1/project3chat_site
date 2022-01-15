const db = require('../config/connection');
const { Profile, Post, Category } = require('../models');
const profileSeeds = require('./profileSeeds.json');
const categorySeeds = require('./categories.json');
const postseeds = require('./post.json');

db.once('open', async () => {
  try {
    await Profile.deleteMany({});
    await Profile.create(profileSeeds);
    await Category.deleteMany({});
    await Category.create(categorySeeds);
    await Post.deleteMany({});

    const categories = await Category.find();
    const profiles = await Profile.find();

    const postData = categories.map((category, i) => {
      return {
        ...postseeds[i],
        categoryID : category._id,
        authorID : profiles[i]._id
       }
    });

    await Post.create(postData);  

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
