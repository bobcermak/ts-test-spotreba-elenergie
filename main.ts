type Odber = {
    cas: number, //cas = ms
    prikon: number; //prikon = watty
}

let data: Array<Odber> = [
    { cas: 1000 , prikon: 3500},
    { cas: 3000, prikon: 4000 },
    { cas: 2000, prikon: 3500 },
    { cas: 4000, prikon: 4000 },
    { cas: 2000, prikon: 3500 },
]

//kilowatt = 6,7Kc


let prikonSoucet: number = 0
let casSoucet: number = 0
let celkWatt: number = 0
let celkWatt1: number = 0
let celkSpotreba: number = 0

for (let i of data)   {
    casSoucet += i.cas
    prikonSoucet += i.prikon
}


celkWatt = prikonSoucet / (casSoucet / 1000)  //W/s
celkSpotreba = celkWatt*3,6 * 6.7





console.log(celkWatt)
console.log(celkSpotreba)


