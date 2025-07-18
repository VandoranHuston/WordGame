import sololeveling from './images/jinwoo-cutout.png'
import demonslayer from './images/demonslayer.jpeg'
import pixelA from './images/pixelA.png'
import pixelI from './images/pixelI.png'
import pixelR from './images/pixelR.png'
import pixelE from './images/pixelE.png'
import pixelS from './images/pixelS.png'
import enterImage from './images/enter.png'
import tryAgainImage from './images/tryAgain.png'
import guessWordImage from './images/guessWord.png'
import correctImage from './images/correctImage.png'

import React, {useState} from 'react'

import buttonContainer from "./buttonContainer"
import VideoModal from './videoModal'

function AnagramGame(){
    const [enteredLetters, setEnteredLetters] = useState(['-', '-', '-', '-', '-']);
    const [index, setIndex] = useState(0);
    const answer = [pixelA, pixelR, pixelI, pixelS, pixelE];
    const [message, setMessage] = useState(guessWordImage);
    const [showVideo, setShowVideo] = useState(false);

    function letterClick (value) {
        var arrayCopy = [...enteredLetters]
        var currIndex = index
        arrayCopy[index] = value
        setEnteredLetters(arrayCopy)
        currIndex++
        setIndex(currIndex)
    }

    function enterClick () {
        if (!enteredLetters.every((value, index) => value === answer[index])) {
            setEnteredLetters(['-', '-', '-', '-', '-']);
            setIndex(0);
            setMessage(tryAgainImage);
            return;
        }
        setMessage(correctImage)
        setShowVideo(true)
        setEnteredLetters(['-', '-', '-', '-', '-']);
        setIndex(0);
        return;
    }
    
    return (
        <div className="complete-container">
        <div className="sololeveling-container">
            <img src={sololeveling} className="jinwoo"/>
        </div>
        <div className="game">
            {showVideo && (<VideoModal onClose={() => setShowVideo(false)}/>)}
            <div className="answer-message-container">
                <img className="answer-message" src={message}></img>
            </div>
            <div className="word-box">
                <buttonContainer>
                    <button className="letter-buttons-top">
                        <img src = {enteredLetters[0]} />
                    </button>
                    <button className="letter-buttons-top">
                        <img src = {enteredLetters[1]}/>
                    </button>
                    <button className="letter-buttons-top">
                        <img src = {enteredLetters[2]}/>
                    </button>
                    <button className="letter-buttons-top">
                        <img src = {enteredLetters[3]}/>
                    </button>
                    <button className="letter-buttons-top">
                        <img src = {enteredLetters[4]}/>
                    </button>
                </buttonContainer>
            </div>
            <div>
                <buttonContainer>
                    <button className="letter-buttons" onClick={() => letterClick({pixelS})}>
                        <img src={pixelS}></img>
                    </button>
                    <button className="letter-buttons" onClick={() => letterClick({pixelI})}>
                        <img src={pixelI}></img>
                    </button>
                    <button className="letter-buttons" onClick={() => letterClick({pixelA})}>
                        <img src={pixelA}></img>
                    </button>
                    <button className="letter-buttons" onClick={() => letterClick({pixelR})}>
                        <img src={pixelR}></img>
                    </button>
                    <button className="letter-buttons" onClick={() => letterClick({pixelE})}>
                        <img src={pixelE}></img>
                    </button>
                </buttonContainer>
            </div>
            <div>
                <button className="enter-button" onClick={enterClick}>
                    <img src={enterImage}></img>
                </button>
            </div>
        </div>
        <div className="demonslayer-container">
            <img src={demonslayer} className="tanjiro"/>
        </div>
        </div>
    )
}

export default AnagramGame;