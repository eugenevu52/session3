// Ex1
// let inventory = {
//     'gold' : 500,
//     'pouch' : ['flint', 'twine', 'gemstone'],
//     'backpack' : ['xylophone', 'dagger', 'bedroll', 'bread loaf'],
//     'pocket': ['seashell', 'strange berry', 'lint']
// }
// delete inventory.backpack[1];
// console.log(inventory.backpack);    
// inventory.gold=50;
// console.log(inventory.gold);

// Ex2
// let prices={
//     "banana": 4,
//     "apple": 2,
//     "orange": 1.5,
//     "pear": 3
// }
// let stock={
//     "banana": 6,
//     "apple": 0,
//     "orange": 32,
//     "pear": 15

// }
// for(let index in prices){
//     console.log(index);
//     console.log("price: ",prices[index]);
//     console.log("stock: ",stock[index]);
// }

// let total=0;
// for(let index in prices){
//     total+=prices[index]*stock[index];
// }    
// console.log("Total = ",total);

// Ex3
// let selection=prompt("Enter C,R,U,D");
// let ourItems=["T-Shirt","Sweater"];
// if(selection==="C"){
//     console.log(ourItems);
// }
// else if(selection==="R"){
//     ourItems.push("Jeans");
//     console.log(ourItems);
// }
// else if(selection==="U"){
//     ourItems.push("Jeans");
//     ourItems[1]="Skirt";
//     console.log(ourItems);
// }
// else if(selection==="D"){
//     ourItems[1]="Skirt";
//     console.log(ourItems);
// }

// Ex4
// let mySizesofShips=[5,7,300,90,24,50,75];

// let maxInSize = Math.max.apply(Math, mySizesofShips); 
// console.log("Now my biggest sheep has size: ",maxInSize);

// mySizesofShips[2]=8;
// console.log(mySizesofShips);


// //Month 1
// for(i=0;i<mySizesofShips.length;i++){
//     mySizesofShips[i]+=50;
// }
// mySizesofShips[3]=8;
// console.log("One month:",mySizesofShips);


// //Month 2
// for(i=0;i<mySizesofShips.length;i++){
//     mySizesofShips[i]+=50;
// }
// mySizesofShips[6]=8;
// console.log("Two month:",mySizesofShips);
// //Month 3
// let total=0;
// for(i=0;i<mySizesofShips.length;i++){
//        mySizesofShips[i]+=50;
//          let flock=mySizesofShips[i];
//          total+=flock;
// }
// console.log("Three month:",mySizesofShips);
// console.log("Total:",total);
// let money=total*2;
// console.log(money);