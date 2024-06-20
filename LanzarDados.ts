
function LanzarDados(): string{
    const dado1: number = Math.floor(Math.random() * 6) + 1;
    const dado2: number = Math.floor(Math.random() * 6) + 1;
    let sum: number = dado1 + dado2
    let respuesta:string = `el lansamientos dado1 ${dado1} dado2 ${dado2} suma ${sum}`

    return respuesta
}

console.log(LanzarDados())