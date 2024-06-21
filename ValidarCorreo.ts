function isValidEmail(email: string): string {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let result = emailRegex.test(email);
    if(result){
        return `El correo ${email} es correcto`
    }else{
        return `El correo ${email} esta mal escrito`
    }    
}

// Ejemplo de uso:
const email1 = "test@example.com";
const email2 = "invalid-email";

console.log(isValidEmail(email1))
console.log(isValidEmail(email2))