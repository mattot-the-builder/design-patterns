import { MovementType, Walk, Run, Fly, Swim } from "./movement-types.ts";

function main() {
  let characterMovements: MovementType;

  characterMovements = new Walk();
  characterMovements.move();

  characterMovements = new Run();
  characterMovements.move();

  characterMovements = new Fly();
  characterMovements.move();

  characterMovements = new Swim();
  characterMovements.move();
}

main();
