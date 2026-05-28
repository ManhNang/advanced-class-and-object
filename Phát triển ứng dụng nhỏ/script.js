class Apple {
    #weight;
    constructor(weight){
        this.#weight = 10;
    }

    get weight(){
        return this.#weight;
    }

    decrease(){
        this.#weight--;
    }

    isEmpty(){
        if (this.#weight > 0) return false;
        return true;
    }
}

class Human {
    #name;
    #gender;
    #weight;
    constructor(name, gender, weight){
        this.#name = name;
        this.#gender = gender;
        this.#weight = weight;
    }

    isMale(){
        if(this.#gender){
            console.log(`${this.#name} có giới tính Nam`);
        }
        else console.log(`${this.#name} có giới tính Nữ`);
    }

    setGender(isMale){
        if(typeof isMale === 'boolean'){
            this.#gender = isMale;
        }
        else console.log("Nhập sai! Hãy nhập dạng true/false");
    }

    checkApple(apple){
        if(apple) return true;
    }

    eat(apple){
        if(!apple.isEmpty()){
            apple.decrease();
            this.#weight++;
            console.log(`${this.#name} vừa ăn 1 miếng táo`);
        }
        else console.log("Hết táo");
    }

    say(){
        console.log("Ú I A Í A, Ú Ị");
    }

    get name(){
        return this.#name;
    }

    set name(newName){
        if(newName && ((newName.charCodeAt() > 64 && newName.charCodeAt() < 91) || (newName.charCodeAt() > 96 && newName.charCodeAt() < 123))){
            this.#name = newName;
        }
        else console.log("Chỉ được có kí tự chữ");
    }

    get weight(){
        return this.#weight;
    }

    set weight(newWeight){
        if(typeof newWeight === 'number' && newWeight > 0){
            this.#weight = newWeight;
        }
        else console.log("Cân nặng phải là số và lớn hơn 0");
    }
}

let apple = new Apple();
let adam = new Human("Adam", true, 60);
let eva = new Human("Eva", false, 45);

for(let i = 0; i < 6; i++){
    adam.eat(apple);
    console.log("Táo còn lại: " + apple.weight);
    console.log("Cân nặng của Adam: " + adam.weight);
    eva.eat(apple);
    console.log("Táo còn lại: " + apple.weight);
    console.log("Cân nặng của Eva: " + eva.weight);
}