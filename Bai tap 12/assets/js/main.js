/**
 * Bài 1. Viết 1 function kiểm tra 1 chuỗi có nằm trong chuỗi còn lại hay không. Nếu có trả về true, nếu không trả về false

Đầu vào có 2 tham số : Tham số 1 là chuỗi ban đầu, tham số 2 là chuỗi cần kiểm tra

Ví dụ:

checkStringExist(“i love you”, “you”) => true
checkStringExist(“i love you”, “hate”) => false
 * @param {*} mainString 
 * @param {*} subString 
 */
function checkStringExist(mainString, subString) {
    var mainString = document.getElementById("mainString").value;
    var subString = document.getElementById("subString").value;
    var result_checkStringExistDiv = document.getElementById("result_checkStringExist");

    if (mainString.includes(subString)) {
        result_checkStringExistDiv.textContent = `"true": '${subString}' có tồn tại trong "${mainString}"`
        
        
    } else {
        result_checkStringExistDiv.textContent = `"false":'${subString}' không tồn tại trong "${mainString}"`;
    }
};


/**
 * Bài 2. Viết function truyền vào 1 chuỗi, hãy rút ngắn chuỗi bằng cách cắt ra 8 ký tự đầu của 1 chuỗi và thêm dấu ba chấm ở cuối chuỗi. Nếu chuỗi có độ dài <= 8 ký tự thì giữ nguyên

Ví dụ:

shortenString(“Xin chào các bạn”) => “Xin chào…”
shortenString("hello’) => “hello”
 */

function shortenString() {
    var originString = document.getElementById("originString").value;
    var result_shortenStringtDiv = document.getElementById("result_shortenString");

    if (originString.length <= 8) {
        result_shortenStringtDiv.textContent= originString;
    } else {
        result_shortenStringtDiv.textContent = originString.slice(0, 8) + "...";
    }
};

/**
 * Bài 3. Viết function truyền vào 1 chuỗi, kiểm tra xem chuỗi đó có phải chuỗi đối xứng hay không (chuỗi đối xứng là chuỗi đọc xuôi hay ngược đều như nhau, không tính khoảng trắng, không phân biệt hoa thường), kết quả trả về true hoặc false.

Ví dụ

“Race car” => true,
“hello world” => false.
*/ 
function isPalindrome() {
    var originString2 = document.getElementById("originString2").value;
    var result_isPalindromeDiv = document.getElementById("result_isPalindrome");

    // Loại bỏ các khoảng trắng và chuyển đổi chuỗi thành chữ thường
    originString2 = originString2.replace(/\s/g, "").toLowerCase();
    
    // So sánh chuỗi với phiên bản đảo ngược của nó
    if (originString2 === originString2.split("").reverse().join("")) {
        result_isPalindromeDiv.textContent = "true"
    } else {
        result_isPalindromeDiv.textContent = "false"
    }
};

/**
 * Bài 4: Viết function truyền vào 1 số nguyên, hãy sắp xếp lại các chữ số trong số nguyên đó sao cho ra 1 số nhỏ nhất có thể (không tính số 0 đầu tiên).

Ví dụ

53751 -> 13557
14350 -> 10345
203950 -> 200359
 */

function smallestNumber() {
    var originNumber = document.getElementById("originNumber").value;
    var result_smallestNumberDiv = document.getElementById("result_smallestNumber");

    if (originNumber < 0) {
        result_smallestNumberDiv.textContent = "Vui lòng một nhập số nguyên dương"
    } else {
        // Chuyển số nguyên thành một mảng các chữ số
        let digits = Array.from(String(originNumber), Number);
    
        // Sắp xếp lại các chữ số trong mảng theo thứ tự từ bé đến lớn
        digits.sort((a, b) => a - b);
    
        //Kiểm tra phần tử đầu tiên của mảng sau khi sắp xếp có phải là số 0
        if (digits[0] === 0) {
            // Tìm vị trí  của số đầu tiên khác 0 có trong mảng
            let firstNonZeroIndex = digits.findIndex(digit => digit !== 0);
            if (firstNonZeroIndex !== -1) {
                // Đảo chỗ số 0 đầu tiên với số nhỏ nhất khác 0
                [digits[0], digits[firstNonZeroIndex]] = [digits[firstNonZeroIndex], digits[0]];
            }
        }
        
        
        // Chuyển mảng các chữ số thành một chuỗi và trả về kết quả
        result_smallestNumberDiv.textContent = parseInt(digits.join(""));
    }

    
};


/** 
 * Bài 5: Viết function truyền vào 1 chuỗi bất kỳ gồm nhiều từ. Hãy chuyển chuỗi đó thành dạng snake_case và viết thường

Ví dụ:

“HELLO world” => “hello_world”
“Xin Chào Các BẠN” => “xin_chào_các_bạn”
*/
function toSnakeCase() {
    var originString3 = document.getElementById("originString3").value;
    var result_toSnakeCaseDiv = document.getElementById("result_toSnakeCase");

    // Chuyển tất cả các ký tự trong chuỗi thành chữ thường
    originString3 = originString3.toLowerCase();
    
    // Thay thế khoảng trắng và ký tự in hoa bằng dấu gạch dưới
    result_toSnakeCaseDiv.textContent = originString3.replace(/\s+/g, '_');
    
};










