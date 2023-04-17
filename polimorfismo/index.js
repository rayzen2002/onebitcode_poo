class Vehicle {
    move(){
        console.log(`O veiculo esta se movendo`)
    }
}

class Car extends Vehicle{
    move(){
        console.log(`O Carro esta se movendo`)
    }
}

class Ship extends Vehicle{
    move(){
        console.log(`O navio esta se movendo`)
    }
}

class Aircraft extends Vehicle{
    move(speed){
        console.log(`A aeronave esta voando a ${speed} km/h`)
    }
}

const delorean = new Car()
const titanic = new Ship()
const epoch = new Aircraft()

// delorean.move()
// titanic.move()
// epoch.move(300)

function start(Vehicle){
    console.log(`Iniciando um veiculo...`)
    Vehicle.move()
}
start(delorean)
start(titanic)
start(epoch)