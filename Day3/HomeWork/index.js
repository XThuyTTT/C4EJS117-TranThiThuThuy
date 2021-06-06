// // Câu 1
// // Swapping variable ex 1
// let a = prompt('Enter a');
// let b = prompt('Enter b');
// console.log(`Array before swapping: ${[a, b]}`);
// [a, b] = [b, a];
// console.log(`Array after swapping: ${[a, b]}`);

// // Swapping variable ex 2 
// let c = prompt('Enter c');
// let d = prompt('Enter d');
// console.log(`Array before swapping: ${[c, d]}`);
// let temp = c;
// c = d;
// d = temp;
// console.log(`Array after swapping: ${[c, d]}`);

// // Câu 2
// // Split string to array
// let text = prompt('Enter text');
// textSplit = text.split();
// console.log(`Text after splitting: ${textSplit}`);

// // Câu 3
// // Print array using ...
// let movieList = ['Castle in the Sky', 'Grave of the Fireflies', 'My Neighbor Totoro', 'Only Yesterday'];
// console.log(...movieList);


// // Câu 4
// // Simulate a clothes shop, asking and performing certain tasks from users
// let reqChoise;
// let reqAdd;
// let reqUpdatePos;
// let reqUpdateItemName;
// let reqDeletePos;
// let itemList = ['Jean', 'T-shirt', 'Socks'];
// while(true)
// {
//     reqChoise = prompt('Hi there, welcome to shop admin panel, what do you want (C, R, U, D)');
//     if(reqChoise == undefined)
//     {
//         alert('Bye!');
//         break;
//     }
//     else if(reqChoise != 'C' && reqChoise != 'R' && reqChoise != 'U' && reqChoise != 'D')
//     {
//         alert('This command is not supported');
//     }
//     else if (reqChoise == 'R')
//     {
//         console.log('The current items are:');
//             for (let i = 0; i < itemList.length; i++)
//             {
//                 console.log(`${i + 1}. ${itemList[i]}`);
//             }
//     }
//     else if (reqChoise == 'C')
//     {
//         reqAdd = prompt('Enter the name of the new item');
//         if (reqAdd == undefined)
//         {
//             alert('Bye');
//         }
//         else
//         {
//             itemList.push(reqAdd);
//             console.log('The current items are:');
//             for (let i = 0; i < itemList.length; i++)
//             {
//                 console.log(`${i + 1}. ${itemList[i]}`);
//             }
//             alert('Done');
//         }
//     }
//     else if (reqChoise == 'U')
//     {
//         reqUpdatePos = prompt('Enter the position you want to update');
//         if (reqUpdatePos == undefined)
//         {
//             alert('Bye');
//         }
//         else
//         {
//             reqUpdateItemName = prompt('Enter the new name');
//             if (reqUpdateItemName == undefined)
//             {
//                 alert('Bye');
//             }
//             else
//             {
//                 itemList[reqUpdatePos] = reqUpdateItemName;
//                 console.log('The current items are:');
//                 for (let i = 0; i < itemList.length; i++)
//                 {
//                     console.log(`${i + 1}. ${itemList[i]}`);
//                 }
//                 alert('Done');
//             }
//         } 
//     }
//     else if (reqChoise == 'D')
//     {
//         reqDeletePos = prompt('Enter the position you want to delete');
//         if (reqDeletePos == undefined)
//         {
//             alert('Bye');
//         }
//         else
//         {
//             itemList.splice(reqDeletePos,1);
//             console.log('The current items are:');
//             for (let i = 0; i < itemList.length; i++)
//             {
//                     console.log(`${i + 1}. ${itemList[i]}`);
//             }
//             alert('Done');
//         }
//     }
//     else
//     {
//         break;
//     }
// }

// Câu 5
// Calculate the sum of the numbers after split
let numberList;
let sum = 0;
while(true)
{
    numberList = prompt('Enter a squence of number, separated by commas (,)');
    if (numberList == undefined)
    {
        alert('Bye');
    }
    else
    {
        break;
    }
}
arrNumberList = numberList.split(",");
alert(`Squence of number you entered is ${arrNumberList}`);
for (let i = 0; i < arrNumberList.length; i++)
{
    sum += Number(arrNumberList[i]);
}
alert(`The sum of them is ${sum}`);

// Câu 6
// Find the smallest numbers after split
numberList = prompt('Enter a squence of number, separated by commas (,)');
arrNumberList = numberList.split(",");
alert(`Squence of number you entered is ${arrNumberList}`);
for(let i = 0; i < arrNumberList.length; i++)
{
    for(let j = i + 1; j < arrNumberList.length; j++)
    {
        let a = arrNumberList[i];
        let b = arrNumberList[j];
        if (a > b)
        {
            arrNumberList[i] = b;
            arrNumberList[j] = a;
        }
        else
        {
            arrNumberList[i] = a;
        }
    }
}
alert(`The smallest number is ${arrNumberList[0]}`);