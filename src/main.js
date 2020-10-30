let html = document.querySelector("#html");
let style = document.querySelector("#style");
let string = `/*大家好，我是一名前端新人
*接下来我演示一下我的前端功底
*首先我要准备一个div
*/
#div1{
    border:1px solid red;
    width:300px;
    height:300px;
}
/*接下来我把div变成一个八卦图
*注意看好了
*首先把div变成一个圆圈*/
#div1{
   border-radius:50%;
   box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border:none;
}
/*然后把div变成阴阳相间*/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*接下来给div加两个风火轮*/
#div1::before{
    width:150px;
    height:150px;
    border-radius:50%;
    background:black;
}
#div1::after{
  width:150px;
  height:150px;
  border-radius:50%;
  background:white;
}
/*最后画龙点睛
*就变成了一个八卦*/
#div1::before{
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%);
}
#div1::after{
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%);
}`;
let string2 = ``;
let n = -1;

let step = () => {
  setTimeout(() => {
    n += 1;
    if (string[n] === "\n") {
      string2 += "<br>";
    } else if (string[n] === " ") {
      string2 += "&nbsp";
    } else {
      string2 += string[n];
    }
    html.innerHTML = string2;
    style.innerHTML = string.substring(0, n);
    window.scrollTo(0, 99999);
    html.scrollTo(0, 99999);
    n < string.length - 1 ? step() : "";
  }, 10);
};
step();
