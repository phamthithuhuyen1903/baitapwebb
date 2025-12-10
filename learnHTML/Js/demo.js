//alert("Xin chào");
//hàm thông thường
function tinhtong(a,b){
    return a+b;
}console.log("Tổng là: " + tinhtong(5,10));
//hàm ẩn danh
var multiply=function(a,b){
    return a*b;
}
console.log("Tích là: " + multiply(5,10));
//hàm mũi tên
const sayHi =(name)=>
{
    console.log("xin chào"+name);
}
sayHi(" Huyền");
//hàm gọi lại
function process (x,callback){
    console.log("Giá trị: "+x);
    callback();
}
function done(){
    console.log("Hoàn thành");
} 
process(5,done);
//hàm đệ quy
function factorial(n){
    if(n==0){
        return 1;
    }return n*factorial(n-1);
}
console.log("Giai thừa là: " + factorial(5));
//hàm prompt
// let name = prompt("Nhập tên của bạn: ");
// console.log("Tên của bạn là: " + name);
// //hàm confirm
// let thongbao = confirm("Bạn có muốn xóa không? ");
// if(thongbao){
//     console.log("Đã xóa");
// }else{
//     console.log("Hủy xóa");
// }
//câu lệnh if else
function diem(){
    let diem=9;
    if(diem>=8){
        console.log("Giỏi");
    }else if(diem>=6.5){
        console.log("Khá");
    }else if(diem>=5){
        console.log("Trung bình");
    }else{
        console.log("Yếu");
    }
}
diem();
//câu lệnh switch case
function dayOfWeek(){
    let day=3;
    switch(day){
        case 1:
            console.log("Thứ hai");
            break;
        case 2:
            console.log("Thứ ba");
            break;
        case 3:
            console.log("Thứ tư");

            break;
        case 4:
            console.log("Thứ năm");
            break;
        default:
            console.log("Cuối tuần");
    } 
}
dayOfWeek();
//câu lệnh lặp for
function danhsach(){
    console.log("DANH SÁCH NHÓM ");
    let name=["Huyền","Loan","Linh","My","Dung"];
    for(i=0;i<name.length;i++){
        console.log(name[i]);
    }
}
danhsach();
function demso(){
    console.log("In số lẻ từ 1 đến 5");
    for(let i=1;i<=5;i++){
        if(i%2==0){
            continue;
        }else{
            console.log(i);
        }   
        
    }
}
demso();
//vòng lap while
function lapwhile(){
    console.log("Vòng lặp while");
    let i=1;
    while(i<=5){
        console.log(i);
        i++;
    }
}
lapwhile();
//vòng lặp do while
function lapdowhile(){
    console.log("Vòng lặp do while");
    let i=1;
    do{
        console.log(i);
        i++;
    }
    while(i<=4);
}
lapdowhile();
//câu lệnh break
function cauLenhBreak(){
    console.log("Câu lệnh break");
        for(let i=1;i<=5;i++){
            if(i==3){
                break;
            }  
            console.log(i); 
        }
    }
cauLenhBreak();
//câu lệnh continue
function cauLenhContinue(){
    console.log("Câu lệnh continue");
    for(let i=1;i<=5;i++){
        if(i==2){
            continue;
        }

        console.log(i);
    }
}
cauLenhContinue();
function doituongString(){
    let text= "JavaScript là ngôn ngữ lập trình tuyệt vời!";
    //lấy độ dài chuỗi
    console.log("Độ dài chuỗi: " + text.length);
    //lấy kí tự trong chuỗi
    console.log("Kí tự đầu tiên: " + text.charAt(0));
    console.log("Mã ASCII của kí tự đầu tiên: " + text.charCodeAt(0));
    console.log("Dùng cú pháp []: " + text[0]);
    //cắt chuỗi
    console.log("slice(1,10): " + text.slice(1,10));
    console.log("substring(1,10): " + text.substring(1,10));
    console.log("substr(1,10): " + text.substr(1,10));
    //chuyển đổi chữ hoa chữ thường
    console.log("Viết hoa: " + text.toUpperCase());
    console.log("Viết thường: " + text.toLowerCase());
    //cắt chuỗi
    console.log("slice(2,10): " + text.slice(2,10));
    console.log("substring(2,10): " + text.substring(2,10));
    console.log("substr(2,10): " + text.substr(2,10));
    //nối chuỗi
    let str1="Xin chào";
    let str2="JavaScript";
    console.log("Nối chuỗi bằng concat(): " + str1.concat(" ",str2));
    console.log("Nối chuỗi đầu +", str1 + " " + str2);
    //loại bỏ khoảng trắng
    console.log("Chuỗi sau khi trim():"),text.trim();
    console.log("Chuỗi sau khi trimStart():"),text.trimStart();
    console.log("Chuỗi sau khi trimEnd():"),text.trimEnd();
    //kiểm tra chuỗi
    console.log("Chuỗi có chứa 'JavaScript': " + text.includes("JavaScript"));
    console.log("CHuỗi có bắt đầu bằng 'JavaScript': " + text.startsWith("JavaScript"));
    console.log("Chuỗi có kết thúc bằng'vời!': " + text.endsWith("vời!"));
    //tìm kiếm chuỗi
    console.log("Ví trí đầu tiên của 'a': " + text.indexOf("a"));
    console.log("Ví trí cuối cùng của 'a': " + text.lastIndexOf("a"));
    console.log("Ví trí của'lập trình': " + text.search("lập trình"));
    //thay thế chuỗi
    console.log("Thay thế'JavaScript' bằng 'JS': " + text.replace("JavaScript","JS"));
    console.log("Thay thế tất cả 'n' bằng'N': " + text.replaceAll("n","N"));
    //tách chuỗi
    let words = "HTML, CSS, JavaScript, React";
    console.log("tách chuỗi thành mảng: " + words.split(", "));
    //sử dụng Template Literal
    let name = "Huyền";
    let age = 20;
    let message = `Tên: ${name}, Tuổi: ${age}, đang học ${str2}`;
    console.log("Template Literal: " ,message);    
    //chuỗi nhiều dòng với Template Literal
    let multiline = `Dòng 1
    Dòng 2
    Dòng 3`;
    console.log("Chuỗi nhiều dòng: " + multiline);

}
doituongString();

