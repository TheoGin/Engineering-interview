import { count, increase } from "./counter.js";
import * as counterModule from './counter.js'

const { count: c} = counterModule;
increase();
console.log(count);
console.log(counterModule.count);
console.log(c);
