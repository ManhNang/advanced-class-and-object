/**
 * HỆ THỐNG TECHHOME (LEGACY CODE)
 * LỖI: Objects không tương tác. Phụ thuộc vào một vòng lặp toàn cục (Global Loop).
 */
class SmartLight {
    #id;
    constructor(id){
        this.#id = id;
        this.isOn = false;
    }

    turnOn(){
        this.isOn = true;
    }

    turnOff(){
        this.isOn = false;
    }

    get id(){
        return this.#id;
    }
}

class MotionSensor {
    #id;
    #linkedDevice;
    constructor(id){
        this.#id = id;
        this.hasMotion = false;
        this.#linkedDevice = null;
    }

    connectDevice(deviceObject){
        this.#linkedDevice = deviceObject;
        console.log("Đã kết nối với thiết bị " + deviceObject.id);
    }

    trigger(){
        if(this.#linkedDevice){
            if(this.hasMotion){
                this.#linkedDevice.turnOn();
                console.log("Đã bật đèn " + this.#linkedDevice.id);
            }
            else {
                this.#linkedDevice.turnOff();
                console.log("Đã tắt đèn " + this.#linkedDevice.id);
            }
        }
        else console.log("Chưa kết nối với thiết bị nào!");
    }

    dectectMotion(isOn){
        this.hasMotion = isOn;
        this.trigger();
    }
}

let light1 = new SmartLight("L01");
let light2 = new SmartLight("L02");
let sensor1 = new MotionSensor("S01");

sensor1.dectectMotion(true);
sensor1.connectDevice(light1);
sensor1.dectectMotion(true);
sensor1.dectectMotion(false);
sensor1.connectDevice(light2);
sensor1.dectectMotion(true);