function doituondate(){
    //tạo đối tượng ngày giờ mới
    let myDate = new Date();
    console.log("Thời gian hiện tại: " + myDate);
    //lấy năm, tháng , ngày
    console.log("Năm: " + myDate.getFullYear());
    console.log("Tháng: " + myDate.getMonth()+1);
    console.log("Ngày: " + myDate.getDate());
    //lấy giờ , phút, giây
    console.log("Giờ: " + myDate.getHours());
    console.log("Phút: " + myDate.getMinutes());
    console.log("Giây: " + myDate.getSeconds());
    //chỉnh sửa ngày tháng
    myDate.setFullYear(2026);
    myDate.setMonth(5);
    myDate.setDate(15);
    console.log("Thời gian sau khi chính sửa: " + myDate);
    //định dạng ngày giờ
    console.log("Chuỗi ngày đơn giản: ", myDate.toDateString());
    console.log("ISO format: ", myDate.toISOString());
    console.log("Định dạng theo ngô ngữ: ", myDate.toLocaleString('vi-VN'));
    //lấy timestamp
    console.log("Timestamp: " + myDate.getTime());
    //tính khoảng cách giữa hai ngày
    let startDate = new Date("2024-03-01");
    let endDate = new Date("2024-03-05");
    let diffTime = endDate - startDate;
    let diffDays= diffTime/(1000*60*60*24);
    console.log(`Khoảng cách giữa ${startDate} và ${endDate} la ${diffDays} ngày`);
    //cộng/ trừ ngày tháng
    let newDate = new Date();
    newDate.setDate(newDate.getDate() + 7);
    console.log("Ngày sau 7 ngày: ", newDate);
    newDate.setDate(newDate.getDate()-14);
    console.log("Ngày trước 14 ngày: ", newDate);
}
doituondate();
function doituongMath(){
    //các hằng số toán học
    console.log("Số PI: " + Math.PI);
    console.log("Số e: " + Math.E);
    console.log("Căn bậc hai của 2: " + Math.sqrt(2));
    //giá trị tuyệt đối
    console.log("Fias trị tuyệt đối của -10: " + Math.abs(-10));
    //làm tròn số
    console.log("Làm tròn xuống 4.7: " + Math.floor(4.7));
    console.log("Làm tròn lên 4.3: " + Math.ceil(4.3));
    console.log("Làm tròn gần nhất 4.5: " + Math.round(4.5));
    //lũy thừa và căn bạc hai
    console.log("2^3 =", Math.pow(2,3));
    console.log("căn bậc hai của 16: ", Math.sqrt(16));
    //tìm số lớn nhất , nhỏ nhất
    console.log("Số lớn nhất trong(10, 20, 5,40): ", Math.max(10, 20, 5,40));
    console.log("Số nhỏ nhất trong(10, 20, 5,40): ", Math.min(10, 20, 5,40));
    //hamgf lượng giác
    console.log("Sin(90 độ): ", Math.sin(90 * Math.PI / 180));
    console.log("Cos(0 độ): ", Math.cos(0 * Math.PI / 180));
    //sinh số ngẫu nhiên
    console.log("Số ngẫu nhiên từ 0 đến 1: ", Math.random());
    console.log("Số ngẫu nhiên từ 1 đến 100:",Math.floor(Math.random() * 100) + 1);
    //logarit
    console.log("Logarit tự nhiên của 10: ", Math.log(10));
    console.log("Logarit cơ số 10 của 100: ", Math.log10(100));
}
doituongMath();
function doituongArray(){
    let fruits = ["Táo","Chuối","Cam","Dâu"];
    console.log("Mảng ban đâug: ", fruits);
    //lấy độ dài mảng
    console.log("Độ dài mảng: ", fruits.length);
    //thêm phần tử vào cuối mảng
    fruits.push("Xoài");
    console.log("Sau khi thêm Xoài: ", fruits);
    //xóa phần tử cuối mảng
    fruits.pop();
    console.log("Sau khi xóa phần tử cuối: ", fruits);
    //thêm phần tử vào đầu mảng
    fruits.unshift("Nho");
    console.log("Sau khi thêm Nho: ", fruits);
    //xóa phần tử đầu mảng
    fruits.shift();
    console.log("Sau khi xóa phần tử đầu: ", fruits);
    //cắt một phần của mảng
    let citrus = fruits.slice(1,3);
    console.log("Mảng citrus(cắt từ index 1 đến 2):", citrus);
    //nối hai mảng
    let moreDruits = fruits.concat(["Xoài","Dưa hấu"]);
    console.log("Mảng sau khi nối: ", moreDruits);
    //tìm vị trí phần tử
    console.log("Vị trí của 'Cam': ", fruits.indexOf("Cam"));
    //kiểm tra phần tử có trong mảng không
    console.log("'Dưa hấu' có trong mảng không?", fruits.includes("Dưa hấu"));
    //sắp xếp mảng
    fruits.sort();
    console.log("Sắp xếp mảng: ", fruits);
    //đảo ngược mảng
    fruits.reverse();
    console.log("Mảng sau khi đảo ngược: ", fruits);
    //lặp qua từng phần tử
    console.log("Duyệt mảng bằng forEach:");
    fruits.forEach(fruits => console.log(fruits));
    //tạo mảng mới từ mảng cũ
    let upperCaseFruits = fruits.map(fruits => fruits.toUpperCase());
    console.log("Mảng chữ in hoa: ", upperCaseFruits);  
    //lọc phần tử theo điề kiện
    let shortNames = fruits.filter(fruits => fruits.length < 4);
    console.log("Tên trái cây có 4 ký tự trở xuống: ", shortNames);
    //tính toán tổng hợp mảng
    let number =[10,20,30,40];
    let total = number.reduce((sum,num) => sum + num,0);
    console.log("Tổng các số trong mảng: ", total);

}
doituongArray();

