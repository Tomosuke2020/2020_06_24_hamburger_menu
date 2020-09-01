/**練習
//ボタン要素でDOMのIDを結びつける（toggle）
document.getElementById('nav-toggle');
    function showElement(){
        var btn = document.getElementById('nav-toggle');
        console.log("ele");
        //HTML要素オブジェクトを取得
}
*/

var btn =
document.getElementById('nav-toggle');

var icon =
document.getElementsByClassName('nav-toggle');

var box = 
document.getElementById('nav-list');

btn.onclick = function(){
    document.querySelector('is-show');
    box.classList.toggle('is-show');
}
