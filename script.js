console.log("Welcome to Tic Tac Toe")
let music = new Audio("music.wav")
let ting = new Audio("ting.mp3")
let gameoveraudio = new Audio("gameover.wav")
let turn = "X";
let gameover = false;
//function to change the turn
const changeturn = () => {
        return turn === "X" ? "0" : "X"
    }
    //function to check for a win
const checkwin = () => {
    let boxtexts = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],

    ]
    wins.forEach(e => {
        if ((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = boxtexts[e[0]].innerText + " WON"
            gameover = true
            document.querySelector('.imgbox').getElementsByTagName('.img')[0].style.width = "200px"
        } else {
            document.querySelector('.info').innerText = boxtexts[e[0]].innerText + "DRAW"

        }
    })
}

//Game Logic
music.play()
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
        let boxtext = element.querySelector('.boxtext');
        element.addEventListener('click', () => {
            if (boxtext.innerText === '') {
                boxtext.innerText = turn;
                turn = changeturn();
                ting.play();
                checkwin();
                if (!gameover) {
                    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;


                }

            }
        })
    })
    //reset
reset.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""

    });
    turn = "X";
    gameover = false;
    if (!gameover) {
        document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
        document.querySelector('.imgbox').getElementsByTagName('.img')[0].style.width = "0px"



    }
})