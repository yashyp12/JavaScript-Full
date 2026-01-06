//  let a1 = {name:"yash",
//     job : "sde"
//  }
 
//  console.log(Object.keys(a1))
//  console.log(Object.values(a1))
//  console.log(Object.values(a1))

function greet(city){
    console.log(`${city},'i m happy ${this.name}'`)
}

// let person = {name:"Yash"}

// greet.call(person,"Pune")

let person = { name:"Yash"}
greet.call(person,['pune','mumbai'])

let boundfunc1 = greet.bind(person)
boundfunc1()

