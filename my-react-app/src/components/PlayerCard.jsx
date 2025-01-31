import '../css/PlayerCard.css';
function PlayerCard({player})
{
    return(
        <div className="card">
            <img src={`https://media.api-sports.io/football/players/${player.id}.png`} className="player-image" alt={player.name}/>
            <div className="player-info">
                <h3>{player.name}</h3>
                <ul>
                    <li>Player Number: {player.number}</li>
                    <li>Position: {player.position}</li>
                    <li>Country: {player.country}</li>
                </ul>
            </div>
        </div>
    )
}

export default PlayerCard