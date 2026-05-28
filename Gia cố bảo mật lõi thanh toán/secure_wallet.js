/**
 * LÕI THANH TOÁN TECHWALLET (LEGACY CODE)
 * LỖI NGHIÊM TRỌNG: Dữ liệu bị phơi bày (Lack of Encapsulation)
 */
class SecureWallet {
    #balance = 0;

    constructor(ownerName, initialBalance){
        this.ownerName = ownerName;
        this.#balance = initialBalance;
    }

    deposit(amount){
        if(typeof amount === "number" && amount > 0){
            this.#balance += amount;
        }
        else console.log("Số tiền nhập vào không đúng định dạng");
    }

    withdraw(amount){
        if(typeof amount === "number" && this.#balance >= amount && amount > 0){
            this.#balance -= amount;
        }
        else console.log("Số tiền nhập vào không đúng định dạng hoặc số dư không đủ!");
    }

    getBalance(){
        return this.#balance;
    }
}

//Số tiền ban đầu 100k
let myWallet = new SecureWallet("Nguyen Van A", 100000);

//Nạp 100k
myWallet.deposit(100000);
//Rút 50k
myWallet.withdraw(50000);
//Xem số dư sau khi nạp và rút
console.log("Số tiền sau khi nạp và rút: " + myWallet.getBalance());

// --- HACKER TẤN CÔNG ---
console.log("Số dư ban đầu:", myWallet.getBalance());

// Hacker 1: Sửa trực tiếp số dư mà không cần gọi hàm deposit()
myWallet.#balance = 1000000;
console.log("Hacker 1 hack tiền:", myWallet.getBalance());

//// Hacker 2: Cố tình nạp -50000
myWallet.deposit(-50000);

// Hacker 3: Cố tình rút bằng chữ "mười ngàn"
myWallet.withdraw("Mười ngàn");