const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.API_KEY);

async function run() {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const prompt = "Todas as notas da música 'Fur Elise' em sequência no formato de array JavaScript, essa música deve ser fomulada utilizando exclusivamente as seguites notas: 'a2 a2p a3 a3p a4 a4p a5 a5p аб абр b2 b3 b4 b5 b6 c2 c2p c3 c3p c4 c4p c5 c5p сб сбр c7 d2 d2p d3 d3p d4 d4p d5 d5p d6 d6p e2 e3 e4 e5 f2 f2p f3 f3p f4 f4p f5 f5p f6 f6p g2 g2p g3 g3p g4 g4p g5 g5p g6 g6p'. Também faça outro array com os tempos em milisegundos em que cada nota deve ser pressionada, assuma semínimas 500 ms e Colcheias  = 250 ms. O resultado esperado deve seguir o seguinte padrão, sem nenhum texto a mais: const notas = [ 'e5', 'd5p', 'e5', 'd5p', 'e5', 'b4', 'd5', 'c5', 'a4', 'c4', 'e4', 'a4', 'b4', 'e4', 'g4p', 'b4', 'c5', 'e4', 'e5', 'd5p', 'e5', 'd5p', 'e5', 'b4', 'd5', 'c5','a4', 'c4', 'e4', 'a4', 'b4', 'e4', 'g4p', 'b4', 'c5', 'e4', 'e5', 'd5p', 'e5', 'd5p', 'e5', 'b4', 'd5', 'c5', 'a4', 'c4', 'e4', 'a4', 'b4', 'e4', 'g4p', 'b4', 'c5'] const tempos = [ 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250,]"

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  console.log(text);
}

module.exports = { run };