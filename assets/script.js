let boxTop = 200;
let boxLeft = 200;

function keyNotAllowed(key){
    if(key !== 'ArrowLeft' && key !== 'ArrowRight' && key !== 'ArrowDown' && key !== 'ArrowUp'){
        return true
    }
    return false
}

function warningNotice(){
    let body = document.getElementById('body');
    let warning = document.createElement('div');
    let h2 = document.createElement('h2');
    
    warning.classList.add('warning');
    warning.appendChild(h2);
    body.appendChild(warning);

    h2.innerText = 'Tecla não permitida! Click to continue!'

    warning.addEventListener('click', function(){
        warning.style.display = 'none'
    })
}

document.addEventListener('keydown', (event) => {
    const keyName = event.key;

    if(keyName === 'ArrowDown'){
        boxTop += 10;
    }
    if(keyName === 'ArrowUp'){
        boxTop -= 10;
    }
    if(keyName === 'ArrowRight'){
        boxLeft += 10;
    }
    if(keyName === 'ArrowLeft'){
        boxLeft -= 10;
    }
    if(keyNotAllowed(keyName)){
        warningNotice()
    }
    document.getElementById("box").style.top = boxTop + "px";
    document.getElementById("box").style.left = boxLeft + "px";
    console.log('keydown event\n\n' + 'key: ' + keyName);
  });