/*
Back-to-top.js a javascript plugin by Master Genius. 
*/

var body = document.querySelector('body');
var head = document.querySelector('head');
var html = document.querySelector('html');

var angle_arrow = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z"/></svg>'

var arrow_up = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"/></svg>'

var circle_arrow_fill = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M8 256C8 119 119 8 256 8s248 111 248 248-111 248-248 248S8 393 8 256zm143.6 28.9l72.4-75.5V392c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24V209.4l72.4 75.5c9.3 9.7 24.8 9.9 34.3.4l10.9-11c9.4-9.4 9.4-24.6 0-33.9L273 107.7c-9.4-9.4-24.6-9.4-33.9 0L106.3 240.4c-9.4 9.4-9.4 24.6 0 33.9l10.9 11c9.6 9.5 25.1 9.3 34.4-.4z"/></svg>';

var circle_arrow_alt = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 504c137 0 248-111 248-248S393 8 256 8 8 119 8 256s111 248 248 248zm0-448c110.5 0 200 89.5 200 200s-89.5 200-200 200S56 366.5 56 256 145.5 56 256 56zm20 328h-40c-6.6 0-12-5.4-12-12V256h-67c-10.7 0-16-12.9-8.5-20.5l99-99c4.7-4.7 12.3-4.7 17 0l99 99c7.6 7.6 2.2 20.5-8.5 20.5h-67v116c0 6.6-5.4 12-12 12z"/></svg>';

html.style.scrollBehavior = 'smooth';

function genreate_random_string(){
	var letter = '12345678910abcdefghijklmnopqurstuvwxyzABCDEFGHIJKLMNOPQURSTUVWXYZ'
	str = '';
	for (var i = 0; i < 22; i++) {str +=  letter[Math.floor(Math.random()*letter.length)]}
  return str;
}

classname = genreate_random_string();

function backtotop(x){

	var div = document.createElement('div');
	div.classList.add(classname);

	div.addEventListener('click',function(){
		document.documentElement.scrollTop = 0;
	})

	if(x.bg){div.style.background = x.bg;}
	if(x.height){div.style.height = x.height;}
	if(x.width){div.style.width = x.width;}
	if(x.round){div.style.borderRadius = x.round}
	if(x.left){div.style.left = x.left}
	if(x.top){div.style.top = x.top}
	if(x.bottom){div.style.bottom = x.bottom}
	if(x.right){div.style.right = x.right}

	if(x.image){
		div.style.backgroundImage = 'url(' + x.image + ')';
  }

  if(x.html){div.innerHTML += x.html}
  if(x.icon){
    if(x.icon == 'angle_arrow'){div.innerHTML += angle_arrow}
    if(x.icon == 'arrow_up'){div.innerHTML += arrow_up}
    if(x.icon == 'circle_arrow_alt'){div.innerHTML += circle_arrow_alt}
    if(x.icon == 'circle_arrow_fill'){div.innerHTML += circle_arrow_fill}
  }

	div.style.position = 'fixed';
  div.style.cursor = 'pointer';
  div.style.transition = "all 0.3s ease 0s";
  div.style.display = 'none';
  div.style.textAlign = 'center';

  head.innerHTML += '<style>.' + classname +'{'+ x.css + '}</style>'

	if(!x.height){div.style.height = "50px";}
	if(!x.width){div.style.width = "50px";}
	if(!x.round){div.style.borderRadius = "20px"}
	if(!x.bottom){div.style.bottom = "20px"}
	if(!x.right){div.style.right = "20px"}
	if(!x.bg && !x.image){div.style.background = '#fafafa'}
	if(!x.animation){x.animation = 'fade'}

  body.append(div)
  
  showing_up_arrow(div,x.animation,x)

  var svg = div.querySelectorAll('svg');
  for (var i = 0; i < svg.length; i++) {
    svg[i].style.height = '100%';
    svg[i].style.width = '100%';
    svg[i].style.transform = 'scale(.90)';
    svg[i].style.position = 'absolute';
    svg[i].style.top = '0';
    svg[i].style.left = '0';
    if(x.icon_color){svg[i].querySelector('path').style.fill = x.icon_color;}
  }

}

function showing_up_arrow(elem,anim,z){
	if(anim == 'fade'){window.onscroll = function() {show_Hide_fade(elem)};}
	if(anim == 'pop-in'){window.onscroll = function() {show_Hide_pop(elem)};}
  if(anim == 'pop-out'){window.onscroll = function() {show_Hide_pop_out(elem,z)};}
  if(anim == 'slide-right'){window.onscroll = function() {show_Hide_slide_right(elem,z)};}
	if(anim == 'slide-up'){window.onscroll = function() {show_Hide_slide_up(elem,z)};}
	if(anim == 'slide-down'){window.onscroll = function() {show_Hide_slide_down(elem,z)};}
	if(anim == 'slide-left'){window.onscroll = function() {show_Hide_slide_left(elem,z)};}
  if(anim == 'slide-down-right'){window.onscroll = function(){show_Hide_slide_down_right(elem,z)};}
  if(anim == 'slide-down-left'){window.onscroll = function(){show_Hide_slide_down_left(elem,z)};}
  if(anim == 'slide-up-left'){window.onscroll = function(){show_Hide_slide_up_left(elem,z)};}
  if(anim == 'slide-up-right'){window.onscroll = function(){show_Hide_slide_up_right(elem,z)};}
}

