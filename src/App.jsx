import {
    DynamicContextProvider,
    DynamicWidget,
} from "@dynamic-labs/sdk-react-core";
import { SolanaWalletConnectors } from '@dynamic-labs/solana';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Board } from "./components/Board";
import { ModalPopup } from "./components/ModalPopup";

const OPTIONS=["+","-","*"]
const connectors= [SolanaWalletConnectors]

/**
 * Randomly generates equation player must guess
 * @returns six character long equation consisting of digits 0-9 and operators +, *, or -
 */
function makeExpression(){  
    let expr="";
    expr+=randInt(1,9)
    let lastOpt=3;
    let opt;
    for (let i = 0; i < 4; i++) {
        let tok;
        opt=randInt(0,4)
        if (lastOpt<3){
            lastOpt=3
            tok=randInt(1,9)
        }
        else if (opt>=3){
            lastOpt=3
            tok=randInt(0,9)
        }
        else{
            tok=OPTIONS[opt]
            lastOpt=opt
        }
        expr+=tok
    }
    expr+=randInt(0,9)
    return expr
}

/**
 * Generates a random integer between (and including) the min and max values
 * @param {*} min 
 * @param {*} max 
 * @returns 
 */
function randInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function App() {
    const [rows] = useState(Array(6).fill(Array(6).fill(0)));
    const [currentRow, setCurrentRow] = useState(0);
    const [expr] = useState(makeExpression())
    const [gameOver, setGameOver]=useState(false)
    const [isWon, setGameWon]=useState(false)

    /**
     * Updates the state of the game, including turn number, win/lose state, and game over state
     * @param {*} row 
     * @param {*} isWon 
     * @param {*} isOver 
     */
    function handlePlay(row,isWon,isOver) {
        rows[currentRow]=row
        setCurrentRow(currentRow+1)
        if (isOver){
            setGameOver(isOver)
            setGameWon(isWon)
        }
    }
    return (
        <DynamicContextProvider
        settings={{
            environmentId: "c76c8b6a-6a63-4a0f-868f-d0eeb52815a6",
            walletConnectors: connectors,
        }}
        >
        <DynamicWidget>
        </DynamicWidget>
        <div style={{
            display:"grid",
            gridTemplateColumns: ".01fr .01fr"
        }}>
        <ModalPopup/>
        {/* <ModalPopup2/> */}
        </div>
        {/* <UserProfileEdit turns={currentRow}/> */}
        <div className="game">
        <div className="game-board">
            <Board expr={expr} onSubmit={handlePlay} colors={rows} turns={currentRow} winner={isWon} gameOver={gameOver}/>
        </div>
        </div>
        </DynamicContextProvider>
        
    );
}