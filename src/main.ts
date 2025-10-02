import { randint } from "./random";
import { simpleSearch } from "./simpleSearch";

let searchable: number[] = []
for (let i: number = 0; i < randint(1, 20); i++) {
    searchable.push(randint(1, 20))
}

console.log(simpleSearch(searchable, randint(1, 20)))
console.log(simpleSearch(searchable, randint(1, 20)))
console.log(simpleSearch(searchable, randint(1, 20)))
console.log(simpleSearch(searchable, randint(1, 20)))