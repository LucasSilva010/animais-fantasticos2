const path = require("path");

module.exports = {
  entry: "./js/script.js",
  output: {
    path: path.resolve(__dirname, "./"),
    filename: "main.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/transform-runtime"],
          },
        },
      },
    ],
  },
};

// __dirname é uma variável global que contém o diretório do arquivo atual.
// path.resolve() é um método do módulo path que resolve uma sequência de caminhos ou segmentos de caminho em um caminho absoluto.
// no exemplo acima, path.resolve(__dirname, "./") resolve o diretório atual do arquivo webpack.config.js.
// O resultado é o caminho absoluto do diretório onde o arquivo webpack.config.js está localizado.
// Isso é útil para garantir que o Webpack saiba exatamente onde colocar o arquivo de saída main.js, independentemente de onde o comando Webpack seja executado.

