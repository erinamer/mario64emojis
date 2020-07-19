function marioHandler() {
    // convert inputted text to lowercase
    let originalText = document.getElementById("mario_text").value.toLowerCase();
    let letters = /[a-z]/; // regex to check for a letter

    let currentChar = "";
    let newText = "";

    // iterate through inputted text
    for (let i = 0; i < originalText.length; i++) {
        currentChar = originalText.charAt(i);

        // if current char is a letter, turn it into the emoji
        if (currentChar.match(letters))
            newText += ":" + currentChar + "mario: ";
        else if (currentChar === " ")
            newText += "&nbsp ";
        else
            newText += currentChar; // leave punctuation alone
    }

    document.getElementById("mario_result").innerHTML = newText; // show result
    //document.getElementById("main_box").style.height = "auto";
};

function copyHandler() {
    let marioResult = document.getElementById("mario_result");
    let copier = document.createElement("textarea");

    document.body.appendChild(copier);
    copier.value = marioResult.innerText;
    copier.select();
    document.execCommand("copy");
    document.body.removeChild(copier);
  }

function enterHandler(event) { 
    if (event.keyCode == 13 && !event.shiftKey) { 
        
        //Stops enter from creating a new line 
        event.preventDefault();  
        document.getElementById("mario_button").click();
    } 
} 