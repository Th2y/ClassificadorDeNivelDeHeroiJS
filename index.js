const prompt = require("prompt-sync")();

const heroiName = prompt("Digite o nome do herói: ");
const XP = parseInt(prompt("Digite a quantidade de XP: "));
let level = "";

if (XP < 1000) {
  level = "Ferro";
} else if (XP >= 1000 && XP < 2000) {
  level = "Bronze";
} else if (XP >= 2000 && XP < 5000) {
  level = "Prata";
} else if (XP >= 5000 && XP < 7000) {
  level = "Ouro";
} else if (XP >= 7000 && XP < 8000) {
  level = "Platina";
} else if (XP >= 8000 && XP < 9000) {
  level = "Ascendente";
} else if (XP >= 9000 && XP < 10000) {
  level = "Imortal";
} else {
  level = "Radiante";
}

console.log(`O Herói de nome **${heroiName}** está no nível de **${level}**`);
