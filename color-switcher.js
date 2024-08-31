const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")


//There is an object called colorMap that acts like a dictionary. It stores pairs of colors: each color name (like "grey" or "blue") is linked to a specific color code (like #68d388 or #a0d2eb).
const colorMap = {
    grey: '#68d388',
    white: 'white',
    blue: '#a0d2eb',
    yellow: '#c89666',
    teal: 'teal',
    thistle: 'thistle'
};

buttons.forEach(function(button){
    button.addEventListener('click', function(e){
        // Get the color value based on the button's ID
        const color = colorMap[e.target.id]; //e.target.id: This retrieves the id attribute of the HTML element that triggered the event. 

        // Set the background color of the body to the selected color
        if (color) {
            body.style.backgroundColor = color;
        }
    })    
});