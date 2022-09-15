// Array data
const characters = [
  {
    name: "Luke Skywalker",
    height: 172,
    mass: 77,
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: 202,
    mass: 136,
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: 150,
    mass: 49,
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: 188,
    mass: 84,
    eye_color: "blue",
    gender: "male",
  },
];

/* MAP */

// 1. Get an array of all names
const allNames = characters.map((character) => character.name);
// console.log(allNames);

// 2. Get an array of all heights
const allHeights = characters.map((character) => character.height);
// console.log(allHeights);

// 3. Get an array of objects with just name and height properties
const nameAndHeight = characters.map((character) => ({
  name: character.name,
  height: character.height,
}));
// console.log(nameAndHeight);

// 4. Get an array of all first names
const allFirstNames = characters.map(
  (characters) => characters.name.split(" ")[0]
);
// console.log(allFirstNames);

/* FILTER */

// 1. Get characters with mass greater than 100
const greater100Characters = characters.filter(
  (character) => character.mass > 100
);
// console.log(greater100Characters);

// 2. Get characters with height less than 200

// 3. Get name and gender of all male characters
const maleCharacters = characters
  .filter((character) => character.gender === "male")
  .map((character) => character.name.toUpperCase());
// console.log(maleCharacters);

// 4. Get name, genedr and mass of all female characters

/* REDUCE */

// 1. Get the total mass of all characters (acumulado->acc) (valor actual->cur)
const totalMass = characters.reduce((acc, cur) => {
  return acc + cur.mass;
}, 0);
// console.log(totalMass);

// 2. Get the total height of all characters
const totalHeight = characters.reduce((acc, cur) => acc + cur.height, 0);
// console.log(totalHeight);

// 3. Get the total number of characters in all the character names
const totalNameCharacters = characters.reduce(
  (acc, cur) => acc + cur.name.length,
  0
);
// console.log(totalNameCharacters);

// 4. Get the total number of characters by eye color (hint. a map of eye color to count)
const charactersByEyesColor = characters.reduce((acc, cur) => {
  const color = cur.eye_color;

  if (acc[color]) {
    acc[color]++;
  } else {
    acc[color] = 1;
  }

  return acc;
}, {});
// console.log(charactersByEyesColor);

// const charactersColor = characters
//   .map((character) => character.eye_color)
//   .reduce((acc, cur) => {
//     if (acc[cur]) {
//       acc[cur]++;
//     } else {
//       acc[cur] = 1;
//     }

//     return acc;
//   }, {});
// console.log(charactersColor);
