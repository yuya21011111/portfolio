//= require_tree .
//= require jquery
//= require jquery_ujs
import "@hotwired/turbo-rails"
import "controllers"
// turbolinksを無効化
document.addEventListener('turbo:load', function() {
// .animate-titleを1文字に分割
var front = document.querySelector('.front_text');
var front_str = front.innerHTML.trim().split("");
const el = document.querySelector('.animate-title');
const str = el.innerHTML.trim().split("");
var el2 = document.querySelector('.animate-title2');
var str2 = el2.innerHTML.trim().split("");

let concatStr = '';

// １文字ずつ文字を挿入
function animation(str,el){
    concatStr = '';
  for(let i = 0; i < str.length; i++) {
      concatStr += '<span class="char">' + str[i] + '</span>';
    }
    el.innerHTML = concatStr;
 }
animation(front_str,front);
animation(str,el);
animation(str2,el2);
});



document.addEventListener('turbo:load', function() {
  const startPage = document.querySelector('#ty-start-page');
  const typingGame = document.querySelector('#ty-game');
  const titleTime = document.querySelector('#ty-title-time');
  const timer = document.querySelector('#ty-timer');
  const timeSelectEl = document.querySelector('.ty-time-select');

  var timelimit = 30;
  var remainingTime;
  
  timeSelectEl.addEventListener('change', () => {
    timelimit = timeSelectEl.value;
  })
  window.addEventListener('keypress', e => {
    if(e.key === 'Enter') {
      start();
    }
    return;
  });

  function start() {
    startPage.classList.remove('show');
    typingGame.classList.remove('show');
    titleTime.textContent = timelimit;
    remainingTime = timelimit;
    timer.textContent = remainingTime;
  }

});