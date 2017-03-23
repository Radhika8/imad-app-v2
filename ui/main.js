console.log('Loaded!');
// change the text of main-text div
var element = document.getElementById('main-text');
element.innerHTML = 'New Value';
//Move Image
var img = document.getElementById('img');
img.onclick = function() {
    img.style.marginLeft = '100px';
    
};