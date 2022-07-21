var currentFormat = new Intl.NumberFormat("vn-VN");

function showInfo(id, content) {
   document.getElementById(id).innerHTML = content;
}

/* 
    ASSUMING
        - Người dùng nhập vào 3 số nguyên
        - Số nguyên n | 2, 5, 4

    INPUT
        - Tạo biến integerNumberX để nhận giá trị từ input có id integerNumberX với x chạy từ 1-3

    HANDLE
        - Kiểm tra 3 số vừa nhập có phải số nguyên tố không
            + Nếu == 0 -> return
            + Tạo flag giá trị khởi tạo là 1
            + Sử dụng function làm tròn lên (ceil) và xuống (floor) của Math và so sánh 2 giá trị đó
            + Nếu bằng nhau thì flag = 1 -> Dây là số nguyên || flag = 1 -> Đây không phải số nguyên
        - So sánh giá trị của 3 số nguyên vừa nhận được từ người dùng

    OUTPUT
        - Tạo biến showAscendingSort để gán giá trị string là các thẻ HTML
        - Hiển thị giá trị của biến showAscendingSort ra div tag có id showAscendingSort
*/

function sortIntegerNumbers() {
   var integerNumber1 = +document.getElementById("integerNumber1").value;
   var integerNumber2 = +document.getElementById("integerNumber2").value;
   var integerNumber3 = +document.getElementById("integerNumber3").value;

   if (!integerNumber1 || !integerNumber2 || !integerNumber3) return;

   if (checkIntegerNumbers(integerNumber1, integerNumber2, integerNumber3)) {
      if (
         integerNumber1 >= integerNumber2 &&
         integerNumber1 >= integerNumber3 &&
         integerNumber2 >= integerNumber3
      ) {
         showInfo(
            "showAscendingSort",
            "<p>Thứ tự tăng dần: " +
               integerNumber3 +
               " ," +
               integerNumber2 +
               " ," +
               integerNumber1 +
               " </p>"
         );
      } else if (
         integerNumber1 >= integerNumber2 &&
         integerNumber1 >= integerNumber3 &&
         integerNumber3 >= integerNumber2
      ) {
         showInfo(
            "showAscendingSort",
            "<p>Thứ tự tăng dần: " +
               integerNumber2 +
               " ," +
               integerNumber3 +
               " ," +
               integerNumber1 +
               " </p>"
         );
      } else if (
         integerNumber2 >= integerNumber1 &&
         integerNumber2 >= integerNumber3 &&
         integerNumber1 >= integerNumber3
      ) {
         showInfo(
            "showAscendingSort",
            "<p>Thứ tự tăng dần: " +
               integerNumber3 +
               " ," +
               integerNumber1 +
               " ," +
               integerNumber2 +
               " </p>"
         );
      } else if (
         integerNumber2 >= integerNumber1 &&
         integerNumber2 >= integerNumber3 &&
         integerNumber3 >= integerNumber1
      ) {
         showInfo(
            "showAscendingSort",
            "<p>Thứ tự tăng dần: " +
               integerNumber1 +
               " ," +
               integerNumber3 +
               " ," +
               integerNumber2 +
               " </p>"
         );
      } else if (
         integerNumber3 >= integerNumber1 &&
         integerNumber3 >= integerNumber2 &&
         integerNumber1 >= integerNumber2
      ) {
         showInfo(
            "showAscendingSort",
            "<p>Thứ tự tăng dần: " +
               integerNumber2 +
               " ," +
               integerNumber1 +
               " ," +
               integerNumber3 +
               " </p>"
         );
      } else {
         showInfo(
            "showAscendingSort",
            "<p>Thứ tự tăng dần: " +
               integerNumber1 +
               " ," +
               integerNumber2 +
               " ," +
               integerNumber3 +
               " </p>"
         );
      }
   } else {
      showInfo(
         "showAscendingSort",
         "<p>Ba số nhập vào phải là số nguyên tố!</p>"
      );
   }
}

function checkIntegerNumbers(integerNumber1, integerNumber2, integerNumber3) {
   var flag = 1;

   flag = Math.ceil(integerNumber1) === Math.floor(integerNumber1) ? 1 : 0;
   flag = Math.ceil(integerNumber2) === Math.floor(integerNumber2) ? 1 : 0;
   flag = Math.ceil(integerNumber3) === Math.floor(integerNumber3) ? 1 : 0;

   return flag;
}

