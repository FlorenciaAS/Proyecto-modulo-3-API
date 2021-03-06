const model = require('./Model.js');

async function findAllUsers(){
    return await model.getAllUsers();
};

async function findUser (nameOneUser){
    return await model.getOneUser(nameOneUser);
};

async function addUser(user){
    return await model.addUsers(user);
};

async function deleteUser(nameUser){
    return await model.deleteOneUser(nameUser);
};

async function putUser(nameUser, body){
    return await model.putOneUser(nameUser, body);
};

async function addSongFavorite (nameUser,bodySong){
    return await model.addOneSongFavorite(nameUser,bodySong);

};

async function deleteSongFavorite (nameSong, nameUser){
    return await model.deleteOneSongFavorite(nameSong, nameUser);
};

module.exports ={
    findAllUsers,
    findUser,
    addUser,
    deleteUser,
    putUser,
    addSongFavorite,
    deleteSongFavorite
};