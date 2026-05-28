/**
 * LÕI TÍNH TIỀN ĐƠN HÀNG TECHMART (LEGACY CODE)
 * LỖI LOGIC: Đối tượng chỉ chứa dữ liệu. Logic xử lý bị ném ra các hàm toàn cục.
 */
class Product {
    #name;
    #price;
    constructor(name, price, quantity){
        this.#name = name;
        this.#price = price;
        this.quantity = quantity;
    }

    getName(){
        return this.#name;
    }

    getPrice(){
        return this.#price;
    }
}

class Order {
    #orderId;
    constructor(orderId){
        this.#orderId = orderId;
        this.items = [];
        this.discountRate = 0.1;
    }

    addItem(product){
        if(product.quantity > 0 && product.getPrice() > 0){
            this.items.push(product);
        }
        else console.log(product.getName() + " thiếu giá tiền hoặc số lượng!");
    }

    removeItem(product){
        this.items.splice(this.items.indexOf(product), 1);
    }

    getSubtotal(){
        return this.items.reduce((subtotal, item) =>  subtotal + (item.getPrice() * item.quantity), 0);
    }

    getTaxAmount(){
        return this.getSubtotal() * (1 - this.discountRate) * 0.1;
    }

    getFinalTotal(){
        return this.getSubtotal() * (1 - this.discountRate) + this.getTaxAmount();
    }
}

let mouse = new Product("Chuột không dây", 200000 , 2);
let keyboard = new Product("Bàn phím cơ", 800000 , 1);
let test = new Product("Test", 0, -5);
let myOrder = new Order("#TM123");

myOrder.addItem(mouse);
myOrder.addItem(test);
myOrder.addItem(keyboard);
console.log("Số tiền thanh toán cuối cùng: " + myOrder.getFinalTotal());

myOrder.removeItem(mouse);
console.log("Số tiền thanh toán cuối cùng: " + myOrder.getFinalTotal());
// Lỗ hổng: Nếu có 10 file giao diện cần tính tiền, người ta phải import các hàm này đi khắp nơi.