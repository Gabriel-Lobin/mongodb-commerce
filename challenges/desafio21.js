db.produtos.count(
  { 
    $expr: { $gt: ["$curtidas", "$vendidos"] },
  },
  { vendidos: true, curtidas: true, _id: false }, 
);
