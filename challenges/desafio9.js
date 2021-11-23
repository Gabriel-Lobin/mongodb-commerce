db.produtos.updateOne(
  { nome: "Cheddar McMelt" },
  { $pop: { ingrediente: 1 } }
);

db.produtos.find(
    { },
    { nome: true, ingredientes: true , _id: false },
);
