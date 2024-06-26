import TypeOffer from "../models/TypeOffer.js";

async function seedTypeOffer() {
  const typeOffer = [
    {
      _id: "665fcb5e9953ee0ba1099484",
      name: "On Sale",
    },
    {
      _id: "665fcb959953ee0ba1099486",
      name: "Featured",
    },
  ];
  await TypeOffer.create(typeOffer);
  console.log("typeoffers creados muy, pero muy, pero encerio MUY BIEN :)");
}

export default seedTypeOffer;
