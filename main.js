import "./style.css";
import cssjs from "jotform-css.js";
console.log(new cssjs.cssjs().parseCSS("*{color:blue}"));

document.querySelector("#app").innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`;
