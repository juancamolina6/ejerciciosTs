function GeneratorUser(name: string, lastName: string): string {
    // Validar que los nombres y apellidos no sean cadenas vacías
    if (!name.trim() || !lastName.trim()) {
        throw new Error('Name and last name must not be empty.');
    }

    let user = '';
    const nameUser = name.trim();
    const lastNameUser = lastName.trim();

    // Separar nombres y apellidos en partes
    const nameParts = nameUser.split(' ');
    const lastNameParts = lastNameUser.split(' ');

    if (nameParts.length > 1 || lastNameParts.length > 1) {
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

    // Agregar número aleatorio al final del nombre de usuario
    const randomNum = Math.floor(Math.random() * 100);
    user += randomNum;

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

// Ejemplos de uso
try {
    console.log(GeneratorUser('juan camilo', 'molina')); // Ejemplo: juacammol
    console.log(GeneratorUser('juan', 'molina castaño')); // Ejemplo: juanmolc
    console.log(GeneratorUser('juan camilo', 'molina castaño')); // Ejemplo: juacamolc
    console.log(GeneratorUser('juan', 'molina')); // Ejemplo: juanmol
    console.log(GeneratorUser('', 'molina')); // Esto debería lanzar un error
} catch (error) {
    if (error instanceof Error) {
        console.error(error.message);
    } else {
        console.error('Unknown error occurred');
    }
}

try {
    console.log(GeneratorUser('juan', '')); // Esto debería lanzar un error
} catch (error) {
    if (error instanceof Error) {
        console.error(error.message);
    } else {
        console.error('Unknown error occurred');
    }
}
