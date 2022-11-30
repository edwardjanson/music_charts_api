import React from 'react';
import Song from './Song';
import './ChartsList.css';

const ChartsList = ({charts}) => {

    const chartItems = charts.map((song, index) => {
        console.log(song)
        return <Song song={song} key={index} index={index}/>
    })

    return (
        <div>
        <ul className="charts">
        {chartItems}
        </ul>
    </div>
    )
}

export default ChartsList;