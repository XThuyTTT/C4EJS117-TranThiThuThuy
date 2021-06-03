{
    // Câu 1
    // 1. Các case lỗi tên biến
    // ・Bắt đầu bằng số: 33NguyenTrai
    // ・Chứa ký tự đặc biệt (trừ "_" và "$"): &Name
    // ・Trùng các keywords của javascript: null
    // 2. Dùng toán tử typeof để check kiểu dữ liệu 
    // Ex: typeof "John"                 // Returns string 

    // Câu 2
    // 1 - b
    // 2 - a
    // 3 - e
    // 4 - c

    // Câu 3
    // Print out messages
    let msg = 'Coding is great';
    console.log(msg);

    // Print number of students
    let studentCount = 0;
    console.log(studentCount);

    // Câu 4
    // Change message into 'Coding might not be easy, but still great'
    msg = 'Coding might not be easy, but still great';
    console.log(msg);

    // Change the total number of students in the class to 16
    studentCount = 16;
    console.log(studentCount);
    
    // Change the message into lowercase
    msg = msg.toLowerCase();
    console.log(msg);

    // Increase studentCount by 1
    console.log(studentCount += 1); 

    // Câu 5
    // Show user a nice message
    msg = '今日一日お疲れ様！';
    alert(msg);

    // Câu 6
    // Show message containing the text entered by the user
    let name = prompt('Hi, can i get your name please');
    alert('Have a good day ' + name);

    // Câu 7
    // Input first name
    let firstName = prompt('Enter your first name');

    // Input last name
    let lastName = prompt('Enter your last name');

    // Say hi with full name
    alert('Hi ' + firstName + ' ' + lastName);

    // Câu 8
    // Input side length
    let length = prompt ('Enter side length of the square');

    // Calculates the area of a square
    alert(`The square area is ${length * length}`);

    // Câu 9
    // Input radius
    let radius = prompt ('Enter the radius of the circle');

    // Convert string to number
    radius = parseInt(radius);

    // Calculates the area of a circle
    circleAres = 3.14 * radius * radius;
    alert('The circle area is ' + circleAres);

    // Câu 10
    // Input temperature
    let cTemp = prompt ('Enter the temperature in Celsius');

    // Convert string to number
    cTemp = parseInt(cTemp);

    // Convert Celsius into Fahrenheit
    cToF = cTemp * 9 / 5 + 32;
    alert(cTemp + '(C) is ' + cToF + '(F)');
}