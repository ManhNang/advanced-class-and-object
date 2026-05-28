class Rat {
    #name;
    #weight;
    #speed;
    constructor(name, weight, speed){
        this.#name = name;
        this.#weight = weight;
        this.#speed = speed;
        this.isAlive = true;
    }

    get name(){
        return this.#name;
    }

    get weight(){
        return this.#weight;
    }

    get speed(){
        return this.#speed;
    }

    say(){
        console.log("Chít Chít");
    }
}

class Cat {
    #name;
    #weight;
    #maxSpeed;
    #rats;
    constructor(name, weight, maxSpeed){
        this.#name = name;
        this.#weight = weight;
        this.#maxSpeed = maxSpeed;
        this.#rats = [];
    }

    get weight(){
        return this.#weight;
    }

    say(){
        console.log("Meo Meo");
    }

    catch(rat){
        if(this.#maxSpeed > rat.speed){
            this.#rats.push(rat);
            console.log("Đã bắt được " + rat.name);
        }
        else console.log(rat.name + " chạy nhanh quá không bắt được.");
    }

    eat(){
        for(let i = 0; i < this.#rats.length; i++){
            if(this.#rats[i].isAlive === true){
                this.#rats[i].isAlive = false;
                this.#weight += this.#rats[i].weight;
            }
        }
    }
}

let rat1 = new Rat("Chuột cống", 10, 10);
let rat2 = new Rat("Chuột nhắt", 2, 15);
let rat3 = new Rat("Chuột đồng", 8, 12);
let cat = new Cat("Tom", 15, 14);

console.log("Cân nặng ban đầu của Tom: " + cat.weight);
cat.catch(rat1);
cat.catch(rat2);
cat.catch(rat3);

cat.eat();
console.log("Cân nặng sau khi ăn của Tom: " + cat.weight);