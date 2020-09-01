/**練習
//ボタン要素でDOMのIDを結びつける（toggle）
document.getElementById('nav-toggle');
    function showElement(){
        var btn = document.getElementById('nav-toggle');
        console.log("ele");
        //HTML要素オブジェクトを取得
}
*/

//クリックするときのボタン要素を取得
var btn = document.getElementById("nav-button");
//アイコン要素
var apple = document.getElementsByClassName('apple');
//リスト要素を取得
var show = document.getElementById('nav-list');

//クリックした時にIDの発火
btn.addEventListener('click', function(){
    show.classList.toggle('nav-list');
})
//もう一度クリックした時にセレクタを発火
btn.addEventListener('click', function(){
    show.classList.toggle('.kesu');
})