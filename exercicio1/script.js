const numeroGols = [
  [27, 4, 20, 13, 14],
  [11, 15, 12, 8, 9],
  [5, 5, 12, 16, 4],
  [20, 33, 11, 12, 19],
  [3, 3, 4, 5, 10],
];

let rankJogador = 1;

for (let gols of numeroGols) {
  console.log(`Jogador ${rankJogador++}: ${gols}`);
}
