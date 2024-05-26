const readlineSync = require('readline-sync')

console.log("Menú Ejercicios")
console.log("----------------")

console.log("1. Algoritmo que transforme de grados Celsius a Fahrenheit")
console.log("2. Algoritmo que lea un numero entero, obtenga y presente el doble y el triple del número.")
console.log("3. Diseñar un Algoritmo que lea 4 variables y calcule e imprima su producto, su suma y su media aritmética.")
console.log("4. Diseñar un algoritmo que lea el peso de un hombre en libras y nos devuelva su peso en kilogramos y gramos")
console.log("5. Diseñar un algoritmo que resuelva la siguiente expresión matemática: x=((sen(a)+cos(b))*(trunc(a) mod 2))+(raiz(a^3)/(a*b+c))")
console.log("6. Un empleado trabaja 40 horas en jornada normal en la semana a razón $5 la hora.")
console.log("7. Algoritmo que pida dos números y presenta el mayor de los dos siempre y cuando el primero sea par y el segundo impar")
console.log("8. Leer un carácter y deducir si está o no comprendido entre las letras a y z ambas inclusive y sino verificar si es un signo de puntuacion \", . ; :\"")
console.log("9. Determinar cuánto se debe pagar por x cantidad de colas, considerando que si son menos de 12 colas, el costo por unidad es de $0,25 caso contrario el precio será 10% menos.")
console.log("10. El almacén “AlgoritmoX” tiene una promoción: a todos los trajes que tienen un precio superior a 200, se les aplicará un descuento del 10% y al resto tendrán un descuento de solo $10 dólares.")
console.log("11. Dado un día en numero, presentar el nombre de ese día.")
console.log("12. Dado un mes en número, presentar el nombre de ese mes.")
console.log("13. Dado 5 nombres almacenarlo en un arreglo y luego presentar cada nombre del arreglo desde el ultimo al primero sin usar ciclos.")
console.log("14. Dado una dirección cualquiera presentar la dirección, el primer carácter, el del medio y el ultimo de dicha dirección.")
console.log("15. Almacenar 5 valores aleatorios en un arreglo e imprimir el primero valor si es par positivo y el ultimo si es impar negativo.")
console.log("16. Dado un arreglo vacío, añadir 3 nombres y presentar el primer y el ultimo carácter de cada nombre desde el arreglo.")
console.log("17. Dada una cadena presentar el primer carácter siempre y cuando sea un digito")
console.log("18. Dada una cadena presentar el ultimo carácter siempre y cuando sea una letra")
console.log("19. Dada una cadena presentar el primer carácter siempre y cuando sea una vocal")
console.log("20. Dada una cadena presentar el carácter de en medio, siempre y cuando sea un caracte de puntuación: “;” | “:” | “.” | “,”")
console.log("21. Dado dos caracteres indicar si son iguales o si el primero es menor que el segundo o mayor que el segundo")
console.log("22. Dado dos nombres indicar si son iguales o si el primero es menor que el segundo o mayor que el segundo")
console.log("23. Dado una cadena indicar cuantos elementos tiene, sin usar ciclos")
console.log("24. Dado un arreglo indicar cuantos elementos tiene, sin usar ciclos")

const ejercicio = readlineSync.question("Elija  [1...24]: ")

