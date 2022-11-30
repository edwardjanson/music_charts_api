import './Song.css';

const Song = ({song, index}) => {
    return (
        <div className="song">
            <div className="chart-position">
                {index + 1}
            </div>
            <div>
                <img src={song['im:image'][0].label}/>
            </div>
            <div className="song-details">
                <span className="name">{song['im:name'].label}</span>
                <span className="artist">{song['im:artist'].label}</span>
            </div>
        </div>
    )
}

export default Song;