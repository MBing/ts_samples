// -> other way of importing a namespace with tsc -> /// <reference path="./math/circle.ts" />
import * as Circle from "./math/circle";
import calc from "./math/rectangle";

console.log(Circle.PI);
console.log(Circle.calculateCirumcumference(10));
console.log(calc(20, 50));