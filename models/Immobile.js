const fs = require("fs")


function Immobile(id, urlImage, price, status, description){
    this.id = id;
    this.urlImage = urlImage;
    this.price = price;
    this.status = status;
    this.description = description;
}

function getAll(){
    const immobileList = JSON.parse(
        fs.readFileSync("database/immobiles.json", "utf-8")
    )
    return immobileList.map((immobile)=>{
           return new Immobile(
              immobile.id,
              immobile.urlImage,
              immobile.price,
              immobile.status,
              immobile.description
           )
    })
}


module.exports = {
    getAll
}