class Persona {
  constructor(nombre, edad, dni, sexo, peso, altura, fechaNacimiento) {
    this.nombre = nombre;
    this.edad = edad;
    this.dni = dni;
    this.sexo = sexo; // H para hombres, M para mujeres
    this.peso = peso;
    this.altura = altura;
    this.fechaNacimiento = fechaNacimiento;
  }

  calcularGeneracion() {
    if (this.anioNacimiento >= 1930 && this.anioNacimiento <= 1948) {
      return "Silent Generation";
    } else if (this.anioNacimiento >= 1949 && this.anioNacimiento <= 1968) {
      return "Baby Boom";
    } else if (this.anioNacimiento >= 1969 && this.anioNacimiento <= 1980) {
      return "X";
    } else if (this.anioNacimiento >= 1981 && this.anioNacimiento <= 1993) {
      return "Millennials";
    } else if (this.anioNacimiento >= 1994 && this.anioNacimiento <= 2010) {
      return "Z";
    } else {
      return "No definida";
    }
  }

  mostrarGeneracion() {
    const generacion = this.calcularGeneracion();
    document.write(
      `${this.nombre} pertenece a la Generación ${generacion}. <br>`
    );
  }

  esMayorDeEdad() {
    if (2023 - this.anioNacimiento >= 18) {
      document.write(`${this.nombre} es mayor de edad. <br>`);
    } else {
      document.write(`${this.nombre} es menor de edad. <br>`);
    }
  }

  mostrarDatos() {
    document.write(` 
      Nombre: ${this.nombre}.<br> 
      Edad: ${this.edad}.<br>
      DNI: ${this.dni}.<br>
      Sexo: ${this.sexo}.<br>
      Peso: ${this.peso}kg.<br> 
      Altura: ${this.altura}m.<br>
      Año de Nacimiento: ${this.anioNacimiento}.<br>
      `);
  }
}

function capturarDatos() {
  let nombre = document.getElementById("inputNombre").value;
  let edad = document.getElementById("inputEdad").value;
  let dni = document.getElementById("inputDni").value;
  let sexo = document.getElementById("inputSexo").value; // H para hombres, M para mujeres
  let peso = document.getElementById("inputPeso").value;
  let altura = document.getElementById("inputAltura").value;
  let fechaNacimiento = document.getElementById("inputNacimiento").value;
  let persona = new Persona(
    nombre,
    edad,
    dni,
    sexo,
    peso,
    altura,
    fechaNacimiento
  );
  return persona;
}

let persona = capturarDatos();
