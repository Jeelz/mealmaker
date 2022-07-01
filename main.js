menu = {
    courses: {
        appetizers: [],
        mains: [],
        desserts: [],
    },
    addDishToCourse(courseName, dishName, dishPrice) {
        const dish = {
            name: dishName,
            price: dishPrice
        };
        return this.courses[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName) {
        const dishes = this.courses[courseName];
        let num = Math.floor(Math.random()*dishes.length);
        return dishes[num];
    },
    getRandomMeal()  {
        let appetizer = menu.getRandomDishFromCourse('appetizers');
        let main = menu.getRandomDishFromCourse('mains');
        let dessert = menu.getRandomDishFromCourse('desserts');
        let totalPrice = appetizer.price + main.price + dessert.price;
        return `You ordered ${appetizer['name']}, and after is ${main['name']}, and the last one ${dessert['name']} and that will be ${totalPrice} dollars.`
    }
}    

menu.addDishToCourse('appetizers', 'Fries', 5);
menu.addDishToCourse('appetizers', 'Wings', 14);
menu.addDishToCourse('appetizers', 'Mac and Cheese', 21);
menu.addDishToCourse('mains', 'Steak', 12);
menu.addDishToCourse('mains', 'Salmon', 10);
menu.addDishToCourse('mains', 'Burger', 27);
menu.addDishToCourse('desserts', 'Brownie', 8);
menu.addDishToCourse('desserts', 'Ice Cream', 2);
menu.addDishToCourse('desserts', 'Cake', 9);

let meal = menu.getRandomMeal()
console.log(meal);
