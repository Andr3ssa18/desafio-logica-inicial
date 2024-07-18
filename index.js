let nomeHeroi = "Andressa";
let xpHeroi = 8500;

let levels = [
  { xp: 1000, level: "Ferro" },
  { xp: 2000, level: "Bronze" },
  { xp: 5000, level: "Prata" },
  { xp: 7000, level: "Ouro" },
  { xp: 8000, level: "Platina" },
  { xp: 9000, level: "Ascendente" },
  { xp: 10000, level: "Imortal" },
  { xp: Infinity, level: "Radiante" },
];

let nivel = levels.find((level) => xpHeroi <= level.xp).level;

console.log("A Heróina " + nomeHeroi + " está no nível de " + nivel);
