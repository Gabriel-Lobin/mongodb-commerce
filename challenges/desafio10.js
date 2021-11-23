db.produtos.updateMany(
  {},
  { $push: { "vendasPorDia": { $each: [0, 0, 0, 0, 0, 0, 0] } } },
);

db.produtos.updateOne(
  { nome: "Big Mac" },
  { $inc: { "vendasPorDia.4": 60 } },
);

db.produtos.updateMany(
  { tags: { $in: ["bovino", "pão"] } },
  { $inc: { "vendasPorDia.7": 120 } },
);

db.produtos.find(
    { },
    { nome: true, vendasPorDia: true , _id: false },
);
