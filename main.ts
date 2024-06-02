// Explain me interface in typescript in simple words

// interface Slip{
//     customerName:string
//     timestamp:string
// }
// let bill:Slip ={
//     customerName:"Umar",
//     timestamp:"12:05PM"
// }
// console.log(bill.customerName,bill.timestamp)

// type litrals
// let juice: "small" | "large"

// For Loop Post increment; (let i=1) -> initilization Ending point confirm for loop.
// for(let i = 1; i <= 5; i++){
//     console.log(i);
// }

// for(let i = 5; i <= 15; i++){
//     console.log(i);
// }
// for(let i = 5; i < 15; i++){
//     console.log(i);
// }
// for(let i = 5; i <= 25; i+=5){
//     console.log(i);
// }
// for(let i = 10; i >= 1; i--){
//     console.log(i);
// }
// While Loop
// let abc = 1
// while (abc <= 16){
//     console.log(abc);
//     abc+=3;
// }
// let abcd = 13
// while (abcd <= 130){
//     console.log(abcd);
//     abcd+=13;
// }    
   
// let fruit = ["Apple","Orange","Banana","Peach"]
// // console.log(fruit.length);
// for(let i = 0; i < 4; i++){
// console.log(fruit[i])
// }

// let fruit = ["Apple","Orange","Banana","Peach","Grapes"]
// for(let i = 0; i <= 4; i++){
// console.log(fruit[i])
// }

// let fruit = ["Apple","Orange","Banana","Peach","Grapes","Tomoto"]
// fruit.push("began");
// fruit.unshift("Cucumber")
// for(let i = 0; i <fruit.length; i++){
// console.log(fruit[i])
// }

// interface fruit {
//     Name:"Apple"
//     Price:"200 Per Kg"
// }

// enum Direction{
//     North,
//     South,
//     East,
//     West,
// }
// console.log(Direction.North)

// enum Direction{
//     North="North",
//     South="South",
//     East="East",
//     West="West"
// }
// console.log(Direction);


// enum morningslot{
//     Morning="9-12",
//     Afternoon="2-5",
//     Evening="7-10",
//     PhoneNumber= 923102230623

// }
// console.log(Morning:${morningslot.Morning});
// console.log(Afternoon:${morningslot.Afternoon});
// console.log(Evening:${morningslot.Evening});
// console.log(PhoneNumber:${morningslot.PhoneNumber});

// type DataBase = [number,
//     string,number,number]
//     const empData:DataBase[]=[
//         [13,"Umar",100000,10],
//         [14,"Shayan",200000,20]
        
//     ]
//     for(let data of empData){
//     console.log(data[0],data[1],data[2],data[3]);
//     }

// type DataBase = [number,
//     string,number,number]
//     const empData:DataBase[]=[
//         [13,"Umar",100000,10],
//         [14,"Shayan",200000,20],
//         [15,"Noman",50000,15],
//         [14,"Saeed",250000,25]
        
//     ]
//     for(let data of empData){
//     console.log(ID:${data[0]});
//     console.log(Name:${data[1]});
//     console.log(Salary:${data[2]});
//     console.log(Expirence:${data[3]});
//     }

// type DataBase = [number,
//     string,number,number]
//     const empData:DataBase[]=[
//         [13,"Umar",100000,10],
//         [14,"Shayan",200000,20],
//         [15,"Noman",50000,15],
//         [14,"Saeed",250000,25]
        
//     ]
//     for(let data of empData){
//     console.log(ID:${data[0]})}
//     for(let data of empData){
//     console.log(Name:${data[1]})}
//     for(let data of empData){
//     console.log(Salary:${data[2]})}
//     for(let data of empData){
//     console.log(Expirence:${data[3]} Years)
//     }