import { Parser } from 'expr-eval';
import { Row } from './Row';
import { UserProfileEdit } from './UserProfileEdit';

const parser = new Parser();


export function Board({onSubmit, expr, colors, turns, winner, gameOver}){
    let curIn=[]
    let isWon=false
    let answText=null;
    let answ=parser.evaluate(expr);

    /**
     * Updates the input of the currently active row
     * @param rowInp 
     */
    function handleIns(rowInp){
        curIn=rowInp
    }

    /**
     * @returns the list of 6 inputs from the active row as a string
     */
    function getIn(){
        let guess=""
        curIn.forEach(function(item){
            guess+=item
        })
        return guess
    }

    if (gameOver){
        if (winner){
            answText=<h4>YOU WON! THE ANSWER WAS {expr}</h4>
        }
        else{
            answText=<h4>Sorry. The answer was {expr}</h4>
        }
    }

    

    let rows=[]
    for (let i = 0; i < 6; i++) {
        let read=true;
        if (i===turns){
            read=false
        }
        rows.push(<Row rowColor={colors[i]} onContentChange={handleIns} canUse={read}/>)
    }
    return(
        <div style={{display:"grid", marginLeft:"10px"}}>
            <div className='board' style={{alignContent:"center"}}>
                <h1>Find the hidden calculation that equals {answ}</h1>
                {answText}
                {rows[0]}
                {rows[1]}
                {rows[2]}
                {rows[3]}
                {rows[4]}
                {rows[5]}
            </div>
            <UserProfileEdit turns={turns} whenClick={getIn} toPlay={onSubmit} expr={expr} gameOver={gameOver} isWon={isWon} answ={answ}/>
        </div>
    )
}