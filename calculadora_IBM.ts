function caluladoraIbm(WeightKilos: number, heightMeters:number): number{
    var Bmi: number = WeightKilos /heightMeters **2
    return Bmi
}

var WeightKilos: number = 90
var heightMeters: number = 1.69

var bmiUser = caluladoraIbm(WeightKilos,heightMeters) 

if(bmiUser < 18.5){
    console.log('Su masa corporal es de '+bmiUser+ ' se considera bajo peso')
}if (bmiUser >= 18.5 && bmiUser <= 24.9) {
    console.log('Su masa corporal es de '+bmiUser+ ' se considera normal')
}else{
    console.log('Su masa corporal es de '+bmiUser+ ' se considera sobrepeso')
}