//ví dụ 3.10
let title = document.getElementById("title");
title.style.color = "blue"; // Đổi màu chữ

// Truy xuất bằng TagName
let paragraphs = document.getElementsByTagName("p");
paragraphs[0].style.fontSize = "20px"; // Thay đổi kích thước chữ đoạn đầu tiên

// Truy xuất bằng Class
let descriptions = document.getElementsByClassName("description");
descriptions[1].style.fontWeight = "bold"; // Làm đậm đoạn thứ hai

// Truy xuất bằng CSS Selector
let firstItem = document.querySelector("#list li");
firstItem.style.backgroundColor = "yellow"; // Đổi màu nền phần tử đầu tiên

let allItems = document.querySelectorAll("#list li");
allItems.forEach(item => {
    item.style.margin = "10px"; // Tăng khoảng cách giữa các mục
});

// Hàm thay đổi nội dung khi click button
function changeText() {
    title.textContent = "Nội dung đã thay đổi!";
    descriptions[0].classList.add("highlight"); // Thêm class CSS để đổi màu chữ
}

//ví dụ 3.11
function replaceElement() {
    // Lấy phần tử ảnh cần thay thế
    let img = document.getElementById("image");

    // Tạo phần tử mới (đoạn văn)
    let newElement = document.createElement("p");
    newElement.textContent = "Hình ảnh đã được thay thế bằng đoạn văn!";
    newElement.style.fontSize = "18px";
    newElement.style.fontWeight = "bold";
    newElement.style.color = "red";

    // Lấy phần tử cha của ảnh
    let parent = img.parentNode;

    // Thay thế ảnh bằng đoạn văn
    parent.replaceChild(newElement, img);
}

//ví dụ 3.12
function getStyle() {
        let element = document.getElementById("text");
        let style = window.getComputedStyle(element);

        let color = style.color;
        let fontSize = style.fontSize;
        let fontWeight = style.fontWeight;

        document.getElementById("result").innerHTML =
            `Màu chữ: ${color} <br> Kích thước chữ: ${fontSize} <br> Độ đậm: ${fontWeight}`;
    }

    function setStyle() {
        let element = document.getElementById("text");

        element.style.color = "red";
        element.style.fontSize = "25px";
        element.style.fontWeight = "normal";
        element.style.backgroundColor = "yellow";
    }




