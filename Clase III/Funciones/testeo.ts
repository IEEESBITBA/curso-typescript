import Polinomica from "./Clases/Polinomica";
import Trigonometrica, {FuncionesTrigonometricas} from "./Clases/Trigonometrica";
import Composicion from "./Clases/Composicion";
import Suma from "./Clases/Suma";
import Producto from "./Clases/Producto";

function main() {
    // Definiendo funciones de formato aleatorio
    // f(x) = 3
    let constante3 = new Polinomica([3]);
    // f(x) = x^2
    let cuadrado= new Polinomica([0,0,1]);
    // f(x) = cos(x)
    let coseno = new Trigonometrica(FuncionesTrigonometricas.Cos);
    // f(x) = (cos(x))^2
    let cosenoCuadrado = new Producto(coseno, coseno);
    // f(x) = sin(x)
    let seno = new Trigonometrica(FuncionesTrigonometricas.Sin);
    // f(x) = (sin(x))^2
    let senoCuadrado = new Composicion(cuadrado, seno);
    // f(x) = 3sin(x)
    let constantePorSeno = new Producto(seno, constante3);
    // f(x) = 2x^3 + sin(x)
    let polinomicaYSeno = new Suma(new Polinomica([0, 0, 0, 2]), seno);
    // f(x) = sin(x^2)
    let senoDelCuadrado = new Composicion(seno, cuadrado);

    console.log(constantePorSeno.evaluar(Math.PI/2)); // 3
    console.log(senoCuadrado.evaluar(Math.PI/4)) // 0.5
    console.log(constante3.evaluar(5), constante3.evaluar(3), constante3.evaluar(16)) // 3 3 3
    console.log(cuadrado.evaluar(2)); // 4
    console.log(coseno.evaluar(Math.PI)); // -1
    console.log(cosenoCuadrado.evaluar(Math.PI/6)); // 0.25
    console.log(polinomicaYSeno.evaluar(1)); // 2.84147...
    console.log(senoDelCuadrado.evaluar(1)); // 0.7086...
}

main();
