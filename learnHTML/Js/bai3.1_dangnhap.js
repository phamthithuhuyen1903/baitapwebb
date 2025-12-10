function DangNhap(){
    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();
    let message = document.getElementById("message");
    if(username === "" && password === ""){
       message.style.display="block";
       message.className = "error"; 
       message.innerText = "Bạn phải nhập đầy đủ username và password!";
    }else{
        message.style.display = "block"; 
        message.className = "success"; 
        message.innerText = "Đăng nhập thành công!";
    }
}
DangNhap();