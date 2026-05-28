/**
 * LÕI GIAO DỊCH TECHBANK (LEGACY CODE)
 * LỖI: Objects không tự tương tác. Dữ liệu bị thao tác bạo lực từ bên ngoài.
 */
class BankAccount {
    #balance = 0;
    constructor(id, name, balance){
        this.id = id;
        this.name = name;
        this.#balance = balance;
    }

    getBalance(){
        return this.#balance;
    }

    withdraw(amount){
        if(amount > 0 && typeof amount === "number" && this.#balance >= amount){
            this.#balance -= amount;
        }
        else console.log("Sai định dạng hoặc số dư không đủ!");
    }

    deposit(amount){
        if(amount > 0 && typeof amount === "number"){
            this.#balance += amount;
        }
        else console.log("Sai định dạng!");
    }

    transferTo(targetAccount, amount){
        if(targetAccount !== this && targetAccount && amount > 0 && typeof amount === "number" && this.#balance >= amount){
            this.withdraw(amount);
            targetAccount.deposit(amount);
            console.log(`Đã chuyển ${amount} từ ${this.name} sang ${targetAccount.name}`);
        }
        else console.log("Tài khoản nhận sai hoặc không đủ số dư hoặc sai định dạng!");
    }
}

let alice = new BankAccount("A01", "Alice", 5000);
let bob = new BankAccount("A02", "Bob", 1000);
let charlie = new BankAccount("A03", "Charlie", 8000);

console.log(`Số dư ban đầu: Alice = ${alice.getBalance()}, Bob = ${bob.getBalance()}, Charlie = ${charlie.getBalance()}`);
alice.transferTo(bob, 1000);
bob.transferTo(charlie, 2000);
alice.transferTo(alice, 1000);
console.log(`Số dư sau khi chuyển: Alice = ${alice.getBalance()}, Bob = ${bob.getBalance()}, Charlie = ${charlie.getBalance()}`);