type Odber = {
    cas: number, //cas = ms
    prikon: number; //prikon = watty
}

let data: Array<Odber> = [
    { cas: 1000 , prikon: 3500},  // W/H
    { cas: 3000, prikon: 4000 },
    { cas: 2000, prikon: 3500 },
    { cas: 4000, prikon: 4000 },
    { cas: 2000, prikon: 3500 }, // W/S
]

//kilowatt = 6,7Kc

let prikonSoucet: number = 0
let casSoucet: number = 0
let celkWatt: number = 0
let celkWatt1: number = 0 
let celkSpotreba: number = 0

for (let i of data)   {
    casSoucet += i.cas / 1000
    prikonSoucet += i.prikon / 3600
}


celkWatt = (prikonSoucet / casSoucet) * 3.6  // kW/h
celkSpotreba = celkWatt * 6.7

console.log("Celkem vás to vyšlo na " + celkSpotreba + " Kč")
console.log("Celkové kilowatt hodiny jsou " + celkWatt + " kW")


