function GeneratorUser(name:string, lastName: string) {
    var user = ''
    var nameUser = name.trim()
    var lastNameUser = lastName.trim()
    // Separar nombres y apellidos en partes
    let nameParts = nameUser.split(' ');
    let lastNameParts = lastNameUser.split(' ');

    if(nameParts.length > 1 || lastNameParts.length > 1){
        // Si hay más de una palabra en el nombre o apellido
        user = nameParts[0].charAt(0); // Primer carácter del primer nombre
        
        if (nameParts.length > 1) {
            // Añadir los primeros tres caracteres de la segunda palabra del nombre
            user += nameParts[1].substring(0, 3);
        } else {
            // Añadir los primeros tres caracteres del primer nombre
            user += nameParts[0].substring(1, 4);
        }

        // Añadir los primeros tres caracteres del primer apellido
        user += lastNameParts[0].substring(0, 3);

        if (lastNameParts.length > 1) {
            // Añadir el primer carácter de la segunda palabra del apellido
            user += lastNameParts[1].charAt(0);
        }
    } else {
        // Si no hay nombres o apellidos compuestos
        user = nameUser.substring(0, 3) + lastNameUser.substring(0, 3);
    }
    user = eliminarRepetidosSeguidos(user);
    const randomNum: number = Math.floor(Math.random() * 100)
    user = user + randomNum
    return user.toLowerCase(); // Convertir a minúsculas para consistencia
}

function eliminarRepetidosSeguidos(user: string): string {
    let nuevoUser = '';

    for (let i = 0; i < user.length; i++) {
        if (i > 0 && user[i] === user[i - 1]) {
            if (i + 1 < user.length) {
                nuevoUser += user[i + 1];
                i++;
            }
        } else {
            nuevoUser += user[i];
        }
    }

    return nuevoUser;
}


console.log(GeneratorUser('juan camilo', 'molina')); // Ejemplo: juacammol
console.log(GeneratorUser('juan', 'molina castaño')); // Ejemplo: juanmolc
console.log(GeneratorUser('juan camilo', 'molina castaño')); // Ejemplo: juacamolc
console.log(GeneratorUser('juan', 'molina')); // Ejemplo: juanmol
