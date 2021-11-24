db.produtos.update(
  { nome: "Big Mac" },
  { $currentDate: {    
    ultimaModificacao: { $type: "date" },
  } },
);

db.produtos.find(
    { ultimaModificacao: { $exists: true } },
    { nome: true, _id: false },
);
