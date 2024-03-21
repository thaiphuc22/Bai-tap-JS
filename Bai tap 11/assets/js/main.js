
/**
 * Bài 1. Viết function truyền vào 1 chuỗi bất kỳ, hãy sao chép chuỗi đó lên 10 lần.

Ví dụ : repeatString(“a”) => Kết quả trả về là “aaaaaaaaaa”
 * @returns 
 */
function repeatString() {
    var str = document.getElementById("inputString").value;
    var result_repeatStringDiv = document.getElementById("result_repeatString")
    


    if (typeof str !== 'string') {
        result_repeatStringDiv.textContent = "Vui lòng nhập vào một chuỗi";
        return ;
    }

    let repeatedString = '';
    for (let i = 0; i < 10; i++) {
        repeatedString += str;
        

    }
    result_repeatStringDiv.textContent = repeatedString;
};

/**
 * Bài 2. Viết function truyền vào 1 chuỗi bất kỳ, hãy viết hàm có tác dụng sao chép đó chuỗi lên 10 lần, ngăn cách nhau bởi dấu gạch ngang.

Ví dụ: repeatString(“a”) => Kết quả trả về là “a-a-a-a-a-a-a-a-a-a”
 */

function repeatString2() {
    var str = document.getElementById("inputString2").value;
    var result_repeatString2Div = document.getElementById("result_repeatString2")
    


    if (typeof str !== 'string') {
        result_repeatString2Div.textContent = "Vui lòng nhập vào một chuỗi";
        return ;
    }

    let repeatedArray = new Array(10).fill(str);
    let repeatedString2 = repeatedArray.join('-');
    result_repeatString2Div.textContent = repeatedString2;
};


/**
 * Bài 3. Viết function truyền vào 1 chuỗi bất kỳ và 1 số nguyên dương n > 1, hãy viết hàm có tác dụng sao chép đó chuỗi lên n lần, ngăn cách nhau bởi dấu gạch ngang.

    Ví dụ: repeatString(‘a’, 5) => Kết quả trả về là ‘a-a-a-a-a’
 * @param {*} str3 
 * @param {*} num 
 * @returns 
 */

function repeatString3(str3,num) {
    var str3 = document.getElementById("inputString3").value;
    var num = parseFloat(document.getElementById("a").value);
    var result_repeatString3Div = document.getElementById("result_repeatString3")
    
    if (isNaN(num)) {
        result_repeatString3Div.textContent = "Vui lòng nhập một số nguyên dương bất kỳ!";
        return;
    } else {
        if (typeof str3 !== 'string') {
            result_repeatString3Div.textContent = "Vui lòng nhập vào một chuỗi";
            return ;
        }
    
        let repeatedArray3 = new Array(num).fill(str3);
        let repeatedString3 = repeatedArray3.join('-');
        result_repeatString3Div.textContent = repeatedString3;
    }

};

/**
 * Bài 4. Viết function tính tổng các số chia hết cho 5 từ 0 -> 100
 * */ 
function sumOfMultiplesOf5() {
    var result_sumOfMultiplesOf5Div = document.getElementById("result_sumOfMultiplesOf5")
    let sum = 0;
    for (let i = 0; i <= 100; i++) {
        if (i % 5 === 0) {
            sum += i;
        }
    }
    result_sumOfMultiplesOf5Div.textContent = sum;
}


/**
 * Bài 5: Viết function tính thể tích hình cầu, với tham số truyền vào là bán kính của hình cầu.
*/


function sphereVolume(radius) {
    var radius = parseFloat(document.getElementById("radius").value);
    var result_sphereVolumeDiv = document.getElementById("result_sphereVolume");
    var result_sphereVolume;

    if (isNaN(radius) || radius <0 ) {
        result_sphereVolumeDiv.textContent = "Vui lòng nhập một số nguyên dương bất kỳ!";
        return;
    } else {
        const pi = 3.14159;
        result_sphereVolume = (4 / 3) * pi * Math.pow(radius, 3);
        result_sphereVolumeDiv.textContent = result_sphereVolume;
    }
     
};

