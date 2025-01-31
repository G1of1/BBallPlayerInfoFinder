import {useState, useEffect} from 'react'
import '../css/Home.css'
import {searchPlayer} from '../services/api'
import PlayerCard from '../components/PlayerCard';
function Home()
{
    const [searchQuery, setSearchQuery] = useState("");
    const [players, setPlayers] = useState([]);
    const [loading, setLoading] = useState(null);

    
    async function handleSearch(e)
    {
        e.preventDefault();

        if(!searchQuery.trim())
            return
        if(loading)
            return
        setLoading(true);
        try
        {
            const results = await searchPlayer(searchQuery.replace(/\s+/g, '').toLowerCase());
            setPlayers(results);
            console.log(players);
           
        }
        catch(error)
        {
            console.log(error);
        }
        finally
        {
            setLoading(false);
        }
    

    };
    return(
    <div className="home">
    <form onSubmit={handleSearch}>
        <input type="text" placeholder="Search player..." value={searchQuery} onChange={(e)=>{setSearchQuery(e.target.value)}} className="search-input"></input>
        <button type="submit" className="search-button">Search</button>
    </form>
    {loading ? <div className="loading">Loading...</div> : <div className="players-grid">
            {players.map((player) => (<PlayerCard player={player} key={player.id} className="player-card"/>))}
            </div>
    }

    </div>
    );
}

export default Home