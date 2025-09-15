import { useState } from 'react';
import { LetterBox } from './LetterBox';

export function Row({onContentChange, rowColor, canUse}) {
    const [rowInp, setRowInp] = useState(Array(6).fill(null));
    
    /**
     * Updates the combined rows input when an individual box recieves and input
     * @param {*} ind 
     * @param {*} val 
     */
    function handleType(ind,val){
        rowInp[ind]=val
        setRowInp(rowInp)
        onContentChange(rowInp)

    }

    let boxes=[]
    for (let i = 0; i < 6; i++) {
        boxes.push(<LetterBox onTextChange={(e) => handleType(i, e.target.value)} boxColor={rowColor[i]} read={canUse}/>)
    }

    return (
        <div className='rowCont' style={{all:"revert",marginLeft:"10px"}}>
            <div className="row">
                {boxes[0]}
                {boxes[1]}
                {boxes[2]}
                {boxes[3]}
                {boxes[4]}
                {boxes[5]}
            </div>
            <br/>
        </div>
    );
}