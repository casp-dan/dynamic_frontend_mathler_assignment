const COLORS=["#808080","#00c74cff","#fbff00ff"]


export function LetterBox({onTextChange, boxColor, read}){
    return (
        <input type="string" className="letterInput" onInput={onTextChange} disabled={read} color="white"
            style={
                {
                    width:"40px",
                    height:"40px",
                    textAlign:"center",
                    backgroundColor:COLORS[boxColor]
                }
            }
        >
        </input>
    );
}