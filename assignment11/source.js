console.log("Starting...");
let turn = 1;
let display = document.getElementById('display');
let spots = [0,0,0,0,0,0,0,0,0]; //0 nothing, 1 X, 2 O used for tracking
function onClick(btnArg){
    let btn = btnArg
    let here = document.getElementById(btn)
    let state = here.innerHTML;
    if(state != 'X' && state != 'O'){//'-' is the placeholder, if there isnt the placeholder there is already a letter there
        console.log('in')
        if(turn%2 == '1'){
            here.innerHTML = 'X';
            display.innerHTML = 'Os Turn';
            spots[btn] = 1;
            turn++;
            if(winCheck('1') == true){
                display.innerHTML = 'X Wins!'
            }
        }else{
            here.innerHTML = 'O';
            display.innerHTML = 'Xs Turn';
            spots[btn] = 2;
            turn++;
            if(winCheck('2') == true){
                display.innerHTML = 'O Wins!'
            }
        }
    }else{
        console.log('invalid location');
        return prompt="This is not a valid spot";
    }
    
}

function winCheck(symbol) {//checkWin checks all possible win patterns (9) and check per symbol when called to avoid a more complex function
    console.log("checking win");
    if (spots[0] == symbol && spots[1] == symbol && spots[2] == symbol){//uses the spots array rather than the actual html conent
        console.log("found win");
        return true;
    } else if (spots[3] == symbol && spots[4] == symbol && spots[5] == symbol){
        console.log("found win");
        return true;
    } else if (spots[6] == symbol && spots[7] == symbol && spots[8] == symbol){
        console.log("found win");
        return true;
    } else if (spots[0] == symbol && spots[3] == symbol && spots[6] == symbol){
        console.log("found win");
        return true;
    } else if (spots[1] == symbol && spots[4] == symbol && spots[7] == symbol){
        console.log("found win");
        return true;
    } else if (spots[2] == symbol && spots[5] == symbol && spots[8] == symbol){
        console.log("found win");
        return true;
    } else if (spots[2] == symbol && spots[4] == symbol && spots[6] == symbol){
        console.log("found win");
        return true;
    } else if (spots[0] == symbol && spots[4] == symbol && spots[8] == symbol){
        console.log("found win");
        return true;
    } else {
        return false;
    }
}

function reset() {
    console.log("reset...");
    let buttons = document.getElementsByTagName('button');//all button elements
    for (let i = 0; i < buttons.length; i++) {//runs through the array and sets the to the default ('-')
        buttons[i].innerHTML = '-';
    }
    let spots = [0, 0, 0, 0, 0, 0, 0, 0, 0]; //equally resets the tracking array
}