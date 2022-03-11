const fs = require('fs').promises;

fs.readFile('./simpsons.json', 'utf-8')
  .then((fileContent) => {
    return JSON.parse(fileContent);
  })
  .then((simpsons) => {
    return simpsons.map(({ id, name }) => `${id} - ${name}`);
  })
  .then((strings) => {
    strings.forEach((string) => console.log(string));
  });

  async function getSimpsonById(id) {
    const simpsons = await fs
      .readFile('./simpsons.json', 'utf-8')
      .then((fileContent) => JSON.parse(fileContent));
    const chosenSimpson = simpsons.find((simpson) => simpson.id === id);
    if (!chosenSimpson) {
        throw new Error('id não encontrado');
    }
    return chosenSimpson;
  }

  async function filterSimpsons() {
    const simpsons = await fs
      .readFile('./simpsons.json', 'utf-8')
      .then((fileContent) => JSON.parse(fileContent));
    
    const newArray = simpsons.filter(simpson => simpson.id !== '10' && simpson.id !== '6');
    await fs.writeFile('./simpsons.json', JSON.stringify(newArray));
}