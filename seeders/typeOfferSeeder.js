import Typeoffer from "../models/TypeOffer.js";

await Typeoffer.create({
    _id: "665fcb5e9953ee0ba1099484",
    name: "On Sale"
})

await Typeoffer.create({
    _id:"665fcb959953ee0ba1099486",
    name: "Featured"
})

console.log("typeoffers creados muy, pero muy, pero encerio MUY BIEN :)");
process.exit();
