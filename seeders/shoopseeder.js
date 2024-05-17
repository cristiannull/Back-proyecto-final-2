import Shoop from "../models/shoop.js";
import VideoGame from "../models/videoGames.js";


let total=0
for(const videogameId of req.body.videogames){
 
  const search = await VideoGame.findById(videogameId)
  total= total + search.price
  }

await Shoop.create({
    _id:"6646a3c149427943de7ac02f",
    user:"664672a4ca83a4f05f49d02e",
    videogames:["664695bacf29fe32661290d9","6646960dcf29fe32661290dd"],
    total: total,
   // paymentMethod:"",
  });

  await Shoop.create({
    _id:"6646a3e449427943de7ac033",
    user:"664672c6ca83a4f05f49d034",
    videogames:"66469632cf29fe32661290e3",
    total: total,
  // paymentMethod:"",
  });

  await Shoop.create({
    _id:"6646a3e549427943de7ac037",
    user:"664672bbca83a4f05f49d031",
    videogames:["664696cecf29fe32661290e9", "66469671cf29fe32661290e5", "66469686cf29fe32661290e7", "664695e8cf29fe32661290db"],
    total: total,
   // paymentMethod:"",
  });

  await Shoop.create({
    _id:"6646a3e649427943de7ac03b",
    user:"664672d9ca83a4f05f49d03a",
    videogames:["66469619cf29fe32661290df","664696e5cf29fe32661290eb"],
    total: total,
   // paymentMethod:"",
  });

  await Shoop.create({
    _id:"6646a3f349427943de7ac03f",
    user:"664672e2ca83a4f05f49d03d",
    videogames:["66469710cf29fe32661290ef", "66469625cf29fe32661290e1"],
    total: total,
   // paymentMethod:"",
  });
