//////////////////////////////////TASK1/////////////////////////////////////// 
// class PersonAccount{
//         constructor(fname,lname,incomes,expenses)
//             {this.fname=fname;
//             this.lname=lname;
//             this.incomes=incomes;
//             this.expenses=expenses;
//             }
          
//             totalincome(){
//                 let total=0;
//                     for(let j in this.incomes){
//                      total=total+this.incomes[j]
                    
//                 }
//             return console.log(`totalIncome ${total}`)
//             }
//             totoalexpense(){
//                 let totalexp=0;
//                 for(let j in this.expenses){
//                  totalexp=totalexp+this.expenses[j]
                
//             }
//                return console.log(`totalexpense ${totalexp}`)
//             }
//             accountinfo(){
//                 let totalexp=0;
//                 for(let j in this.expenses){
//                  totalexp=totalexp+this.expenses[j]
//             }
//             let total=0;
//             for(let j in this.incomes){
//              total=total+this.incomes[j]
            
//         }
//              return   console.log(`Accoount No:1234  Account title: ${this.fname + this.lname} Balance=${total-totalexp}`)
//             }
//             addincome(addincome,value){
//                 this.incomes[addincome]=value;
//               return  console.log(this.incomes)
//             }
//             addexpense(addexpenses,value){
//                 this.expenses[addexpenses]=value
//                return console.log(this.expenses)
//             }
// }
// let person=new PersonAccount('Ali','Khan',{salary: 20000,Propertyrent: 40000,BusinessIncome:50000},{Homerent:20000,
//     Utilitiesbill:30000,
//     Fuel: 10000})
//     person.totalincome();
//     person.totoalexpense();
//     person.accountinfo();
//     person.addincome('bonus',10000)
//     person.addexpense('grocery',5000)
//////////////////////////////////TASK#2&3/////////////////////////////////////// 
// class Automobile{
//     constructor(name,model,color,type){
//         this.name=name;
//         this.model=model;
//         this.color=color;
//         this.type=type;
//     }
//     opendoor(){
//         return console.log("door is open");
//     }
//     closedoor(){
//         return console.log("door is closed");
//     }
//     start(){
//         return console.log(`${this.name} is ready for drive`);
//     }
// }
// class Car extends Automobile{
//     constructor(name,model,color,type){
//     super(name,model,color,type)
// }
// }
// class Bus extends Automobile{
//     constructor(name,model,color,type){
//     super(name,model,color,type)
// }
// }
// class Truck extends Automobile{
//     constructor(name,model,color,type){
//     super(name,model,color,type)
// }
// }
// let car=new Car('civic',2022,'red','car')
// console.log(car);
// let bus=new Bus('GreenBus',2022,'Green','BRT')
// console.log(bus);
// let truck=new Truck('Mazda',2022,'white','Truck')
// console.log(truck);