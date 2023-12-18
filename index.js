const prompt = require("prompt-sync")();

const value = parseInt(prompt("Digite a quantidade de herois para calcular: "));

for (let i = 0; i < value; i++){
  console.log();
  const wins = parseInt(prompt("Digite a quantidade de vitórias: "));
  const losses = parseInt(prompt("Digite a quantidade de derrotas: "));
  
  calculateRankLevel(wins, losses);
  
  function calculateRankLevel(wins, losses) {
    const winLossBalance = wins - losses;
    let level = '';
  
    if (wins < 10) {
      level = "Ferro";
    } else if (wins >= 11 && wins <= 20) {
      level = "Bronze";
    } else if (wins >= 21 && wins <= 50) {
      level = "Prata";
    } else if (wins >= 51 && wins <= 80) {
      level = "Ouro";
    } else if (wins >= 81 && wins <= 90) {
      level = "Diamante";
    } else if (wins >= 91 && wins <= 100) {
      level = "Lendário";
    } else {
      level = "Imortal";
    }
  
    console.log(`O Herói tem saldo de ${winLossBalance} e está no nível de ${level}`);
  }
}


