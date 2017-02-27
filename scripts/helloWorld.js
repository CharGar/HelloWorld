$(function(){
console.log( 'Hello World!, click the h1 and p tags' );
$("h1").click(function(){
  $(this).toggleClass('a b');
});
$("p").click(function(){
  $("p").text("Happy to be apart of Psi!!!!");
});
// jQuery methods go here...

});
