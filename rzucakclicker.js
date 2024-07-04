let dialog = require("dialog");
let submenu = require("submenu");
let counter = 0;
let selected = 'none';

function showNotification() {
    let result = dialog.message("RzucakClicker", "Clicki: " + to_string(counter));
    if (result) {
        counter++;
        showNotification(); 
    }
}
function checkState(){
    if (selected === 'playing'){
        showNotification();
    }
    else if (selected === 'credits')
        {
            let result1 = dialog.message("RzucakClicker", "backend by gasnic");
            if(result1){
                checkState();
                selected = "none";
            }
        }
    else{
        mainMenu();
    }
    
}
function mainMenu(){
    submenu.setHeader("RzucakClicker");
    submenu.addItem("Graj", 1);
    submenu.addItem("Tworcy", 2);
    let selected = submenu.show();
    if (selected === undefined) {
        
    } 
    else if (selected === 1) {
        selected = "playing";
        checkState();
    }
    else if (selected === 2) {
        selected = "credits";
        checkState();
    }
}

while (true) {
    
    checkState();
    delay(1000); 
}
