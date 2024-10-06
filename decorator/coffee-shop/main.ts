interface CoffeeProduct {
  getDescription(): string;
  getPrice(): number;
}

class Espresso implements CoffeeProduct {
  description = "Espresso";
  price = 3.5;

  getDescription() {
    return this.description;
  }

  getPrice() {
    return this.price;
  }
}

class DarkRoast implements CoffeeProduct {
  description = "Dark Roast";
  price = 2.5;

  getDescription() {
    return this.description;
  }

  getPrice() {
    return this.price;
  }
}

class Milk implements CoffeeProduct {
  decoratedCoffee: CoffeeProduct;
  description: string;

  constructor(coffee: CoffeeProduct, description: string = "milk") {
    this.decoratedCoffee = coffee;
    this.description = description;
  }

  getDescription() {
    return this.decoratedCoffee.getDescription() + ", " + this.description;
  }

  getPrice() {
    return this.decoratedCoffee.getPrice() + 0.5;
  }
}

class Sugar implements CoffeeProduct {
  decoratedCoffee: CoffeeProduct;

  constructor(coffee: CoffeeProduct) {
    this.decoratedCoffee = coffee;
  }

  getDescription() {
    return this.decoratedCoffee.getDescription() + ", sugar";
  }

  getPrice() {
    return this.decoratedCoffee.getPrice() + 0.5;
  }
}

function main() {
  const espresso = new Espresso();
  const darkRoast = new DarkRoast();

  const espressoWithMilk = new Milk(espresso);
  const darkRoastWithMilk = new Milk(darkRoast);

  const espressoWithMilkAndSugar = new Sugar(espressoWithMilk);
  const darkRoastWithMilkAndSugar = new Sugar(darkRoastWithMilk);
  const darkRoastWithMilkAndSugarAndSugar = new Sugar(
    darkRoastWithMilkAndSugar,
  );

  console.log(espressoWithMilkAndSugar.getDescription());
  console.log(espressoWithMilkAndSugar.getPrice());

  console.log(darkRoastWithMilkAndSugarAndSugar.getDescription());
  console.log(darkRoastWithMilkAndSugarAndSugar.getPrice());
}

main();
