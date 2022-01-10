let html = document.querySelector('#html');
let style = document.querySelector("#style");
let string = `
/*你好，我是一名前端新人
接下来我演示一下我的前端工地
首先准备一个div
我要加的样式是*/
#div1{
    border:1px solid red;
    width:300px;
    height:300px;
}
/* 
接下来我把div变成一个八卦图
注意看好了
首先把div变成一个圆
*/
#div1{
    border-radius:50%;
    box-shadow:0 0 3px rgba(0,0,0,.5);
    border:none;
}
/* 
八卦是阴阳组成的
一黑一白
*/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* 
接下来添加两个神秘的小球
*/
#div1::before{
width:150px;
height:150px;
top:0;
left:50%;
transform:translate(-50%);
border-radius:50%;
background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
width:150px;
height:150px;
bottom:0;
left:50%;
transform:translate(-50%);
border-radius:50%;
background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
`;

//上面文字的回车在HTML显示的是空格，HTML里面的多个回车和空格都会被忽略为一个空格
let string2 = ''
let n = 0;
console.log(string.length)
let step = () => {
    setTimeout(() => {
        console.log(n)
        if (string[n] === "\n") {
            //如果是回车就就加换行
            string2 += "<br>";
        } else if (string[n] === " ") { //这里表示空格
            string2 += "&nbsp"
        } else {
            // 不是回车就照搬
            string2 += string[n]
        }
        html.innerHTML = string2;
        style.innerHTML = string.substring(0, n); //在style标签写内容,但是需要把string里面不是css的内容给注释掉
        window.scrollTo(0, 99999); //没写一句内容就把滚动条拉到最底部
        html.scrollTo(0, 99999); //没写一句内容就把div1滚动条拉到最底部，手机显示时的作用
        if (n < string.length - 1) { //减去最后一个索引，因为最后一个索引是访问不到的
            n++;
            step();
        }

    }, 50)
}
step();