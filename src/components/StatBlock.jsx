import Stat from "./Stat"
import TurnsTable from "./TurnsTable"

export function StatBlock({user}) {
    let games_played;
    let win_streak;
    let best_streak;
    if (user===undefined){
        games_played=0
        win_streak=0
        best_streak=0
    }
    else{
        games_played=user.metadata.games_played
        win_streak=user.metadata.win_streak
        best_streak=user.metadata.best_streak
    }
    return (
        <div
        style={
                {display:"grid",
                    gridTemplateColumns: "1fr 1fr 1fr",
                }
            }>
            <Stat value={games_played} text={"Games Played"}/>
            <Stat value={win_streak} text={"Win Streak"}/>
            <Stat value={best_streak} text={"Best Streak"}/>
            <TurnsTable user={user}/>
        </div>
    );
}
