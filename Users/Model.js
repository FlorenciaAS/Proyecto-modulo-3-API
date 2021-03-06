const mongoose = require('mongoose');
const songModel = require('../Songs/model');

const Schema = mongoose.Schema;

var usersSchema = new Schema({
    name: String,  
    lastName:String,
    mail: String,
    age: String,
    favoriteSongs:[{ type: Schema.Types.ObjectId, ref: 'Song' }]
    
});

var User = mongoose.model('User', usersSchema);

async function getAllUsers(){
    return await User.find({}).populate('favoriteSongs');
};

async function getOneUser(nameUser){
    return await User.find({name: nameUser}).populate('favoriteSongs');
};

async function addUsers(user){
    var newUser= new User(user);
    await newUser.save();
};


async function deleteOneUser (nameUser){
    return await User.findOneAndDelete({name:nameUser});
};


async function putOneUser (nameUser, body){
   return await User.findOneAndUpdate(nameUser, body);
};

async function addOneSongFavorite (nameUser, bodySong){
    const user =  await User.findOne({name: nameUser});
    user.favoriteSongs.push(bodySong);
    await user.save();
};

async function deleteOneSongFavorite (nameSong, nameUser){
    const user = await User.findOne({name: nameUser});
    user.favoriteSongs.delete(nameSong);
    await user.save();
};

module.exports={
    getAllUsers,
    getOneUser, 
    addUsers,
    User,
    deleteOneUser,
    putOneUser,
    addOneSongFavorite,
    deleteOneSongFavorite
};
