//window.alert("Hello world!!!");
// var result = prompt("Nhập số tuổi của bạn?", 18);
// if (result != null) {
//     alert("tuổi của bạn:" + result)
// } else {
//     alert("Chưa nhập tuổi")
// }
// Lấy về các phần tử theo CSS Selector
//let x = document.querySelectorAll("ul li");
// function clickButton() {
//     document.getElementById("demo").innerHTML = "Hello World!";
//     let y = document.getElementsByTagName("p")[0];
//     y.className = "kkk"
// }
// let x = document.getElementsByClassName("menu");

// // Lặp qua các phần tử có class là menu
// for (let i = 0; i < x.length; i++) {

//     // Lắng nghe sự kiện click
//     // và đổi màu chữ thành màu đỏ
//     x[i].onclick = function () {
//         if (x[i].style.color !== 'red') {
//             this.style = "border: 1px solid black";
//         }
//         else {
//             this.style.color = "border: 1px solid   white";
//         }
//     };
// }

// function taoSoNgauNhien() {
//     document.getElementById("myP").innerHTML = Math.floor(Math.random() * 50);
// }
// document.getElementById("myDIV").addEventListener("mousemove", taoSoNgauNhien);

// function xoaSuKienMosemove() {
//     document.getElementById("myDIV").removeEventListener("mousemove", taoSoNgauNhien);
// }


// function checkInput() {
//     // Lấy số mà người dùng vừa nhập
//     var number = document.getElementById("number").value;
//     console.log("🚀 ~ file: main.js ~ line 45 ~ checkInput ~ number", number)

//     // Xử lý lỗi với try catch và throw
//     try {
//         if (number == "") {
//             throw "Bạn chưa nhập giá trị";
//         } else if (isNaN(number)) {
//             throw "Giá trị bạn nhập không phải là một số";
//         } else if (number < 1) {
//             throw "Giá trị vừa nhập nhỏ hơn giá trị cho phép";
//         } else if (number >= 100) {
//             throw "Giá trị vừa nhập lớn hơn giá trị cho phép";
//         }
//         document.getElementById("msg").innerHTML = "Hợp lệ";
//     } catch (ex) {
//         document.getElementById("msg").innerHTML = ex;
//     }

// }
// document.getElementById("check").addEventListener("click", checkInput);


function getPerson(name = "dung", age = 20, ...rest) {
    console.log(name + " " + age);
    console.log(rest)
}
getPerson("Nam", 13, "Dz", "Giau", 30000)


const printS = ({ name, age }) => {
    console.log(`toi ten ${name} , nam nay ${age} tuoi `);
}
printS({ name: "Dung", age: 18 })