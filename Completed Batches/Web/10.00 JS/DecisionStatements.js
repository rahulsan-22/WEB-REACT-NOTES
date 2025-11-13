//!if
// let weekend = true
// if(weekend){
//     console.log("Thagudham🍻")
// }

//!if-else
// let weekend = true
// if(weekend){
//     console.log("Thagudham🍻")
// }else{
//     console.log("Assume that its a weekend and drink")
// }

//!else-if
// let amount = 200;
// if(amount>400){
//     console.log("GO TO PISTA HOUSE HAVE BIRYANI")
// }else if(amount >300 && amount <=400){
//     console.log("GO TO VAARAHI AND HAVE BONELESS BIRYANI")
// }else if(amount>200 && amount <=300){
//     console.log("GO TO RAGHAVENDRA HOTEL AND HAVE KAJU FRIED RICE")
// }else if(amount>100 && amount <=200){
//     console.log("FIRST GO TO NEARBY ROTI POINTS AND LATER TAKE A CHICKEN CURRY")
// }else{
//     console.log("MOOSKONI PG LO THINNU")
// }

//!switch-case

//*Example 1
let trainer = "Asnan"
switch (trainer) {
    case "Monty": console.log("Python Trainer");
        break;
    case "Pavan": console.log("Core Java Trainer");
        break;
    case "Yasin": console.log("Sql Trainer");
        break;
    case "Shubham": console.log("Web Tech Trainer");
        break;
    default: console.log("He is more than trainer");
}

//*Example 2
let amount = 450;
switch (true) {
    case (amount > 400): console.log("GO TO PISTA HOUSE HAVE BIRYANI");
        break;
    case (amount > 300 && amount <= 400): console.log("GO TO VAARAHI AND HAVE BONELESS BIRYANI")
        break;
    case (amount > 200 && amount <= 300):
        console.log("GO TO RAGHAVENDRA HOTEL AND HAVE KAJU FRIED RICE")
        break;
    case (amount > 100 && amount <= 200):
        console.log("FIRST GO TO NEARBY ROTI POINTS AND LATER TAKE A CHICKEN CURRY")
        break;
    default: console.log("MOOSKONI PG LO THINNU")

}