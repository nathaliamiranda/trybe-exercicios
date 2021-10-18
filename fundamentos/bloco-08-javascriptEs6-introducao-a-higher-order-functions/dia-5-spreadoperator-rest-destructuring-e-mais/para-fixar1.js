// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Kiwi', 'Morango', 'Cereja'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Manga', 'Limão', 'Laranja'];

const fruitSalad = (fruit, additional) => {
  return [...specialFruit, ...additionalItens]
};

console.log(fruitSalad(specialFruit, additionalItens));