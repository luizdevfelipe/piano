const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.API_KEY);

async function run(user_prompt) {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  var prompt = "Faça uma música" + user_prompt + " essa música deve ser formulada utilizando exclusivamente as seguintes notas: 'a2 a2p a3 a3p a4 a4p a5 a5p аб абр b2 b3 b4 b5 b6 c2 c2p c3 c3p c4 c4p c5 c5p сб сбр c7 d2 d2p d3 d3p d4 d4p d5 d5p d6 d6p e2 e3 e4 e5 f2 f2p f3 f3p f4 f4p f5 f5p f6 f6p g2 g2p g3 g3p g4 g4p g5 g5p g6 g6p' que representam as notas de um piano de 5 oitavas. Seu formato deve ser de um array em JavaScript como do exemplo: const notas = [ 'e5', 'd5p', 'e5', 'd5p', 'e5', 'b4', 'd5', 'c5', 'a4', 'c4', 'e4', 'a4', 'b4', 'e4', 'g4p', 'b4', 'c5', 'e4', 'e5', 'd5p', 'e5', 'd5p', 'e5', 'b4', 'd5', 'c5','a4', 'c4', 'e4', 'a4', 'b4', 'e4', 'g4p', 'b4', 'c5', 'e4', 'e5', 'd5p', 'e5', 'd5p', 'e5', 'b4', 'd5', 'c5', 'a4', 'c4', 'e4', 'a4', 'b4', 'e4', 'g4p', 'b4', 'c5']. Apenas retorne o array e nenhum texto a mais!"

  const result = await model.generateContent(prompt);
  const response = await result.response;
  return response.text();
}

module.exports = { run };