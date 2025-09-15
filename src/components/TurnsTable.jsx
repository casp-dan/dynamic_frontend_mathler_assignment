import TurnStat from "./TurnStat"

export default function TurnsTable({user}){
    let turnsList;
    if (user===undefined){
        turnsList=[0,0,0,0,0,0]
    }
    else{
        turnsList=user.metadata.turns_to_win
    }
    if (turnsList===undefined){
        turnsList=[0,0,0,0,0,0]
    }
    let stats=[]
    stats.push(<TurnStat value={turnsList[0]} text={`1 turn:`}/>)
    for (let i = 1; i < 5; i++) {
        stats.push(<TurnStat value={turnsList[i]} text={`${i+1} turns:`}/>)
    }
    return(
        <div style={{width:"160px"}}>
            {stats[0]}
            {stats[1]}
            {stats[2]}
            {stats[3]}
            {stats[4]}
            {stats[5]}
        </div>
    )
}