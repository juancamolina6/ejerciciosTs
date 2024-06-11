// Generar un número aleatorio entre 1 y 10
const randomNumber: number = Math.floor(Math.random() * 10) + 1;

// Función principal del juego
function guessNumberGame(): void {
    const maxAttempts: number = 3;
    let attempts: number = 0;

    console.log("Adivina el número entre 1 y 10. Tienes 3 intentos.");

    while (attempts < maxAttempts) {
        const playerGuess: number = getPlayerGuess(); // Suponer que obtienes la suposición del jugador
        attempts++;

        if (playerGuess === randomNumber) {
            console.log("¡Felicidades! ¡Adivinaste el número!");
            return;
        } else if (playerGuess > randomNumber) {
            console.log("Tu suposición es demasiado alta.");
        } else {
            console.log("Tu suposición es demasiado baja.");
        }

        if (attempts === maxAttempts) {
            console.log(`Has perdido. El número era ${randomNumber}.`);
        }
    }
}

// Función que simula obtener la suposición del jugador
function getPlayerGuess(): number {
    // En un programa real, obtendrías el valor de alguna entrada del usuario
    // Aquí, para propósitos de demostración, devolvemos un valor fijo o uno aleatorio
    const guess: number = Math.floor(Math.random() * 10) + 1; // Simulación de suposición del jugador
    console.log(`Suposición del jugador: ${guess}`);
    return guess;
}

// Iniciar el juego
guessNumberGame();
