let tipoConversion: number = 2;
let valor: number = 250;

// Asegurarse de que los valores no son null
if (tipoConversion !== null && valor !== null) {
    let tipoConversionNum = tipoConversion;
    let valorNum = valor;

    // Aquí puedes llamar a tus funciones de conversión con tipoConversionNum y valorNum
    if (tipoConversionNum === 1) {
        let fahrenheit: number = convertirCelsiusAFahrenheit(valorNum)
        console.log('los '+valorNum + ' celsius son '+fahrenheit + ' fahrenhei');
    } else if (tipoConversionNum === 2) {
        let celsius: number = convertirFahrenheitACelsius(valorNum)
        console.log('los '+valorNum + ' fahrenhei son '+celsius + ' celsius');
    } else {
        console.log("Opción de conversión no válida.");
    }
} else {
    console.log("Entrada cancelada o inválida.");
}

// Funciones de conversión
function convertirCelsiusAFahrenheit(celsius: number): number {
    return (celsius * 9/5) + 32;
}

function convertirFahrenheitACelsius(fahrenheit: number): number {
    return (fahrenheit - 32) * 5/9;
}
