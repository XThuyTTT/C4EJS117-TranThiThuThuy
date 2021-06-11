// // Cau 1
// const product = {
//     name: 'Xiaomi rice cooker',
//     price: 1700,
//     brand: 'Xiaomi',
//     color: 'white'
// };

// for (let x in product) {
//     console.log(x); // return property of product
// }

// for (let x in product) {
//     console.log(x + ': ' +product[x]); // return value of product
// }

// // Cau 2
// const task = {
//     subject: 'Implement login feature',
//     createdBy: 'Hoang Ngoc Duc',
//     assignTo: 'Nguyen Phuong Nam',
//     dueDate: '2019-10-08T18:00:24+0000',
//     expectedHours: 0.5,
// };
// let {subject , dueDate, assignTo} = task;
// console.log('subject' + ": " + subject);
// console.log('dueDate' + ": " + dueDate);
// console.log('assignTo' + ": " + assignTo);

// Cau 3
// 3.1 Data type of the outermost layer is Object
// 3.2 Hits property is Array
// 3.3 
// for(let item of jobSearch.hits) 
// {
//     console.log(item);
// }

// // Cau 4
// // 4.1
// let dictionary = {
//     debug : 'The process of figuring out why your program has a certain error and how to fix it',
//     done : 'When your task is complete, the only thing you have to do is to wait for users to use it (no additional codes or actions needed)',
//     defect : 'The formal word for "error"',
//     pm : 'The short version  of Project Manager, the person in charge of the final result of a project',
//     'ui/ux' : 'UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels',
// }
// alert("Hi there, this is dev dictionary");
// let req = prompt("Enter a keyword");
// if(dictionary[req] != null){
//     alert(`${req} \n` + dictionary[req]);
// }else{
//     alert(`We could not find your word: ${req}`);
// }

// // 4.2
// let dictionary = {
//     debug: 'The process of figuring out why your program has a certain error and how to fix it',
//     done: 'When your task is complete, the only thing you have to do is to wait for users to use it (no additional codes or actions needed)',
//     defect: 'The formal word for "error"',
//     pm: 'The short version  of Project Manager, the person in charge of the final result of a project',
//     'ui/ux': 'UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels',
// }
// let req;
// let reqAdd;
// alert("Hi there, this is dev dictionary");
// while (true) {
//     req = prompt("Enter a keyword");
//     if (req == '') {
//         alert('Please enter a keyword!');
//     } else if (req == null) {
//         alert('Bye!');
//     }
//     else if (dictionary[req] != null) {
//         alert(`${req} \n` + dictionary[req]);
//     } else {
//         while (true) {
//             reqAdd = prompt(`We could not find your word: ${req}. Leave your explanation`);
//             if (reqAdd == '') {
//                 alert('Please leave your explanation!');
//             } else if (reqAdd == null) {
//                 alert('Bye!');
//                 break
//             }
//             else {
//                 dictionary[req] = reqAdd;
//                 alert('Done');
//                 break;
//             }
//         }
//     }
// }

// // Cau 5
// // 5.1
// let products = [
//     {
//         name: 'Xiaomi portable charger 20000mah',
//         brand: 'Xiaomi',
//         price: 428,
//         color: 'White',
//         category: 'Charger',
//         providers: 'Phukienzero Dientuccc',
//     },
//     {
//         name: 'VSmart Active 1',
//         brand: 'VSmart',
//         price: 5487,
//         color: 'Black',
//         category: 'Phone',
//         providers: 'Tgdd Ddghn VhStore',
//     },
//     {
//         name: 'IPhone X',
//         brand: 'Apple',
//         price: 21490,
//         color: 'Gray',
//         category: 'Phone',
//         providers: 'Tgdd',
//     },
//     {
//         name: 'Samsung Galaxy A9',
//         brand: 'Samsung',
//         price: 8490,
//         color: 'Blue',
//         category: 'Phone',
//         providers: 'Tgdd',
//     },
// ];

// for (let i = 0; i < products.length; i++) {
//     console.log('---------------------------------------');
//     console.log(`${i + 1}.` + ' Name: ' + products[i].name);
//     console.log('Price: ' + products[i].price);
// }
// //5.2
// let reqReadPos;
// while (true) {
//     reqReadPos = prompt('Enter product position:');
//     if (reqReadPos == '') {
//         alert('Please enter product position');
//     } else if (reqReadPos == null) {
//         alert('Bye!');
//         break;
//     }
//     else {
//         if (reqReadPos > products.length - 1) {
//             alert(`Please enter product position less than or equal to ${products.length - 1}`);
//         } else {
//             let ob = products[reqReadPos];
//             console.log('Console was cleared')
//             for (let items in ob) {
//                 console.log(items + ': ' + ob[items]);
//             }
//             break;
//         }
//     }
// }
// // 5.3
// let category = prompt('Enter your category');
// for (let items in products) {
//     if (products[items].category == category) {
//         console.log('---------------------------------------');
//         console.log('Name: ' + products[items].name);
//         console.log('Price: ' + products[items].price);
//     }
// }

// // 5.4
// for (let items of products) {
//     console.log('---------------------------------');
//     console.log('Name: ' + items.name);
//     console.log('Price: ' + items.price);
//     console.log('Providers: ' + items.providers);
// }

// Cau 6
// 6.1
let front_end = [
    {
        name: 'HTML',
        complete: 'false',
    },
    {
        name: 'CSS',
        complete: 'false',
    },
    {
        name: 'Basic of JavaScript',
        complete: 'false',
    },
    {
        name: 'Node Package Manager (npm)',
        complete: 'false',
    },
    {
        name: 'Git',
        complete: 'false',
    },
];
console.log('Hi there, this is your learning tasks to front-end developer career:');
for (let items in front_end) {
    console.log((Number(items) + 1) + ". " + front_end[items].name);
    console.log('Complete: ' + front_end[items].complete);
}
console.log('-----------------------------------------------------------------------');
// 6.2~6.5
let Req;
let init;
while (true) {
    Req = prompt('Enter your command (New, Delete, Update, Complete)').toLowerCase();
    if (Req == 'new') {
        init = prompt('Enter new task:');
        let ob = new Object();
        ob['name'] = init;
        ob['complete'] = 'false';
        front_end.push(ob);
        for (let items in front_end) {
            console.log((Number(items) + 1) + '. ' + front_end[items].name);
            console.log('Complete: ' + front_end[items].complete);
        }
        console.log('-----------------------------------------------------------------------');
        break;
    }
    else if (Req == 'update') {
        init = prompt('Enter position:');
        let yourTitle = prompt('Enter new title');
        front_end[init - 1].name = yourTitle;
        for (let items in front_end) {
            console.log((Number(items) + 1) + '. ' + front_end[items].name);
            console.log('Complete: ' + front_end[items].complete);
        }
        console.log('-----------------------------------------------------------------------');
        break;
    }
    else if (Req == 'complete') {
        init = prompt('Enter position:');
        front_end[init - 1].complete = 'true';
        for (let items in front_end) {
            console.log((Number(items) + 1) + '. ' + front_end[items].name);
            console.log('Complete: ' + front_end[items].complete);
        }
        console.log('-----------------------------------------------------------------------');
        break;
    }
    else if (Req == 'delete') {
        init = init = prompt('Enter position:');
        delete front_end[init - 1];
        for (let items in front_end) {
            console.log((Number(items) + 1) + '. ' + front_end[items].name);
            console.log('Complete: ' + front_end[items].complete);
        }
        console.log('-----------------------------------------------------------------------');
        break;
    }
    else {
        alert('Please enter your command (New, Delete, Update, Complete)');
    }
}