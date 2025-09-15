export default function TurnStat({value, text}){
    return(
            <div style={
                {display:"grid",
                    gridTemplateColumns: "2fr 1fr",}}
            >
                <h4>{text}</h4>
                <h4>{value}</h4>
            </div>

    )
}
