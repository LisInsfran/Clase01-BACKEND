class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
        this._nombre = nombre;
        this._apellido = apellido;
        this._libros = libros;
        this._mascotas = mascotas;;
    }

    getFullName() {
        return `${this._nombre} ${this._apellido}`;
    }

    addMascota(nombreMascota) {
        this._mascotas.push(nombreMascota);
    }

    countMascotas() {
        return this._mascotas.length;
    }

    addBook(titulo, nombreAutor) {
        this._libros.push({nombre: titulo, autor: nombreAutor})
    }

    getBookNames() {
        return this._libros.map( (libro) => libro.nombre)
    }
}

const libros = [
    {
        nombre: "Hija de Humo y Hueso",
        autor: "Laini Taylor"
    },
    {
        nombre: "Monster",
        autor: "Naoki Urasawa"
    }

]

const randomGuy = new Usuario("Lis", "Insfran", libros ,["Perro", "Gato"])

console.log(randomGuy.getFullName()); // Lis Insfran

console.log(randomGuy.getBookNames()); // 'Hija de Humo y Hueso', 'Monster'
randomGuy.addBook("Trono de Cristal", "Sarah J. Maas")
console.log(randomGuy.getBookNames()); // 'Hija de Humo y Hueso', 'Monster', 'Trono de Cristal'

console.log(randomGuy.countMascotas()); // 2
randomGuy.addMascota('Pez');
console.log(randomGuy.countMascotas()); // 3