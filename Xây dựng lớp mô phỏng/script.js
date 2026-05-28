class FlashLamp {
    #battery;
    constructor(battery){
        this.status = false;
        this.#battery = battery;
    }

    set battery(newBattery){
        if(!newBattery){
            console.log("Pin mới chưa có năng lượng!");
        }
        else this.#battery = newBattery;
    }

    get battery(){
        return `Năng lượng còn lại: ${this.#battery.energy}`;
    }

    light(){
        if(this.status){
            console.log("Lighing");
        }
        else console.log("Not lighting");
    }

    turnOn(){
        this.status = true;
        this.#battery.decreaseEnergy();
    }

    turnOff(){
        this.status = false;
    }
}

class Battery {
    #energy = 0;
    constructor(energy){
        this.#energy = energy;
    }

    set energy(newEnergy){
        if(newEnergy < 0 || newEnergy > 100){
            console.log("Năng lượng không được < 0 hoặc > 100");
        }
        else this.#energy = newEnergy;
    }

    get energy(){
        return this.#energy;
    }

    decreaseEnergy(){
        if(this.#energy > 0) this.#energy--;
    }
}

let battery = new Battery();
battery.energy = 10;

let flashLamp = new FlashLamp();
flashLamp.battery = battery;

console.log(flashLamp.battery);
flashLamp.light();

console.log("Turn ON");
flashLamp.turnOn();
flashLamp.light();
console.log(flashLamp.battery);

console.log("Turn OFF");
flashLamp.turnOff();
flashLamp.light();
console.log(flashLamp.battery);
