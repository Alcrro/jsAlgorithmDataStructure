const names = ["james", "jess", "lily", "sevy"];

// names.forEach((name) => console.log(name));
const myForEach = (array, cb) => {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    cb(element);
  }
};

myForEach(names, (name) => {
  // console.log(name);
});

//! async ex:
const loadPokemon = async (id, cb) => {
  const response = await fetch(`http://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await response.json();
  cb(data);
};

loadPokemon(56, (pokemon) => {
  console.log(pokemon);
});
