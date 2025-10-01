function game(){
  const readlineSync = require('readline-sync');
  const messageWarning = "¡Advertencia! si usted no usa o tiene instalado 'CommonJs', no sé podrá continuar la ejecución del juego";

  console.log(`${messageWarning}`);
  console.log("");

  const userName = readlineSync.question("¿Cómo te llamas?: ");
  console.log("")

  console.log(`¡Qué bonito nombre ${userName}!`);

  const questionForTheUser = readlineSync.question(`${userName}, ¿Quiéres jugar?: `);

  if (questionForTheUser === "si" || questionForTheUser === "sí"){
    console.log("Comenzando el juego....");
  }
}
  else if (question === "no"){
    console.log("Saliendo del juego....");
  }

console.log("Gracias por jugar :)");
console.log("");

console.log(`¡Cuídate ${userName}! ^_^`);

game();
