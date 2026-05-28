/**
 * HỆ THỐNG ĐIỀU KHIỂN TECHDRONE (LEGACY CODE)
 * LỖI NGHIÊM TRỌNG: Trạng thái vật lý bị phơi bày (Lack of Encapsulation)
 */

class SecureDrone {
    id;
    #altitude;
    #battery;
    constructor(id) {
        this.id = id;
        this.#altitude = 0;
        this.#battery = 100;
    }

    changeAltitude(meters){
        if(meters < 0 || meters > 120 || typeof meters !== "number"){
            console.log("Chỉ được bay trong khoảng từ 0 - 120m");
            return 0;
        }
        return meters;
    }

    flyUp(meters) {
        if(this.#battery > 0){
            this.#altitude += this.changeAltitude(meters);
            this.#battery--;
        }
        else console.log("Đã hết pin!");
    }

    flyDown(meters){
        if(this.#battery > 0){
            this.#altitude -= this.changeAltitude(meters);
            this.#battery--;
        }
        else console.log("Đã hết pin!");
    }

    getStatus(){
        return this.#altitude;
    }
}

let deliveryDrone = new SecureDrone("DRN-99");

deliveryDrone.flyUp(50); 
console.log("Cảnh báo: Drone đang ở độ cao ", deliveryDrone.getStatus());

deliveryDrone.flyDown(20); 
console.log("Cảnh báo: Drone đang ở độ cao ", deliveryDrone.getStatus());

//deliveryDrone.#altitude = 1000;
deliveryDrone.flyUp(200);
deliveryDrone.flyUp("mười mét");
deliveryDrone.flyDown(-200);
deliveryDrone.flyDown("mười mét");