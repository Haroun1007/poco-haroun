const languages = {
  en: "Hello World",
  de: "Hallo Welt",
  es: "Hola Mundo",
};
function helloWorld(prefix) {
  if (!prefix) return languages["en"];
  return languages[prefix];
}
console.log(helloWorld("de"));
console.log(helloWorld());
console.log(helloWorld("es"));
