const game = () {
  const readlineSync = require('readline-sync');
  const messageWarning = "¡Advertencia! si usted no usa o tiene instalado 'CommonJs', no sé podrá continuar la ejecución del juego";

  console.log(`${messageWarning}`);
  console.log("");

  const userName = readlineSync.question("¿Cómo te llamas?: ");
  console.log("");

  console.log(`¡Qué bonito nombre ${userName}!`);

  const questionForTheUser = readlineSync.question(`${userName}, ¿Quiéres jugar?: `);

  if (questionForTheUser === "si" || questionForTheUser === "sí"){
    console.log("Comenzando el juego....");

    const number = undefined;
    let trys = 0;

    while (true) {
      let userPlaying = readlineSync.question(`${userName} por favor adivina un número del 1 al 100: `);
      userPlaying = parseInt(userPlaying);
      trys += 1;

      if (userPlaying < number) {
        console.log("Demasiado bajo");
      }
      else if (userPlaying > number) {
        console.log("Demasiado alto");
      }
      else if (userPlaying === number) {
        console.log(`¡Felicidades ${userName} has encontrado el número ${number} en ${trys} intentos`);
        break;
      }
    }
  }
  else if (question === "no"){
    console.log("Saliendo del juego....");
  }

  console.log("Gracias por jugar :)");
  console.log("");

  console.log(`¡Cuídate ${userName}! ^_^`);
}
game();
