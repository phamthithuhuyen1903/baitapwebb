
function test(){
    console.log("Câu lệnh continue");
    for (let i=1;i<=10;i++){
        if(i%2==0){
            continue;
        }
        console.log(i);
    }
}
test();
function danhsach(){
    console.log("Danh sách nhóm");
    let nhom=["Huyền","Loan","Linh","My","Dung"];
    for(let i=0;i<nhom.length;i++){
        console.log(nhom[i]);
    }
}
danhsach();
function caulenhifelse(){
    console.log("Câu lệnh if else");
    let score=85;
    if(score>=90){
        console.log("Xuất sắc");
    }else if(score>=75){
        console.log("Giỏi");
    }else if(score>=60){
        console.log("Khá");
    }else{
        console.log("Trung bình");
    }
}
caulenhifelse();   
function switchcase(){
    console.log("Câu lệnh switch case");
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
switchcase();
function tinhtong(a,b){
    console.log("Tính tổng");
    return a+b;
}console.log("Tổng là: " + tinhtong(5,10));

