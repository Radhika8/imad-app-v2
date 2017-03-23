/*-console.log('Loaded!');
// change the text of main-text div
var element = document.getElementById('main-text');
element.innerHTML = 'New Value';

//Move the Image
var img = document.getElementById('madi');
var marginLeft = 0;
function moveRight() {
    marginLeft = marginLeft + 1;
    img.style.marginLeft = marginLeft + 'px';
    
}
img.onclick = function() {
   // img.style.marginLeft = '100px';
   
   var interval = setInterval(moveRight,50);
    
};
*/


var button = document.getElementById('counter');
var counter=0;
button.onclick = function(){
    
    //make a request to the counter endpoint
    
    //capture the response and store it in a variable
    
    //Render the variable in the correct span
    counter = counter + 1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
};