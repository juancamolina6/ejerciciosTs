// Crear un objeto para almacenar los contactos de la agenda telefónica.
const agendaTelefonica: { [key: string]: string } = {};

// Función para agregar un contacto a la agenda
function agregarContacto(nombre: string, telefono: string): void {
    agendaTelefonica[nombre] = telefono;
    console.log(`Contacto agregado: ${nombre} - ${telefono}`);
}

// Añadir algunos contactos a la agenda
agregarContacto("Juan Pérez", "123-456-7890");
agregarContacto("María García", "234-567-8901");
agregarContacto("Pedro Sánchez", "345-678-9012");

// Crea una variable que almacene el nombre de un contacto para buscar
const nombreBusqueda: string = "María García";

// Buscar un contacto en la agenda
function buscarContacto(nombre: string): void {
    if (agendaTelefonica[nombre]) {
        console.log(`Número de teléfono de ${nombre}: ${agendaTelefonica[nombre]}`);
    } else {
        console.log(`El contacto ${nombre} no se encontró.`);
    }
}

// Realizar la búsqueda
buscarContacto(nombreBusqueda);
buscarContacto("Carlos Ramírez"); // Ejemplo de contacto no existente
