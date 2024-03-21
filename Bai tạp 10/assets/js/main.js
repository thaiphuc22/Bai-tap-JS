// Bai tap 10: Câu lệnh điều kiện

/**
 * Bài 1:

Viết function truyền vào 1 số bất kỳ và thực hiện kiểm tra

Nếu số đó chia hết cho 3 và 5 thì in ra “FizzBuzz”
Nếu số đó chia hêt cho 3 thì in ra “Fizz”
Nếu số đó chia hêt cho 5 thì in ra “Buzz”
 */

function checkFizzBuzz() {
    var number = document.getElementById("numberInput").value;
    var resultDiv = document.getElementById("result");

    if (number === "") {
        resultDiv.textContent = "Please enter a number!";
        return;
    }

    number = parseInt(number);

    if (isNaN(number)) {
        resultDiv.textContent = "Please enter a valid number!";
        return;
    }

    if (number % 3 === 0 && number % 5 === 0) {
        resultDiv.textContent = "FizzBuzz";
    } else if (number % 3 === 0) {
        resultDiv.textContent = "Fizz";
    } else if (number % 5 === 0) {
        resultDiv.textContent = "Buzz";
    } else {
        resultDiv.textContent = number;
    }
};


/**
 * Bài 2:

Viết function giải phương trình bậc nhất (ax + b= 0)

Cần kiểm tra trường hợp a = 0 và a != 0
In ra kết quả
 */



function solveEquation() {
    var a = parseFloat(document.getElementById("aInput").value);
    var b = parseFloat(document.getElementById("bInput").value);
    var resultEquationDiv = document.getElementById("result_equation");

    if (isNaN(a) || isNaN(b)) {
        resultEquationDiv.textContent = "Hãy nhập đúng hệ số a và b!";
        return;
    }

    if (a === 0) {
        if (b === 0) {
            resultEquationDiv.textContent = "Phương trình vô số nghiệm";
        } else {
            resultEquationDiv.textContent = "Phương trình vô nghiệm";
        }
    } else {
        var x = -b / a;
        resultEquationDiv.textContent = "Nghiệm của phương trình là: x = " + x;
    }
};



/**
  * Bài 3:

Viết function giải phương trình bậc 2 (ax^2 + bx + c = 0)

Cần kiểm tra trường hợp a = 0 và a != 0
In ra kết quả
 */

function solveQuadraticEquation() {
    var k = parseFloat(document.getElementById("kInput").value);
    var l = parseFloat(document.getElementById("lInput").value);
    var m = parseFloat(document.getElementById("mInput").value);
    var resultEquationDiv = document.getElementById("result_equation_2");

    if (isNaN(k) || isNaN(l) || isNaN(m)) {
        resultEquationDiv.textContent = "Hãy nhập đúng hệ số k, l và m!";
        return;
    }

    if (k === 0) {
        // Nếu k = 0, trở về giải phương trình bậc nhất
        solveLinearEquation(l, m);
    } else {
        var delta = l * l - 4 * k * m;
        if (delta < 0) {
            resultEquationDiv.textContent = "Phương trình vô nghiệm";
        } else if (delta === 0) {
            var x = -l / (2 * k);
            resultEquationDiv.textContent = "Phương trình có nghiệm kép: x = " + x;
        } else {
            var x1 = (-l + Math.sqrt(delta)) / (2 * k);
            var x2 = (-l - Math.sqrt(delta)) / (2 * k);
            resultEquationDiv.textContent = "Phương trình có hai nghiệm: x1 = " + x1 + ", x2 = " + x2;
        }
    }
};

function solveLinearEquation(l, m) {
    var resultEquationDiv = document.getElementById("result_equation_2");
    if (l === 0) {
        if (m === 0) {
            resultEquationDiv.textContent = "Phương trình vô số nghiệm";
        } else {
            resultEquationDiv.textContent = "Phương trình vô nghiệm";
        }
    } else {
        var x = -m / l;
        resultEquationDiv.textContent = "Nghiệm của phương trình là: x = " + x;
    }
};



/**
 * Bài 4:

Viết function truyền vào 2 giá trị, đại diện cho cân nặng và chiều cao. Tính chỉ số BMI tương ứng

Sử dụng return
 */

function calculateAndDisplayBMI() {
    var weight = parseFloat(document.getElementById("weightInput").value);
    var height = parseFloat(document.getElementById("heightInput").value);
    var resultBMIDiv = document.getElementById("result_bmi");

    if (isNaN(weight) || isNaN(height)) {
        resultBMIDiv.textContent = "Hãy nhập cân nặng và chiều cao!";
        return;
    }

    var bmi = calculateBMI(weight, height);
    resultBMIDiv.textContent = "Chỉ số BMI của bạn là: " + bmi.toFixed(2);
}

function calculateBMI(weight, height) {
    var heightInMeter = height / 100;
    var bmi = weight / (heightInMeter * heightInMeter);
    return bmi;
};





/**
 Bài 5:

Viết function truyền vào giá trị độ C. Tính giá trị độ F tương ứng

Sử dụng return
 */

function convertAndDisplay() {
    var celsius = parseFloat(document.getElementById("celsiusInput").value);
    var resultConversionDiv = document.getElementById("result_conversion");

    if (isNaN(celsius)) {
        resultConversionDiv.textContent = "Hãy nhập giá trị độ Celsius!";
        return;
    }

    var fahrenheit = convertCelsiusToFahrenheit(celsius);
    resultConversionDiv.textContent = "Giá trị độ Fahrenheit tương ứng là: " + fahrenheit.toFixed(2);
}

function convertCelsiusToFahrenheit(celsius) {
    var fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}




