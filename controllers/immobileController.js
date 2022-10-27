const immobileModel = require("../models/Immobile");


const renderHome = (req,res)=>{
      const immobileList = immobileModel.getAll();
      res.render("home", {immobileList})
}



module.exports = {
    renderHome
}