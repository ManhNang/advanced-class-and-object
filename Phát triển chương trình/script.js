class SwitchButton {
    #status;
    #lamp;
    constructor(){
        this.#status = false;
        this.#lamp = null;
    }

    connectToLamp(electricLamp){
        if(electricLamp) this.#lamp = electricLamp;
    }

    switchOff(){
        this.#status = false;
        if(this.#lamp) this.#lamp.turnOff();
    }

    switchOn(){
        this.#status = true;
        if(this.#lamp) this.#lamp.turnOn();
    }
}

class ElectricLamp {
    #status;
    constructor(){
        this.#status = false;
    }

    turnOff(){
        this.#status = false;
        console.log("Đã tắt đèn!");
    }

    turnOn(){
        this.#status = true;
        console.log("Đang bật đèn!");
    }
}

let switchButton = new SwitchButton();
let lamp = new ElectricLamp();

switchButton.connectToLamp(lamp);

for(let i = 0; i < 10; i++){
    switchButton.switchOn();
    switchButton.switchOff();
}

