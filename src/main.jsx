import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

// const Info = {
//     name: "Nguyễn Trung nam",
//     age: 18,
//     address: "Hà Nội"
// }
// createRoot(document.getElementById("root")).render(
//     <div>
//         <h1>Chào bạn</h1>
//         <ul>Họ tên: {Info.name}</ul>
//         <ul>Tuổi: {Info.age + 1}</ul>
//         <ul>Địa chỉ: {Info.address}</ul>

//     </div>
// )

// tạo biến user
// const user = {
//     firstName: "Phong",
//     lastName: "Cách"
// };

// function displayName(user){
//     return user.firstName + ' ' + user.lastName
// }
// function element(user){

// }
function Header(){
    return <h1>Đứng ở dưới thì nhảy mạnh lên</h1>
}
function Content(){
    return <h1>Ai sợ thì đi về</h1>
}
function Footer(){
    return <h1>Phong Cách</h1>
}

createRoot(document.getElementById("root")).render(
    <div>
       <Header/>
       <Content/>
       <Footer/>
    </div>
)