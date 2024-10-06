interface MovementType {
  move(): void;
}

class Walk implements MovementType {
  move() {
    console.log("walk");
  }
}

class Run implements MovementType {
  move() {
    console.log("run");
  }
}

class Fly implements MovementType {
  move() {
    console.log("fly");
  }
}

class Swim implements MovementType {
  move() {
    console.log("swim");
  }
}

export { MovementType, Walk, Run, Fly, Swim };