switch (ejercicio) {
    case "1":
    // Código para el ejercicio 1
    console.log("Ingrese un valor en grados Celsius:")
    const celsius = readlineSync.question()
    const fahrenheit = (celsius * 9/5) + 32
    console.log(`El valor en Fahrenheit es: `,fahrenheit)
    break;
    case "2":
    // Código para el ejercicio 2
    console.log("Ingrese un número entero:")
    const num = readlineSync.question()
    console.log(`El doble del número es: `,num * 2)
    console.log(`El triple del número es: `,num * 3)
    break;
    case "3":
        // Código para el ejercicio 3
    console.log("Ingrese el primer número:")
    const num1 = readlineSync.question()

    console.log("Ingrese el segundo número:")
    const num2 = readlineSync.question()

    console.log("Ingrese el tercer número:")
    const num3 = readlineSync.question()

    console.log("Ingrese el cuarto número:")
    const num4 = readlineSync.question()

    const producto = num1 * num2 * num3 * num4
    const suma = Number(num1) + Number (num2) + Number(num3) + Number(num4)
    const media = suma / 4

    console.log(`El producto de los números es: `,producto)
    console.log(`La suma de los números es: `,suma)
    console.log(`La media aritmética de los números es: `,media)
    break

    case "4":
        // Código para el ejercicio 4
        const pesoLibra = readlineSync.question("Ingrese su peso en libras: ")

    const pesoKilogramos = pesoLibra * 0.453593
    const pesoGramos = pesoKilogramos * 1000

    console.log(`Su peso en kilogramos es: `,pesoKilogramos)
    console.log(`Su peso en gramos es: `,pesoGramos)
    break
    case "5":
        // Código para el ejercicio 5
        function resolverExpresion(a, b, c) {
            // Funciones matemáticas necesarias
            function sen(x) {
              return Math.sin(x * Math.PI / 180)
            }
          
            function cos(x) {
              return Math.cos(x * Math.PI / 180)
            }
          
            function trunc(x) {
              return Math.trunc(x)
            }
          
            function raiz(x) {
              return Math.cbrt(x)
            }
          
            // Evaluar la expresión
            let parte1 = (sen(a) + cos(b)) * (trunc(a) % 2)
            let parte2 = raiz(Math.pow(a, 3)) / (a * b + c)
            let resultado = parte1 + parte2;
          
            return resultado;
          }
          
          // Ejemplo de uso
          let a = 30; // en grados
          let b = 45; // en grados
          let c = 2;
          
          let resultado = resolverExpresion(a, b, c)
          console.log(`El resultado de la expresión es: `,resultado)
          break
    case "6":
     // Código para el ejercicio 6
    const horasNormales = parseInt(readlineSync.question("Ingrese las horas normales trabajadas: "))
    const horasExtras = parseInt(readlineSync.question("Ingrese las horas extras trabajadas: "))

    const pagoPorHoraNormal = 5;
    const pagoPorHoraExtra = pagoPorHoraNormal * 2

    const salarioPorHorasNormales = horasNormales * pagoPorHoraNormal
    const salarioPorHorasExtras = horasExtras * pagoPorHoraExtra
    const salarioTotal = salarioPorHorasNormales + salarioPorHorasExtras
    const iess = salarioTotal * 0.10
    const sueldoNeto = salarioTotal - iess

    console.log("Salario por horas normales: $" + salarioPorHorasNormales)
    console.log("Salario por horas extras: $" + salarioPorHorasExtras)
    console.log("Salario total: $" + salarioTotal)
    console.log("Impuesto al seguro social (IESS): $" + iess)
    console.log("Sueldo neto a recibir: $" + sueldoNeto)
    break
   
    case "7":
        // Código para el ejercicio 7
        let num5 = parseInt(readlineSync.question('Ingrese el primer numero: '))
        let num6 = parseInt(readlineSync.question('Ingrese el segundo numero: '))
        
        if (isNaN(num5) || isNaN(num6)) {
          console.error('Ambos valores deben ser numeros')
          process.exit(1)
        }
        
        if (num5 % 2 === 0 && num6 % 2 !== 0) {
          if (num5 > num6) {
            console.log('El numero ' + num5 + ' es par y mayor que ' + num6)
          } else {
            console.log('El numero ' + num6 + ' es impar y mayor que ' + num5)
          }
        } else if (num5 % 2 !== 0 && num6 % 2 === 0) {
          if (num6 > num5) {
            console.log('El numero ' + num6 + ' es par y mayor que ' + num5)
          } else {
            console.log('El numero ' + num5 + ' es impar y mayor que ' + num6)
          }
        } else {
          if (num5 > num6) {
            console.log('El numero ' + num5 + ' es mayor que ' + num6)
          } else if (num6 > num5) {
            console.log('El numero ' + num6 + ' es mayor que ' + num5)
          } else {
            console.log('Ambos numeros son iguales')
          }
        }
        break


    case "8":
    // Código para el ejercicio 8
    let char = readlineSync.question('Ingrese un caracter: ')

    if (char >= 'a' && char <= 'z') {
      console.log('El caracter "' + char + '" esta comprendido entre las letras a y z.')
    } else if (char === ',' || char === '.' || char === ';' || char === ':') {
      console.log('El caracter "' + char + '" es un signo de puntuacion.')
    } else {
      console.log('El caracter "' + char + '" no es una letra entre a y z ni un signo de puntuacion.')
    }
    break
   
    case "9":
        // Código para el ejercicio 9

        const cantidadDeColas = readlineSync.question("Ingrese la cantidad de colas: ")
        if (cantidadDeColas < 12) {
          const costo = cantidadDeColas * 0.25
          console.log("El costo es: $" + costo)
        } else {
          const costo = cantidadDeColas * 0.9 * 0.25
          console.log("El costo es: $" + costo)
        
    }
    break


    case "10":
     // Código para el ejercicio 10
     const precioTraje = readlineSync.question("Ingrese el precio del traje: ");

    if (precioTraje > 200) {
    const descuento = precioTraje * 0.10
    const precioConDescuento = Number(precioTraje) - Number(descuento)
    const precioConIva = precioConDescuento * 1.15
    console.log("El precio del traje con descuento es: $" + precioConDescuento)
    console.log("El precio del traje con descuento e IVA es: $" + precioConIva)
    } else {
    const descuento = 10
    const precioConDescuento = Number(precioTraje) -Number( descuento)
    const precioConIva = precioConDescuento * 1.15;
    console.log("El precio del traje con descuento es: $" + precioConDescuento)
    console.log("El precio del traje con descuento e IVA es: $" + precioConIva)
    }
    break

    case "11":
        // Código para el ejercicio 11
    
        const dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]
        const numeroDeDia = readlineSync.question("Ingrese un numero: ")
        
        if (numeroDeDia >= 1 && numeroDeDia <= 7) {
          console.log("El día es: " + dias[numeroDeDia - 1])
        } else {
          console.log("El número de día no es válido.")
        }
        break
    
    case "12":
    // Código para el ejercicio 12
    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
    const numeroDeMes = readlineSync.question("Ingrese un numero: ")
    
    if (numeroDeMes >= 1 && numeroDeMes <= 12) {
      console.log("El mes es: " + meses[numeroDeMes - 1])
    } else {
      console.log("El número de mes no es válido.")
    }        
    break

    case "13":
        // Código para el ejercicio 13
        const nombres = ["Juan", "María", "Pedro", "Ana", "Luis"]

        // Invertir el orden de los elementos en el arreglo
        const nombresInvertidos = [...nombres].reverse()

        // Presentar cada nombre del arreglo desde el último al primero sin usar ciclos
        console.log(nombresInvertidos)
        break

        case "14":
        // Código para el ejercicio 14
        const direccion = readlineSync.question("Ingrese una direccion: ")

        const primerCaracter = direccion[0]
        const ultimoCaracter = direccion[direccion.length - 1]
        const longitudDireccion = direccion.length
        const carácterDelMedio = direccion.substring(Math.floor(longitudDireccion / 2), Math.floor(longitudDireccion / 2) + 1)
        
        console.log("Dirección: " + direccion)
        console.log("Primer carácter: " + primerCaracter)
        console.log("Carácter del medio: " + carácterDelMedio)
        console.log("Último carácter: " + ultimoCaracter)
 break

    case "15":
        // Código para el ejercicio 15
        const valores = []
        for (let i = 0; i < 5; i++) {
          valores.push(Math.floor(Math.random() * 21) - 10)
        }
        
        // Determinar el primer y último elementos del arreglo
        const primerValor = valores[0]
        const ultimoValor = valores[valores.length - 1]
        
        // Imprimir los resultados
        console.log('Valores aleatorios: ' + valores)
        
        if (primerValor > 0 && primerValor % 2 === 0) {
          console.log('Primer valor: ' + primerValor)
        } else if (ultimoValor < 0 && ultimoValor % 2 !== 0) {
          console.log('Último valor: ' + ultimoValor)
        } else {
          console.log('No se cumple ninguna condición')
        }
        break


        case "16":
       // Código para el ejercicio 16     
        const nombre1 = readlineSync.question("Ingrese el primer nombre: ")
        const nombre2 = readlineSync.question("Ingrese el segundo nombre: ")
        const nombre3 = readlineSync.question("Ingrese el tercer nombre: ")
        
        // Create an array of names
        nombres = [nombre1, nombre2, nombre3]
        
        // Print the results
        for (i = 0; i < nombres.length; i++) {
          console.log("Nombre " + (i + 1) + ": " + nombres[i])
          console.log("Primer carácter: " + nombres[i][0])
          console.log("Último carácter: " + nombres[i][nombres[i].length - 1])
          console.log('--------------------')
        }
        break

        case "17":
            // Código para el ejercicio 17
        const cadena = readlineSync.question("Ingrese una cadena: ")

        if (cadena.length > 0 && cadena[0] >= '0' && cadena[0] <= '9') {
          console.log("El primer carácter es un dígito: " + cadena[0])
        } else {
          console.log("El primer carácter no es un dígito.")
        }
        break

        case "18":
            // Código para el ejercicio 18

        const cadena1 = readlineSync.question("Ingrese una cadena: ")

        if (cadena1[cadena1.length - 1] >= 'a' && cadena1[cadena1.length - 1] <= 'z' || cadena1[cadena1.length - 1] >= 'A' && cadena1[cadena1.length - 1] <= 'Z') {
          console.log("El último carácter es una letra: " + cadena1[cadena1.length - 1])
        } else {
          console.log("El último carácter no es una letra.")
        }
        break


    case "19":
    // Código para el ejercicio 19


        const cadena2 = readlineSync.question("Ingrese una cadena: ")

        const vocales = ['a', 'e', 'i', 'o', 'u']
        
        let encontrado = 0
        
        for (let i = 0; i < vocales.length; i++) {
          if (cadena2[0] === vocales[i]) {
            console.log("El primer carácter es una vocal: " + cadena2[0])
            encontrado = 1
          }
        }
        
        if (encontrado === 0) {
          console.log("El primer carácter no es una vocal.")
        }
        break


    case "20":
    // Código para el ejercicio 20
    const cadena3 = readlineSync.question("Ingrese una cadena: ");

    const longitudCadena = cadena3.length
    
    let caracterMedio
    
    if (longitudCadena % 2 === 0) {
      caracterMedio = cadena3[longitudCadena / 2 - 1]
    } else {
      caracterMedio = cadena3[Math.floor(longitudCadena / 2)]
    }
    
    if (caracterMedio === ";" || caracterMedio === ":" || caracterMedio === "." || caracterMedio === ",") {
      console.log("El carácter de en medio es un carácter de puntuación: " + caracterMedio)
    } else {
      console.log("El carácter de en medio no es un carácter de puntuación.")
    }
    break


    case "21":
        // Código para el ejercicio 21

    const caracter1 = readlineSync.question("Ingrese el primer caracter: ")
    const caracter2 = readlineSync.question("Ingrese el segundo caracter: ")
    
    if (caracter1 === caracter2) {
      console.log("Los caracteres son iguales.")
    } else if (caracter1 < caracter2) {
      console.log("El primer carácter es menor que el segundo.")
    } else {
      console.log("El primer carácter es mayor que el segundo.")
    }
    break

    case "22":
        // Código para el ejercicio 22

    const nombr1 =readlineSync.question("ingrese el primer nombre: ")
    const nombr2 = readlineSync.question("ingrese el segundo nombre: ")
    if (nombr1 === nombr2) {
        console.log("Los nombres son iguales");
    } else if (nombr1 < nombr2) {
        console.log("El primer nombre es menor que el segundo");
    } else {
        console.log("El primer nombre es mayor que el segundo");
    }
    break


    case "23":
        // Código para el ejercicio 23

    const cadena4 = readlineSync.question("Ingrese una cadena: ");
    console.log("La cadena tiene " + cadena4.length + " caracteres");
    break

    case "24":
        // Código para el ejercicio 24
        const arreglo = [1, 2, 3, 4, 5];
        console.log("El arreglo tiene " + arreglo.length + " elementos");
        break


}
