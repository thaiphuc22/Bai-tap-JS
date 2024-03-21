/**
 * 
 * Bài 1: Viết function nhập vào biến mark có giá trị từ 0 -> 100. Kiểm tra giá trị của biến mark và in ra nội dụng sau

”A” nếu mark >= 85
”B” nếu 70 <= mark < 85 (70 <= mark && mark < 85)
”C” nếu 40 <= mark < 70 (40 <= mark && mark <70)
Các trường hợp còn lại in ra “D”
 */

function checkAndDisplay() {
    var mark = parseFloat(document.getElementById("markInput").value);
    var resultDiv = document.getElementById("result");

    if (isNaN(mark) || mark < 0 || mark > 100) {
        resultDiv.textContent = "Vui lòng nhập điểm số hợp lệ (từ 0 đến 100)!";
        return;
    }

    var grade = checkMark(mark);
    resultDiv.textContent = "Điểm số " + mark + " tương ứng với mức đánh giá " + grade;
}

function checkMark(mark) {
    if (mark >= 85) {
        return "A";
    } else if (mark >= 70 && mark < 85) {
        return "B";
    } else if (mark >= 40 && mark < 70) {
        return "C";
    } else {
        return "D";
    }
};

/**
 * Bài 2: Viết function truyền vào 2 số a, b. In ra màn hình số có giá trị lớn hơn
 */

function printLargerNumber(a, b) {
    var a = parseFloat(document.getElementById("aInput").value);
    var b = parseFloat(document.getElementById("bInput").value);
    var result_greaterDiv = document.getElementById("result_greater");

    if (isNaN(a) || isNaN(b)) {
        result_greaterDiv.textContent = "Vui lòng nhập đủ dữ liệu!";
        return;
    } else if (a === '' || b === '') {
        cresult_greaterDiv.textContent = "Vui lòng không để trống cả hai số!";
        return;
    } else {
        if (a > b) {
            result_greaterDiv.textContent = a + " là số lớn hơn";
            return;
    
        } else if (b > a) {
            result_greaterDiv.textContent= b + " là số lớn hơn";
            return;
        } else {
            result_greaterDiv.textContent = "Hai số bằng nhau";
            return;
        }

    }

};


/**
 * Bai 3
 * Viết function nhập vào 1 số. Kiểm tra số đó là số âm, số dương hay là số 0.
 */

function checkNumber(l) {
    var l = parseFloat(document.getElementById("lInput").value);
    var result_numDiv = document.getElementById("result_num");

    if (isNaN(l)) {
        result_numDiv.textContent = "Vui lòng nhập một số bất kỳ!";
        return;
    } else if (l === '' ) {
        result_numDiv.textContent = "Vui lòng không để trống!";
        return;
    } else {
        if (l > 0) {
            result_numDiv.textContent = l + " là số dương";
            return;
    
        } else if (l < 0) {
            result_numDiv.textContent= l + " là số âm";
            return;
        } else {
            result_numDiv.textContent = "Bạn vừa nhập số: " + l;
            return;
        }

    }
};


/**
 * Bài 4: Viết function nhập vào 1 số. Kiểm tra số đó là số chẵn hay số lẻ.
 */
function checkEvenOrOdd(m) {
    var m = parseFloat(document.getElementById("mInput").value);
    var result_checkEvenOrOddDiv = document.getElementById("result_checkEvenOrOdd");

    if (isNaN(m)) {
        result_checkEvenOrOddDiv.textContent = "Vui lòng nhập một số bất kỳ!";
        return;
    } else if (m === '' ) {
        result_checkEvenOrOddDiv.textContent = "Vui lòng không để trống!";
        return;
    } else {
        if (m % 2 === 0) {
            result_checkEvenOrOddDiv.textContent = m + " là số chẵn";
            return;
    
       
        } else {
            result_checkEvenOrOddDiv.textContent = m + " là số lẻ";
            return;
        }

    }
};

/**
 * Bài 5: Viết function nhập vào 1 số. Kiểm tra số đó có đồng thời chia hết cho 3 và 5 không.
 */

function checkDivisibleBy3And5(n) {
    var n = parseFloat(document.getElementById("nInput").value);
    var result_checkDivisibleBy3And5dDiv = document.getElementById("result_checkDivisibleBy3And5");

    if (isNaN(n)) {
        result_checkDivisibleBy3And5dDiv.textContent = "Vui lòng nhập một số bất kỳ!";
        return;
    } else if (n === '' ) {
        result_checkDivisibleBy3And5dDiv.textContent = "Vui lòng không để trống!";
        return;
    } else {
        if (n % 3 === 0 && n % 5 === 0) {
            result_checkDivisibleBy3And5dDiv.textContent = n + " chia hết cho cả 3 và 5";
        } else {
            result_checkDivisibleBy3And5dDiv.textContent = n + " không chia hết cho cả 3 và 5";
        }
    }
};


// Bài 6: Viết function nhập vào 3 số x, y, z. Kiểm tra xem z có bằng x + y không?

function checkSum(x, y, z) {
    var x = parseFloat(document.getElementById("xInput").value);
    var y = parseFloat(document.getElementById("yInput").value);
    var z = parseFloat(document.getElementById("zInput").value);
    var result_checksumDiv = document.getElementById("result_checksum");

    if (isNaN(x) || isNaN(y) || isNaN(z)) {
        result_checksumDiv.textContent = "Vui lòng nhập 3 số hợp lệ!";
        return;
    } else {
        if (z === x + y) {
            result_checksumDiv.textContent = "z bằng tổng của x và y";
            return;
        } else {
            result_checksumDiv.textContent = "z không bằng tổng của x và y";
            return;
        }
    }
};


