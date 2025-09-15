import {
    useDynamicContext,
    useUserUpdateRequest,
} from "@dynamic-labs/sdk-react-core";
import { Parser } from 'expr-eval';
import { SubmitButton } from "./SubmitButton";


const parser = new Parser();
const REGEX = /[^0-9+*-]/; 

/**
 * Checks the user guess against the solution for correctness or correleating characters
 * @param {*} guess 
 * @param {*} expr 
 * @returns list indicating whether each of the 6 boxes has a correct guess (1), incorrect guess (0), or correct guess in the wrong spot (2)
 */
function checkGuess(guess, expr) {
    let res=Array(6).fill(null)
    if (guess===expr){
        return;
    }
    for (let i = 0; i < 6; i++) {
        if (guess[i]===expr[i]){
            res[i]=1
        }
        else if (expr.includes(guess[i])){
            res[i]=2
        }
        else{
            res[i]=0
        }
    }
    return res
}

export function UserProfileEdit({turns, whenClick, toPlay, expr, isWon, answ}) {
    
    /**
     * Handles the logic for when the enter button is pressed and checks the users guess
     */
    function handleSubmit(){
        let guess=whenClick()
        let guessAnsw;
        let isOver=false;
        try{
            guessAnsw=parser.evaluate(guess);
        }
        catch{
        }
        if (REGEX.test(guess)){
            alert('Can not have invalid characters in answer.')
        }
        else if (guess.length!==6){
            alert('Answer must be 6 characters long.')
        }
        else if (guessAnsw!==answ){
            alert(`Answer doesnt equal ${answ}`)
        }
        else{
            let res=checkGuess(guess,expr)
            if (res===undefined){
                res=[1,1,1,1,1,1]
                isWon=true
                isOver=true

            }
            if (isWon){
                handleUpdate(isWon)
            }
            else{
                if (turns===5){
                    handleUpdate(isWon)
                    isOver=true
                }
            }
            toPlay(res,isWon,isOver)
        }
    }

    const { user } = useDynamicContext();
    const { updateUser } = useUserUpdateRequest();

    /**
     * Updates the users metadata at the end of a game
     * @param {*} turn_list 
     * @param {*} numPlayed 
     * @param {*} win_streak 
     * @param {*} best_streak 
     */
    const handleMetadataUpdate = async (turn_list, numPlayed, win_streak, best_streak) => {
        const result = await updateUser({
            metadata: {
                turns_to_win: turn_list,
                win_streak:win_streak,
                best_streak:best_streak,
                games_played: numPlayed,
            }
        });
        if (result.isEmailVerificationRequired) {
        }
    };

    /**
     * Retrieves user metadata for Mathler and sends updated values to the user.
     * @param {*} isWon 
     */
    const handleUpdate = (isWon) => {
        if (user!==undefined){
            let turn_list=user.metadata.turns_to_win
            if (turn_list===undefined){
                turn_list=[0,0,0,0,0,0]
            }
            let numPlayed=user.metadata.games_played
            if (numPlayed===undefined){
                numPlayed=0
            }
            let win_streak=user.metadata.win_streak
            if (win_streak===undefined){
                win_streak=0
            }
            let best_streak=user.metadata.best_streak
            if (best_streak===undefined){
                best_streak=0
            }
            if (isWon){
                win_streak++
                if (win_streak>best_streak){
                    best_streak++
                }
            }
            else{
                win_streak=0
            }
            numPlayed++
            turn_list[turns]++
            handleMetadataUpdate(turn_list,numPlayed,win_streak,best_streak)
        }
    };

    return (
        <SubmitButton onButtonClick={() => handleSubmit()} text="Enter"/>
    );
}