function show_Hide(e) {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  e.style.display = 'block'
  if(winScroll > 100){e.style.display = 'block';e.style.pointerEvents = 'auto';}
  else{e.style.display = 'none';e.style.pointerEvents = 'none';}
}

function show_Hide_fade(e) {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  e.style.display = 'block'
  if(winScroll > 100){e.style.opacity = 1;e.style.pointerEvents = 'auto';}
  else{e.style.opacity = 0;e.style.pointerEvents = 'none';}
}

function show_Hide_pop(e) {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  e.style.display = 'block'
  if(winScroll > 100){
    e.style.opacity = 1;
    e.style.transform = 'scale(1)';
    e.style.pointerEvents = 'auto';
  }
  else{
    e.style.transform = 'scale(0)';
    e.style.pointerEvents = 'none';
    e.style.opacity = 0;
  }
}

function show_Hide_pop_out(e) {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  e.style.display = 'block'
  if(winScroll > 100){
    e.style.transform = 'scale(1)';
    e.style.opacity = 1;
    e.style.pointerEvents = 'auto';
  }
  else{
    e.style.transform = 'scale(1.5)';
    e.style.opacity = 0;
    e.style.pointerEvents = 'none';
  }
}

function show_Hide_slide_right(e,y) {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  e.style.display = 'block'
  if(winScroll > 100){
    e.style.transform = 'translateX(0px)';
    e.style.opacity = 1;
    e.style.pointerEvents = 'auto';
  }
  else{
    e.style.transform = 'translateX(70px)';
    e.style.opacity = 0;
    e.style.pointerEvents = 'none';
  }
}

function show_Hide_slide_left(e,y) {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  e.style.display = 'block'
  if(winScroll > 100){
    e.style.transform = 'translateX(0px)';
    e.style.opacity = 1;
    e.style.pointerEvents = 'auto';
  }
  else{
    e.style.transform = 'translateX(-70px)';
    e.style.opacity = 0;
    e.style.pointerEvents = 'none';
  }
}

function show_Hide_slide_up(e,y) {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  e.style.display = 'block'
  if(winScroll > 100){
    e.style.transform = 'translateY(0px)';
    e.style.opacity = 1;
    e.style.pointerEvents = 'auto';
  }
  else{
    e.style.transform = 'translateY(-70px)';
    e.style.opacity = 0;
    e.style.pointerEvents = 'none';
  }
}

function show_Hide_slide_down(e,y) {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  e.style.display = 'block'
  if(winScroll > 100){
    e.style.transform = 'translateY(0px)';
    e.style.opacity = 1;
    e.style.pointerEvents = 'auto';
  }
  else{
    e.style.transform = 'translateY(70px)';
    e.style.opacity = 0;
    e.style.pointerEvents = 'none';
  }
}

function show_Hide_slide_down_right(e,y) {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  e.style.display = 'block';
  if(winScroll > 100){
    e.style.transform = 'translateY(0px) translateX(0px)';
    e.style.opacity = 1;
    e.style.pointerEvents = 'auto';
  }
  else{
    e.style.transform = 'translateY(120px) translateX(120px)';
    e.style.opacity = 0;
    e.style.pointerEvents = 'none';
  }
}

function show_Hide_slide_down_left(e,y) {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  e.style.display = 'block';
  if(winScroll > 100){
    e.style.transform = 'translateY(0px) translateX(0px)';
    e.style.opacity = 1;
    e.style.pointerEvents = 'auto';
  }
  else{
    e.style.transform = 'translateY(120px) translateX(-60px)';
    e.style.opacity = 0;
    e.style.pointerEvents = 'none';
  }
}

function show_Hide_slide_up_left(e,y) {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  e.style.display = 'block';
  if(winScroll > 100){
    e.style.transform = 'translateY(0px) translateX(0px)';
    e.style.opacity = 1;
    e.style.pointerEvents = 'auto';
  }
  else{
    e.style.transform = 'translateY(-40px) translateX(-60px)';
    e.style.opacity = 0;
    e.style.pointerEvents = 'none';
  }
}

function show_Hide_slide_up_right(e,y) {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  e.style.display = 'block';
  if(winScroll > 100){
    e.style.transform = 'translateY(0px) translateX(0px)';
    e.style.opacity = 1;
    e.style.pointerEvents = 'auto';
  }
  else{
    e.style.transform = 'translateY(-40px) translateX(60px)';
    e.style.opacity = 0;
    e.style.pointerEvents = 'none';
  }
}
