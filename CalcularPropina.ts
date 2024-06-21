function Calcular_propina(factura:number): number{
    const propina = factura*(15/100)
    return propina
}

let factura = 15000

let propina = Calcular_propina(factura)

console.log(`la propina de la fatura de ${factura} es de ${propina}`)