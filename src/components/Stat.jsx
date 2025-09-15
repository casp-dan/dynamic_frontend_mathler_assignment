export default function Stat({value, text}){
    if (value===undefined){
        value=0
    }
    return(
        <div>
            <h1 style={{
                textAlign:"center",
            }}>{value}</h1>
            <p style={{
                textAlign:"center",
            }}>{text}</p>
        </div>
    )
}