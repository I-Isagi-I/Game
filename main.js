let     input = document.querySelector('.input'),
        btn   = document.querySelector('.btn'),
        timeOut = document.querySelector('.time'),
        gameZone = document.querySelector('.game__block'),
        score = 0,
        gameTime = 0,
        interval = 0;
        
btn.addEventListener('click', () => {
    if(input.value > 4) {
        gameTime = input.value
        input.value = ''
        gameZone.innerHTML = ''
        score = 0
        clearInterval(interval)
        startGame()
    }else {
        alert('Минимум нужно 5 секунд для запуска игры')
    }
})

gameZone.addEventListener('click', (event) => {
    if(event.target.classList.contains('ball')) {
        score++
        event.target.remove()
        createBall()
    }
})



function startGame() {
    timeOut.innerHTML = gameTime
    interval = setInterval(() => decreaseTime(), 1000)
    createBall()
}

function decreaseTime() {
    if(gameTime == 1) {
        timeOut.innerHTML = 0
        endGame()
    }else {
        timeOut.innerHTML = --gameTime
    }
}

function endGame() {
    gameZone.innerHTML = `<h2 class="result">Вы набрали ${score} баллов</h2>`
}

function createBall() {
    let ball = document.createElement('div')
    ball.classList.add('ball')
    let size = random(40, 120)
    
    ball.style.width = size + 'px'
    ball.style.height = size + 'px'
    ball.style.background = 'red'
    
    let coor = gameZone.getBoundingClientRect()
    
    let leftValue = random(0,coor.width - size)
    let topValue = random(0, coor.height - size)
    
    ball.style.top = topValue + 'px'
    ball.style.left = leftValue + 'px'
    ball.style.background = randomColor()
    ball.style.clipPath = randomFigure()
    
    gameZone.append(ball)
}


function random(min,max) {
    return Math.floor(Math.random() * (max + 1 - min) + min)
}

function randomColor() {
    let colors = ['cyan','red','blue','green','white']
    return colors[Math.floor(Math.random() * colors.length)]
}

function randomFigure() {
    let figure = ['polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)','inset(0 0 0 0)','polygon(50% 0%, 0% 100%, 100% 100%)','circle(50% at 50% 50%)']
    return figure[Math.floor(Math.random() * figure.length)]
}