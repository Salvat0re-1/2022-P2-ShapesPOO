import Arma from './Arma.js';
import Enemigo from './Enemigo.js';
import Jugador from './Jugador.js';

const jugador = new Jugador(100, 50);
console.log('Pablo',jugador);

const cuchillo = new Arma('cuchillo', 10, true);
const pistola = new Arma('pistola', 20, false, 7);
const escopeta = new Arma('escopeta', 40, false, 8);
const espada = new Arma('espada', 40, true, 8);
const bazuca = new Arma('bazuca', 100, true, 1);
const puño = new Arma('puño', 1, true);

console.log(`cuchillo`, cuchillo);
console.log(`pistola`, pistola);
console.log(`escopeta`, escopeta);
console.log(`espada`, espada);
console.log(`bazuca`, bazuca);
console.log(`puño`, puño);

jugador.recolectarArma(cuchillo);
jugador.recolectarArma(pistola);
jugador.recolectarArma(escopeta);
jugador.recolectarArma(espada);
jugador.recolectarArma(bazuca);
jugador.recolectarArma(puño);
console.log('Pablo',jugador);

const enemigos = [];
for (let i = 1; i <= 10; i++) {
    const enemyProps = {
        vida: 100,
        poder: Math.random()*50,
        nombre: `enemigo-${i%2===0 ? 'par-'+i : i}`, // 'enemigo-'+i
    }
    enemigos.push(new Enemigo(enemyProps))
}
console.log(enemigos);

// SIMULAR ATAQUE A ENEMIGO
console.log('Simulacion de ataque');
while(enemigos.length > 0 && jugador.estaVivo){
    const enemigo = enemigos.pop();
    console.log('enemigo', enemigo);
    while(enemigo.vida > 0 && jugador.estaVivo){
        const arma = jugador.armas[parseInt(Math.random()*jugador.armas.length)];
        jugador.atacar(enemigo, arma);
        console.log('enemigo', enemigo);
        console.log('arma', arma);
        if (enemigo.vida > 0) {
            enemigo.atacar(jugador);
            console.log('Pablo atacado', jugador);
        }
    }
    console.log('enemigo muerto, se aproxima nuevo enemigo');
}
console.warn('Los enemigos ganan');
// console.log('enemigo', enemigo);
// jugador.atacar(enemigo, jugador.armas[0]);
// console.log('enemigo', enemigo);
// if(enemigo.vida > 0) enemigos.push(enemigo);