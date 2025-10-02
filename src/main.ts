import { add } from "./add";
import { randint } from "./random";
import { simpleSearch } from "./simpleSearch";
import { subtract } from "./subtract";

let searchable: number[] = []
for (let i: number = 0; i < randint(1, 20); i++) {
    searchable.push(randint(1, 20))
}

const a = simpleSearch(searchable, randint(1, 20))
const b = simpleSearch(searchable, randint(1, 20))
const c = simpleSearch(searchable, randint(1, 20))
const d = simpleSearch(searchable, randint(1, 20))
const e = simpleSearch(searchable, randint(1, 20))

console.log(subtract(a, b))
console.log(add(c, d))
console.log(subtract(e, a))