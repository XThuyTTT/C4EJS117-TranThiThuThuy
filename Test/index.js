// let starsList = ['Ronaldo','Messi','Neymar'];
// console.log(starsList);
// // let reqAdd = prompt('Do u want to add new star in to list?');
// let reqRename = prompt('Do u want to rename of star');
// // if(reqAdd == 'Yes')
// // {
// //     let starName = prompt('Name of star is?');
// //     starsList.push(starName);
// //     console.log(starsList);
// // }
// // else 
// if (reqRename == 'Yes')
// {
//     let starPosition = prompt ('Position of star in list?');
//     starsList[starPosition] = prompt('Name of star u want to change is?');
//     console.log(starsList);
// }
// else
// {
//     console.log('Bye!');
// }

// // for (let i = 0; i < starsList.length; i++)
// // {
// //     console.log(starsList[i]);
// // }


//Array
let itemsList = ['T-Shirt','Sweater'];
let req = prompt('Welcome to our shop, what do you want (C, R, U, D)');
if(req == 'R')
{
    console.log('Our items: T-Shirt, Sweater');
}
else if (req == 'C')
{
    let newItems = prompt('Enter new item');
    itemsList.push(newItems);
    console.log('Our items:' + itemsList);
}
else if (req == 'U')
{
    let itemPos = prompt('Update position?');
    itemsList[itemPos] = prompt('New item?');
    console.log('Our items:' + itemsList);
}
else if (req == 'D')
{
    let itemPos = prompt('Delete position?');
    itemsList.splice(itemPos,1);
    console.log('Our items:' + itemsList);
}

//Object
let invertory = {
    gold: 500,
    pouch: ['flint','twine','gemstone'],
    backpack: ['xylophone','dagger','bedroll','bread loaf']
}
console.log(invertory);

invertory.pocket = ['seashell','strange berry','lint'];
console.log(invertory);

delete invertory.backpack.splice(1,1);
console.log(invertory);

delete invertory.pouch;
console.log(invertory);