/* 
    ASSUMING
        - End User lựa chọn thông tin của mình
        - Thành viên gia đình có 4 người: Bố(B), Mẹ(M), Anh Trai(A), Em gái(E)

    INPUT
        - Tạo biến username để gán giá trị từ option id endUser

    HANDLE
        - Tạo biến showEndUserInfo gán giá trị string là các thẻ HTML

    OUTPUT
        - Hiển thị giá trị của biến showEndUserInfo ra thẻ div id showEndUserInfo
*/

function getLogin() {
   var username = document.getElementById("endUser").value;

   if (username === "b") {
      username = "Bố";
   } else if (username === "m") {
      username = "Mẹ";
   } else if (username === "a") {
      username = "Anh trai";
   } else {
      username = "Em gái";
   }
   var showEndUserInfo = "<div>";
   showEndUserInfo +=
      "<p>Xin chào " + username + ", dùng máy Tiến cẩn thận ạ!</p>";

   showInfo("showEndUserInfo", showEndUserInfo);
}

/*
    ASSUMING
        - 3 số nguyên bất kỳ: 30 04 17
        - Tạo biến showNumberValue để gán giá trị string là các thẻ HTML để hiển thị 3 số nguyên cho sẵn
        
    INPUT
        - Tạo biến integerNumberX gán giá trị lần lượt 30, 04, 17 với x chạy từ 4-6
    
    HANDLE
        - Tạo biến đếm số chẵn countEvenNumber & số lẻ countOddNumber
        - Nếu biến đó % 2 == 0 thì countEventNumber + 1 || countOddNumber + 1
        
    OUTPUT 
        - Tạo biến showNumber để gán giá trị string là các thẻ HTML
        - Hiển thị biến showNumber ra thẻ div id showNumbers
*/
var integerNumber4 = 30;
var integerNumber5 = 4;
var integerNumber6 = 17;

var showNumberValue =
   "<p>Dãy số: " +
   integerNumber4 +
   " ," +
   integerNumber5 +
   " ," +
   integerNumber6 +
   "</p>";

showInfo("showNumberValue", showNumberValue);

function countNumbers() {
   var countEvenNumber = 0;
   var countOddNumber = 0;

   if (integerNumber4 % 2 == 0) {
      countEvenNumber += 1;
   } else {
      countOddNumber += 1;
   }

   if (integerNumber5 % 2 == 0) {
      countEvenNumber += 1;
   } else {
      countOddNumber += 1;
   }

   if (integerNumber6 % 2 == 0) {
      countEvenNumber += 1;
   } else {
      countOddNumber += 1;
   }

   var showNumber = "<div>";
   showNumber += "<p>Số chẵn: " + countEvenNumber + "</p>";
   showNumber += "<p>Số lẽ: " + countOddNumber + "</p>";

   showInfo("showNumber", showNumber);
}

/* 
    ASSUMING
        - End User nhập vào giá trị của 3 cạnh
    
    INPUT
        - Tạo biến sidex để gán giá trị từ input có id sidex với x chạy từ 1-3

    HANDLE
        - Giá trị 3 biến sideX bằng nhau => Tam giác đều
        - Giá trị 2 biến sideX bằng nhau => Tam giác cân
        - Bình phương của 1 biến sidex = tổng bình phương 2 biến sidex còn lại => Tam giác vuông
    
    OUTPUT
        - Hiển thị thông tin của tam giác ra thẻ div có id showTriangle
    
*/

function analyseTriangle() {
   var side1 = +document.getElementById("side1").value;
   var side2 = +document.getElementById("side2").value;
   var side3 = +document.getElementById("side3").value;

   if (side1 === side2 && side2 === side3) {
      showInfo("showTriangle", "<p>Đây là tam giác đều!</p>");
   } else if (side1 === side2 || side1 === side3 || side2 === side3) {
      showInfo("showTriangle", "<p>Đây là tam giác cân</p>");
   }

   if (Math.pow(side1, 2) == Math.pow(side2, 2) + Math.pow(side3, 2)) {
      showInfo("showTriangle", "<p>Đây là tam vuông</p>");
   } else if (Math.pow(side2, 2) == Math.pow(side1, 2) + Math.pow(side3, 2)) {
      showInfo("showTriangle", "<p>Đây là tam vuông</p>");
   } else if (Math.pow(side3, 2) == Math.pow(side1, 2) + Math.pow(side2, 2)) {
      showInfo("showTriangle", "<p>Đây là tam vuông</p>");
   }
}
