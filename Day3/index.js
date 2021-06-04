// Init an array and print out
let moviesTitle = ["Castle in the Sky","Grave of the Fireflies","My Neighbor Totoro","Kiki's Delivery Service"];
console.log(moviesTitle);

// Add new movie and print out
let newMovie = prompt("Name of the movie you want to add?");
moviesTitle.push(newMovie);
console.log(moviesTitle);

// // Read the item at position moviesPos in the movies array
// let moviesPos = prompt("Read position?")
// console.log(moviesTitle[moviesPos]);

// // Update the first item of the movies array in print out
// moviesTitle[1] = prompt("Name of the movie you want to change in position 1");
// console.log(moviesTitle);

// // Update a item at position moviesPos of the movies into movieTitle
// moviesPos = prompt("Update position?")
// moviesTitle[moviesPos] = prompt(`Name of the movie you want to change in position ${moviesPos}`);
// console.log(moviesTitle);

// // Delete 1 item at position moviesPos from movies array movies
// moviesPos = prompt("Delete position?")
// delete moviesTitle.splice(moviesPos,1);
// console.log(moviesTitle);

// // Read all of items in movies array
// console.log(moviesTitle);

// Read only first half items in movies array
let length = moviesTitle.length;
for (let i = 0; i < Math.round(length/2); i++)
{
    console.log(moviesTitle[i]);
}

// Read all of items in movies array with the item position
for (let i = 0; i < length; i++)
{
    console.log(`${i}. ${moviesTitle[i]}`);
}

// Change all items of movies array into lowercase
for (let i = 0; i < length; i++)
{   
    console.log(`${moviesTitle[i].toLowerCase()}`);
}

// Enter username and check length
let usename = prompt("Enter an username");
if(usename.length > 15)
{
    alert("Your user name is too long");
}
else
{
    alert("Good user name");
}

// Show user a quiz with 4 choices
let choiseList = ["1. None","2. 4 legs","3. 8 legs","4. 12 legs"];
let answer = Number(prompt(`How many legs does a spider have? \n${choiseList.join("\n")}`))
if(answer < 1 || answer > 4)
{
    alert(`${answer} is an invaid choise. Please choise the answer again!`);
    answer = Number(prompt(`How many legs does a spider have? \n${choiseList.join("\n")}`))
}
else if (answer == 3)
{
    alert("Bravo, you are correct");
}
else
{
    alert("Good luck next time");
}

// Input a list of number
let numberList = [];
length = prompt("How many elements do you want to enter the list?");
for (let i = 0; i < length; i++)
{
    let numberAdd = prompt(`Enter number of position ${i} in list`);
    numberList.push(numberAdd);
}
// Print out list
alert(`The list you entered is ${numberList}`);

// Print out list sort by ascending 
for(let i = 0; i < length; i++)
{
    for(let j = i + 1; j < length; j++)
    {
        let a = numberList[i];
        let b = numberList[j];
        if (a > b)
        {
            numberList[i] = b;
            numberList[j] = a;
        }
        else
        {
            numberList[i] = a;
        }
    }
}
alert(`The list you entered sort by ascending is ${numberList}`);

// Print out list of even number, odd number
let evenNumberList = [];
let oddNumberList = [];
for(let i = 0; i < length; i++)
{
    if(numberList[i] % 2 == 0)
    {
        evenNumberList.push(numberList[i]);
    }
    else
    {
        oddNumberList.push(numberList[i]);
    }
}
alert(`The even number list you entered is ${evenNumberList}`);
alert(`The odd number list you entered is ${oddNumberList}`);

// Print out list of even number, odd number
let lengthEvenList = evenNumberList.length;
for (i = 0; i < lengthEvenList; i++)
{
    for(let j = i + 1; j < lengthEvenList; j++)
    {
        if (evenNumberList[i] == evenNumberList[j])
        {
            evenNumberList.splice(i,1);
            lengthEvenList -= 1;
        }
    
    }
}
alert(`The even number list you entered (split) is ${evenNumberList}`);

// Print out list of even number, odd number
let lengthOddList = oddNumberList.length;
for (i = 0; i < lengthOddList; i++)
{
    for(let j = i + 1; j < lengthOddList; j++)
    {
        if (oddNumberList[i] == oddNumberList[j])
        {
            oddNumberList.splice(i,1);
            lengthOddList -= 1;
        }
    
    }
}
alert(`The odd number list you entered (split) is ${oddNumberList}`);