/**
 * Bài 6: Viết hàm function vào 2 số nguyên, tính tổng tất cả các số nguyên nằm giữa chúng. Ví dụ với tham số 3 và 8 ta có kết quả là 22 (bằng 4 + 5 + 6 + 7).

Note : Kết quả xuôi và ngược là như nhau

Ví dụ :

sum(3,8) = 22
sum(8,3) = 22
 */


function sumBetweenNumbers(a, b) {
    var a = parseFloat(document.getElementById("aInput").value);
    var b = parseFloat(document.getElementById("bInput").value);
    var result_sumBetweenNumbersDiv = document.getElementById("result_sumBetweenNumbers");

    if (isNaN(a) || isNaN(b)) {
        result_sumBetweenNumbersDiv.textContent = "Vui lòng nhập đủ dữ liệu!";
        return;
    } else {

        // Tìm số lớn hơn và số nhỏ hơn
        let min = Math.min(a, b);
        let max = Math.max(a, b);
    
        // Tính tổng các số nguyên nằm giữa chúng
        let sum2 = 0;
        for (let i = min + 1; i < max; i++) {
            sum2 += i;
        }
        result_sumBetweenNumbersDiv.textContent = sum2;
    }
};

// Bài 7: Cho 1 số, viết function kiểm tra xem số đó có phải là số nguyên tố hay không, kết quả trả về true hoặc false.

function isPrime(x) {
    var x = parseFloat(document.getElementById("xInput").value);
    var result_isPrimeDiv = document.getElementById("result_isPrime");

    if (isNaN(x)) {
        result_isPrimeDiv.textContent = "Vui lòng nhập một số nguyên!";
        return;
    } else {
        if (x <= 1) {
            result_isPrimeDiv.textContent = x + " không phải là số nguyên tố";
            return;
        }

        for (var i = 2; i <= Math.sqrt(x); i++) {
            if (x % i === 0) {
                result_isPrimeDiv.textContent = x + " không phải là số nguyên tố";
                return;
            }
        }
        result_isPrimeDiv.textContent = x + " là số nguyên tố";

        }
    };


    // Bài 8: Cho 1 số nguyên dương bất kỳ. Viết function tính tổng tất cả các số nguyên tố mà nhỏ hơn hoặc bằng tham số truyền vào.

    function isPrime2(number) {
        if (number < 2) {
            return false;
        }
    
        for (let j = 2; j <= Math.sqrt(number); j++) {
            if (number % j === 0) {
                return false;
            }
        }
    
        return true;
    };
    
    function sumOfPrimesUpToN() {
        var n = parseFloat(document.getElementById("nInput").value);
        var result_sumOfPrimesUpToNDiv = document.getElementById("result_sumOfPrimesUpToN");

        let sum = 0;
        for (let j = 2; j <= n; j++) {
            if (isPrime2(j)) {
                sum += j;
            }
        }
        result_sumOfPrimesUpToNDiv.textContent = `${sum}: là tổng của các số nguyên tố nhỏ hơn hoặc bằng ${n} `;
    };


    // Bài 9: Cho 1 số nguyên dương, viết function tính tổng tất cả các ước số của số đó.
    function sumOfDivisors() {
        var y = parseFloat(document.getElementById("yInput").value);
        var result_sumOfDivisorsDiv = document.getElementById("result_sumOfDivisors");

        if (y <= 0 || !Number.isInteger(y)) {
            result_sumOfDivisorsDiv.textContent = "Vui lòng một số nguyên dương"
            return;
        }
    
        let sum3 = 0;
        for (let i = 1; i <= Math.sqrt(y); i++) {
            if (y % i === 0) {
                sum3 += i;
                if (y / i !== i) { // Kiểm tra nếu i không phải là căn bậc hai của y
                    sum3 += y / i;
                }
            }
        }
    
        result_sumOfDivisorsDiv.textContent = sum3;
    };
    
 
    
    
  
    








