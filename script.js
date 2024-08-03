// script.js
var count = 0;
var is_click = false;
var clickable_div = document.getElementById('clickable-div');
var banana_count = document.getElementById('banana_count');

clickable_div.addEventListener('click', function() {
    var gameArea = document.getElementById('game-area');
    count += 1;
    if (!is_click){
        clickable_div.classList.remove('gorilla_img_01');
        clickable_div.classList.add('gorilla_img_02');
        is_click = true;
    }else{
        clickable_div.classList.remove('gorilla_img_02');
        clickable_div.classList.add('gorilla_img_01');
        is_click = false;
    }
    banana_count.innerHTML = count;
    // Create a new banana element
    var banana = document.createElement('div');
    banana.className = 'banana';
        // Set a random horizontal position
        var randomX = Math.random() * (window.innerWidth - 50); // 50 is the width of the banana
        banana.style.left = randomX + 'px';
        
        // Append the banana to the game area
        gameArea.appendChild(banana);
    // Append the banana to the game area
    gameArea.appendChild(banana);
    
    // Remove the banana after the animation ends
    banana.addEventListener('animationend', function() {
        gameArea.removeChild(banana);
    });
});
