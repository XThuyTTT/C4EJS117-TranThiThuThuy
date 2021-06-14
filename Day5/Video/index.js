// // Video 1.1
// // Create a random number from 0 to 1
// console.log(Math.random());

// // Video 1.2
// // Randomly pick an item from an array
// let numberList = [2, 5, 6, 9, 10];
// let number = numberList[Math.floor(Math.random() * numberList.length)];
// console.log(number);

// Video 1.3
// Init a list of quizzes
let quizzList = [
    {
        question: 'Tổng thống thứ 46 của nước Mỹ là ai?',
        answerList: ['1. Thomas Edison', '2. John Bidden', '3. Donald trump', '4. Barack Obama'],
        answer: 2
    },
    {
        question: 'Vua hùng đầu tiên và cũng là vị vua đầu tiên của Việt Nam là ai?',
        answerList: ['1. An Dương Vương', '2. Lạc Long Quân', '3. Long Nữ', '4. Kinh Dương Vương'],
        answer: 4
    },
    {
        question: 'Nơi nào Được mệnh danh "Hoa sen trên hồ"?',
        answerList: ['1. Chùa Thiên Mụ', '2. Chùa Tiên Phương', '3. Chùa Bái Đính', '4. Chùa Một Cột'],
        answer: 4
    },
    {
        question: 'Sông nào  là nơi Nguyễn Huệ quyết chiến với quân Xiêm?',
        answerList: ['1. Sông Tiền', '2. Sông Gianh', '3. Sông Hồng', '4. Sông Đồng Nai'],
        answer: 1
    },
    {
        question: 'Loài động vật nào có trí nhớ lâu nhất?',
        answerList: ['1. Cá mập', '2. Cá heo', '3. Cá voi', '4. Bò biển'],
        answer: 2
    }
]

// Video 1.4~1.7
let totalPoints = 0;
let quizzCount = quizzList.length;
for (let i = 0; i < quizzList.length; i++) {
    // Randomly select a quiz from the list
    let quizzRandom = quizzList[Math.floor(Math.random() * quizzList.length)];
    let quizzShow = quizzRandom;
    // Users answer then let them know whether they are correct
    let choise = Number(prompt(quizzShow.question + '\n' + quizzShow.answerList.join('\n')));
    for (let quizz of quizzList) {
        if (quizzShow == quizz) {
            if (choise == quizz.answer) {
                console.log('Correct');
                totalPoints++;
            }
            else {
                console.log('Incorrect');
            }
        }
    }
    quizzList.splice(quizzList.indexOf(quizzShow), 1);
    i--;
}
// Let it run continuously, make sure each question only appears once, if the questions has run out, let users know
alert('We are out of question :(');
// Calculate the total points of users
alert('You answered correctly ' + totalPoints + ' out of ' + quizzCount + ' questions');

// // Video 2.1
// let word = ['to', 'be', 'that', 'of', 'elon', 'to', 'this', 'now', 'back', 'cool', 'hey', 'love', 'of', 'life', 'that', 'rain', 'summer', 'color', 'now', 'of', 'hat', 'late', 'sorry', 'my', 'team'];
// let countData = {
// };
// for (let i = 0; i < word.length; i++) {
//     let c = word[i];
//     if (countData[c]) {
//         countData[c]++;
//     } else {
//         countData[c] = 1;
//     }
// }
// console.log(countData);

// // Video 2.2
// const inventories = [
//     {
//         name: 'HP Envy 13aq',
//         price: 21000,
//         brand: 'HP',
//         quantity: 5,
//     },
//     {
//         name: 'Dell XPS 9370',
//         price: 30000,
//         brand: 'Dell',
//         quantity: 1,
//     },
//     {
//         name: 'Dell Inspiron 3567',
//         price: 9300,
//         brand: 'Dell',
//         quantity: 12,
//     },
//     {
//         name: 'Dell Latitude E5450',
//         price: 8600,
//         brand: 'Dell',
//         quantity: 2,
//     },

//     {
//         name: 'Asus Zenbook',
//         brand: 'Asus',
//         price: 20000,
//         quantity: 4,
//     },
//     {
//         name: 'HP Pavilion',
//         brand: 'HP',
//         price: 14000,
//         quantity: 7,
//     }
// ]

// // Video 2.3
// const inventoryByBrand = {
// };
// for (let i of inventories) {
//     if (inventoryByBrand[i.brand]) {
//         inventoryByBrand[i.brand].push(i);
//     } else {
//         inventoryByBrand[i.brand] = [];
//         inventoryByBrand[i.brand].push(i);
//     }
// }
// console.log(inventoryByBrand);

// // Video 2.4~2.7
// brand = prompt('Which brand?');
// let total = 0;
// let goodsName = '';
// for (let i = 0; i < inventoryByBrand[brand].length; i++) {
//     total += (inventoryByBrand[brand][i]).price * (inventoryByBrand[brand][i]).quantity;
//     goodsName += '\n'+ inventoryByBrand[brand][i].name;
// }
// alert('The are ' + inventoryByBrand[brand].length + ' generrations of ' + brand + ' in inventory' + '\n' + 
//     goodsName + '\n\n' + 
//     'With total value: ' + total + 'k');