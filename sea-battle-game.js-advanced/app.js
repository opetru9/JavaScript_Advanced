let body = document.body
    body.addEventListener('keydown',shoot)

let container = document.querySelector('.sea')  
    container.addEventListener('mousemove', moveScope)

let scoreElement = document.createElement('div')
let score = 100;

let scopeElement = document.createElement('div')
let scope = {
    x: 0
}

let shipElement = document.createElement('div')
let ship = {
    x: 0,
    z: Math.floor(Math.random() * (-(500 / 50) + 1)) * 50 - 50,
    dir:1
}
let timerShip;


let torpedo = {
    x: 0,
    z:-50,
    scale:0.2,
    shot: false
}
let timerTorpedo;

function drawElements(){
// draw waves---------
  for (i=0; i<10 ; i++){
      let wavElement = document.createElement('div')
        wavElement.classList.add('wave')
      container.appendChild(wavElement)
  }
    renderScope()
    renderShip()
}

//   draw Scope-------------
function renderScope(){
    scopeElement.classList.add('scope')
    scopeElement.innerHTML=`
        <div class="mid">+</div>
        <div class="h">--</div>
        <div class="v">--</div>`
    container.appendChild(scopeElement)
    scopeElement.style.left = `${scope.x}px`;
}

function moveScope(e) {
    scope.x = e.clientX-100
    container.removeChild(scopeElement)
    renderScope()
}

//   draw Ship-------------
function renderShip(){
    let index_value;
    let blur_value;
    let radarLayer ;
    switch (ship.z) {
        case -50:
            index_value = 85
            blur_value  = 0.2
            radarLayer  = 1 
            break;
        case -100:
            index_value = 75
            blur_value  = 0.4
            radarLayer  = 1 
            break;
        case -150:
            index_value = 65
            blur_value  = 0.6
            radarLayer  = 1 
            break;
        case -200:
            index_value = 55
            blur_value  = 0.8
            radarLayer  = 2
            break;
        case -250:
            index_value = 45
            blur_value  = 1
            radarLayer  = 2
            break;
        case -300:
            index_value = 35
            blur_value  = 1.2
            radarLayer  = 2
            break;
        case -350:
            index_value = 25
            blur_value  = 1.4
            radarLayer  = 3
            break;
        case -400:
            index_value = 15
            blur_value  = 1.6
            radarLayer  = 3
            break;
        case -450:
            index_value = 5
            blur_value  = 1.8
            radarLayer  = 3
            break;
        case -500:
            index_value = -5
            blur_value  = 2
            radarLayer  = 3
            break;
    }

    let rand = Math.random()
    if (rand >= 0.5) {
        ship.x = innerWidth + 750
        ship.dir = -1
    } else {
        ship.x = -850
        ship.dir = 1
    }
    
    shipElement.innerHTML = `
        <div class="ship__head">
            <div class="head__gun-component"></div>
            </div>
            <div class="ship__body">
            <div class="body__component-horizontal"></div>
            <div class="body__component-horizontal-2"></div>
            <div class="body__component-horizontal-3"></div>
            <div class="body__component-horizontal-top"></div>
            <div class="body__gun"></div>
            </div>
            <div class="ship__tail">
            <div class="tail__gun-component"></div>
        </div>`

    shipElement.style.transform = `translateZ(${ship.z}px) scale(0.75)`;
    shipElement.style.zIndex = `${index_value}`;
    shipElement.style.filter = `blur(${blur_value})`;
    shipElement.classList.add('ship')
    shipElement.style.left = `${(ship.dir == 1) ? innerWidth + 750 : -850}px`;

    clearInterval(timerShip)
    timerShip = setInterval(() => {

        ship.x += ship.dir

        if ((ship.dir == 1 && ship.x > innerWidth + 750) || (ship.dir == -1 && ship.x < -850)) {
            container.removeChild(shipElement)
            renderShip();
        }
        shipElement.style.left = `${ship.x}px`;
        renderRadar(radarLayer,ship.x )
    }, 10)
    container.appendChild(shipElement)
}

