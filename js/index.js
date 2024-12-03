$(document).ready(function(){

let i = $(".c_change_word>li.on").index();
let count = $(".c_change_word>li").length;

let auto = setInterval(function(){
  if( i == count-1){
      i = 0;
  }else{
      i++;
  }
  $(".c_change_word>li").removeClass("on");
  $(".c_change_word>li").eq(i).addClass("on");
}, 3000);

});