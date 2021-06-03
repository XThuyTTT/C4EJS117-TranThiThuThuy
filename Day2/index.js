{
    
    // Câu 1
    // 1. var và const đều dùng để khai báo biến trong Javascript
    // 2,3,4. Sự khác nhau giữa var, let, const và các case sử dụng
    // var
    //     Phạm vi hàm (function scope) hoặc phạm vi toàn cục (global scope)
    //     Có thể gán lại (Re-assignable) và có thể khai báo lại (Re-declarable)
    //     Không thuộc vùng chết tạm thời (Temporal Dead Zone - TDZ)
    // let
    //     Phạm vi khối (Block scope)
    //     Có thể gán lại nhưng không thể khai báo lại
    //     Phụ thuộc vào vùng chết tạm thời (TDZ)
    // const
    //     Phạm vi khối (Block scope)
    //     Không thể gán lại cũng không thể khai báo lại
    //     Phụ thuộc vào vùng chết tạm thời (TDZ)

    // Câu 2
    // Boolean là 1 kiểu giá trị trong Javascript
    // Kết quả của boolean trả về 2 giá trị: true hoặc false

    // Câu 3
    // Print out 7 numbers from 0
    for (let i = 0; i < 7; i++)
    {
        console.log(i);
    }

    // Print out n numbers from 0
    let n = prompt("Enter a number for print out n numbers from 0");
    for (let i = 0; i < n; i++)
    {
        console.log(i);
    }

    // Print out a sequence of numbers, starting from 3, ending before n
    n = prompt("Enter a number for print out a sequence of numbers, starting from 3, ending before n");
    for (let i = 3; i < n; i++)
    {
        console.log(i);
    }

    // Print out a sequence of numbers, starting from c, ending before n
    c = prompt("Enter c for print out a sequence of numbers, starting from c");
    n = prompt("Enter n for print out a sequence of numbers, ending before n");
    for (let i = c; i < n; i++)
    {
        console.log(i);
    }

    // Print out a sequence of numbers, starting from c, ending before n, stepping by 3
    c = Number(prompt("Enter c for print out a sequence of numbers, starting from c, ending before n, stepping by 3"));
    n = Number(prompt("Enter n for print out a sequence of numbers, starting from c, ending before n, stepping by 3"));
    for (let i = c; i < n; i += 3)
    {
        console.log(i);
    }

    // Print out a sequence of numbers, starting from c, ending before n, stepping by s
    c = Number(prompt("Enter c for print out a sequence of numbers, starting from c, ending before n, stepping by s"));
    n = Number(prompt("Enter a for print out a sequence of numbers, starting from c, ending before n, stepping by s"));
    s = Number(prompt("Enter s for print out a sequence of numbers, starting from c, ending before n, stepping by s"));
    for (let i = c; i < n; i += s)
    {
        console.log(i);
    }

    // Câu 4
    // Calculate the factorial of n
    n = Number(prompt("Enter n for clculate the factorial of n"));
    let fac = 1;
    for (let i = n; i > 0; i--)
    {
        fac = fac * i;       
    }
    alert(`The factorial of ${n} is ${fac}`);

    // Câu 5
    // Ask age
    let age = Number(prompt("How old are you?"));
    // Decide if they are old enough to view
    if(age < 14)
    {
        alert("You are not old enough to view this content");
    }
    else
    {
        alert("Enjoy");
    }

    // Câu 6 
    let x = Number(prompt("Enter x for check x is in the lower half or higher half of 0 - 9 range"));
    if( x <= 9/2)
    {
        alert("Lower half of 9");
    }
    else
    {
        alert("Higher half of 9");
    }

    // Câu 7
    x = Number(prompt("Enter x for check x is in lower half or higher half of n"));
    n = Number(prompt("Enter n for check x is in lower half or higher half of n"));
    if( x <= n/2)
    {
        alert(`${x} is in lower half of ${n}`);
    }
    else
    {
        alert(`${x} is in higher half of ${n}`);
    }

    // Câu 8
    x = Number(prompt("Enter x for check x is even (divisible by 2) or odd number"));
    if (x%2 ==0)
    {
        alert(`${x} is an even number`);
    }
    else
    {
        alert(`${x} is an odd number`);
    }

    // Câu 9
    // a
    for (let i = 0; i < 3; i++)
    {
        console.log("L");
    }
    for (let i = 0; i < 3; i++)
    {
        console.log("H");
    }

    // b
    n = Number(prompt("Enter the total number of L's anh H's"));
    let n1 = Math.round(n/2);
    for(let i = 0; i < n1; i++) 
    {
        console.log("L")
    }
    for(let i = 0; i < n-n1; i++) 
    {
        console.log("H");
    }

    // c
    for(let i = 0; i < 4; i++) 
    {
        console.log("0");
        console.log("1");
    }

    // d
    n = Number(prompt("Enter the total number of 1's and 0's"));
    if(n%2 == 0)
    {
        for(let i = 1; i < (n/2); i++)
        {
            console.log(0);
            console.log(1);
        }
    }
    else
    {
        for(let i = 1; i < (n/2); i++){
            console.log(0);
            console.log(1);
        }
        console.log(0);
    }

    // Câu 10
    let weight = Number(prompt("Your weight in kg?"));
    let height = Number(prompt("Your height in cm?"));
    let bmi = Math.round((weight/(height/100 * height/100))*10 )/10;
    alert(`Your BMI is ${bmi}`);
    if(bmi < 16)
    {
        alert("You are Severely underweight ");
    }
    else if(bmi < 18.5)
    {
        alert("You are Underweight ");
    }
    else if(bmi < 25)
    {
        alert("You are Normal ");
    }
    else if(bmi < 30)
    {
        alert("You are Overweight");
    }
    else
    {
        alert("You are Obese ");
    }
    
}