// when space ---------------------
function shoot(e){
    if (e.code == 'Space' && !torpedo.shot) {
        torpedo.z = -50
        torpedo.scale = 0.2
        torpedo.shot = true
        torpedo.x = scope.x

        let torpedoElement = document.createElement('div');
        torpedoElement.classList.add('torpedo');
        torpedoElement.style.left = `${torpedo.x}px`;

        torpedoElement.innerHTML = `
            <div class="head"></div>
            <div class="body"></div>
            <div class="tail">
                <div class="tail__component"></div>
                <div class="tail__fire"></div>
            </div>`;
        
        container.appendChild(torpedoElement)

        clearInterval(timerTorpedo)
        timerTorpedo = setInterval(() => {
            torpedoElement.style.transform = `translateZ(${torpedo.z}px) scale(${torpedo.scale})`;
            torpedo.z -= 50
            torpedo.scale -= 0.009
            if (torpedo.z < -700){
                torpedo.shot = false
                container.removeChild(torpedoElement)
                clearInterval(timerTorpedo)

                score -= 10
                renderScore()
            }
            else if ( Math.abs(torpedo.x - ship.x) > 50  && 
                    Math.abs(torpedo.x - ship.x) < 150 && 
                        (torpedo.z + 200) == ship.z) {
                clearInterval(timerShip)
                torpedo.shot = true
                // console.log(ship.x)
                // console.log(torpedo.x)

                torpedoElement.classList.remove('torpedo')
                torpedoElement.classList.add('explosion')
                torpedoElement.innerHTML=`
                    <div class="fire-bottom-sm"></div>
                    <div class="fire-bottom-md"></div>
                    <div class="fire-bottom-l"></div>
                `
                torpedoElement.style.transform = `translateZ(${torpedo.z + 280}px) scale(${torpedo.scale+0.5})`;
                torpedoElement.style.zIndex = `999`;
                
                if (ship.x < (innerWidth / 2) ) {
                    torpedoElement.style.left = `${scope.x + 150}px`

                } else if (ship.x > (innerWidth / 2) ) {
                    torpedoElement.style.left = `${scope.x - 150}px`
                }
                
                score += 10
                renderScore()

                setTimeout(()=>{
                    container.removeChild(shipElement)
                    container.removeChild(torpedoElement)
                    ship.z = Math.floor(Math.random() * (-(500 / 50) + 1)) * 50 - 50
                    renderShip()
                    torpedo.shot = false
                },3000)
                
                clearInterval(timerTorpedo)
            }
        }, 50)
    }
}

// radar------------------
function renderRadar(layer, x){
    let radarElement= document.querySelector('.radar')
    radarElement.innerHTML = `
        <div class="v-line"></div>
        <div class="h-line"></div>
        
    `
    let objectOnRadar = document.createElement('div')
    objectOnRadar.classList.add('object-on-radar')
    if(layer == 1){

        if(x > -850 && x < -108){
            objectOnRadar.style.top= `85px`;
            objectOnRadar.style.left= `70px`;
        }else if(x > -108 && x < 633){
            objectOnRadar.style.top= `70px`;
            objectOnRadar.style.left= `80px`;
        } else if (x > 633 && x < 1375) {
            objectOnRadar.style.top = `70px`;
            objectOnRadar.style.left = `100px`;
        } else if (x > 1375 && x < (innerWidth+750)) {
            objectOnRadar.style.top = `85px`;
            objectOnRadar.style.left = `115px`;
        }
        
    }else if (layer == 2){

        if (x > -850 && x < -108) {
            objectOnRadar.style.top = `80px`;
            objectOnRadar.style.left = `50px`;
        } else if (x > -108 && x < 633) {
            objectOnRadar.style.top = `52px`;
            objectOnRadar.style.left = `73px`;
        } else if (x > 633 && x < 1375) {
            objectOnRadar.style.top = `52px`;
            objectOnRadar.style.left = `110px`;
        } else if (x > 1375 && x < (innerWidth + 750)) {
            objectOnRadar.style.top = `82px`;
            objectOnRadar.style.left = `137px`;
        }

    }else if (layer == 3) {

        if (x > -850 && x < -108) {
            objectOnRadar.style.top = `65px`;
            objectOnRadar.style.left = `20px`;
        } else if (x > -108 && x < 633) {
            objectOnRadar.style.top = `25px`;
            objectOnRadar.style.left = `60px`;
        } else if (x > 633 && x < 1375) {
            objectOnRadar.style.top = `25px`;
            objectOnRadar.style.left = `120px`;
        } else if (x > 1375 && x < (innerWidth + 750)) {
            objectOnRadar.style.top = `65px`;
            objectOnRadar.style.left = `163px`;
        }
    }
    
    radarElement.appendChild(objectOnRadar)
}

function renderScore(){
    scoreElement.innerText=''
    scoreElement.classList.add('score')
    scoreElement.innerText +=`Score: ${score}`
    body.appendChild(scoreElement)
    if(score== 200){
        alert('You win')
        score = 0
        renderScore()
    } else if (score == 0){
        alert('You lose')
        score = 100
        renderScore()
    }
}

renderScore()
drawElements()





// let midScopeElement = document.createElement('div')
// midScopeElement.classList.add('mid')
// midScopeElement.innerText = '+'
// scopeElement.appendChild(midScopeElement)
// let vScopeElement = document.createElement('div')
// vScopeElement.classList.add('v')
// vScopeElement.innerText = '--'
// scopeElement.appendChild(vScopeElement)
// let hScopeElement = document.createElement('div')
// hScopeElement.classList.add('h')
// hScopeElement.innerText = '--'
// scopeElement.appendChild(hScopeElement)

// explosion -------------------
// function renderExplosion(){
//     explosionElement.classList.add('explosion')
//     explosionElement.innerHTML = `
//         <div class="fire-bottom-sm"></div>
//         <div class="fire-bottom-md"></div>
//         <div class="fire-bottom-l"></div>
//     `
   

//     explosionElement.style.left = `${explosion.x}px`;
//     explosionElement.style.transform = `translateZ(${explosion.z}px))`;
//     container.appendChild(explosionElement)
// }
// explosion.x = ship.x
// explosion.z = ship.z


// explosionElement.style.left = `${explosion.x}px`;
// explosionElement.style.transform = `translateZ(${explosion.z}px))`;
// container.appendChild(explosionElement)