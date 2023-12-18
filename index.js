const prompt = require("prompt-sync")();

class Hero {
  constructor(name, age, type) {
    this.name = name;
    this.age = age;
    this.type = type;
  }

  attack() {
    let attackDescription = "";

    switch (this.type.toLowerCase()) {
      case "mago":
        attackDescription = "usou magia";
        break;
      case "guerreiro":
        attackDescription = "usou espada";
        break;
      case "monge":
        attackDescription = "usou artes marciais";
        break;
      case "ninja":
        attackDescription = "usou shuriken";
        break;
      default:
        attackDescription = "usou um ataque indefinido";
        break;
    }

    console.log(`O ${this.type} atacou usando ${attackDescription}`);
  }
}

const numberOfHeroes = parseInt(prompt("Digite a quantidade de heróis para calcular: "));

for (let i = 0; i < numberOfHeroes; i++) {
  console.log();

  const heroName = prompt("Digite o nome do herói: ");
  const heroAge = parseInt(prompt("Digite a idade do herói: "));
  const heroType = prompt("Digite o tipo do herói (mago, guerreiro, monge, ninja): ").toLowerCase();

  const hero = new Hero(heroName, heroAge, heroType);
  hero.attack();
}
