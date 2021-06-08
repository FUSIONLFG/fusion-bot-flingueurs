const mongoose = require("mongoose");
const { Guild } = require("../../models/index");

module.exports =  client => {
    client.createGuild = async guild => {
    const merged = Object.assign({ _id: mongoose.Type.ObjectId() }, 
    newGuild);
    const createGuild = await new Guild(merged);
    createGuild.save().then(g => console.log(`Nouveau serveur -> ${g.
    guildName}`));
    }
};
