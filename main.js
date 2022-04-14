class Apple {
    constructor(weight = 10) {
        this.weight = weight;
    }

    getWeight() {
        return this.weight;
    }

    setWeight(weight) {
        this.weight = weight;
    }

    deresen(){
        this.weight--;
    }

}


class Human {
    constructor(name, gender, weight = 0) {
        this.name = name;
        this.gender = gender;
        this.weight = weight;
    }

    getWeight() {
        return this.weight;
    }

    setWeight(weight) {
        this.weight = weight;
    }

    checkApple(apple) {
        if (apple > 0) {
            return true;
        } else {
            return false;
        }
    }

    eat(apple) {
        if (this.checkApple(apple.getWeight())) {
            this.weight++;
            apple.deresen();
        }else {
            alert('tao het roi');
        }
    }
    say(str){
        alert(str)

    }
    getName(){
        return this.name
    }
    setName(name){
        this.name = name;

    }


}
let human1 = new Human("echo","male");
let apple = new Apple();

human1.eat(apple)
human1.eat(apple)
human1.eat(apple)
console.log(apple.getWeight())
console.log(human1.getWeight())