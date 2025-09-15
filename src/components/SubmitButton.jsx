export function SubmitButton({onButtonClick, text}) {
    return (
        <button onClick={onButtonClick} style={{width:"50px"}}>
            {text}
        </button>
    );
}