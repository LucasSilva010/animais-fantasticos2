// ---------Babel---------

// Babel é um compilador. Transforma código novo em código antigo. Ex: const nome = 'Lucas' vira: var nome = 'Lucas';

// Browser Suporte
// Para que um browser possa suportar algo novo de JavaScript é preciso que ele esteja atualizado, mas nem todo usuário possui a última versão do browser instalada.

// ---------Can I Use---------
// O site https://caniuse.com/ mostra em quais browsers a novidade está disponível ou não.

// ---------Polyfill VS Transpiler---------
// Polyfill cria métodos / funções com o memso nome das atuais, porém utilizando código antigo para permitir o uso em browsers que não possuem a API.

// Transpiler transforma código novo em código antigo. Ou seja, transforma const em var, arrow functions em funções normais, classes em funções construtoras, etc.

// O babel faz as duas funções.

// ---------Instalação---------
// npm install --save-dev @babel/core @babel/preset-env @babel/plugin-transform-runtime babel-loader

// Instala o Babel, as configurações padrões e o loader para webpack.
// @babel/plugin-transform-runtime é para otimizar o código gerado.

