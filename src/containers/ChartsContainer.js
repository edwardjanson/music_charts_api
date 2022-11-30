import React, { useState, useEffect } from 'react';
import ChartsList from '../components/ChartsList';
import ChartSelect from '../components/ChartSelect';
import './ChartsContainer.css';

const ChartsContainer = () => {
    const [charts, setCharts] = useState([]);
    const [chartTypes, setChartTypes] = useState([
        {name: "All", url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/json"},
        {name: "Rock", url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=21/json"},
        {name: "Dance", url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=17/json"},
        {name: "Country", url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=6/json"}
    ]);
    const [selectedChartType, changeChartType] = useState("https://itunes.apple.com/gb/rss/topsongs/limit=20/json");

    useEffect(() => {
      getCharts();
    }, [selectedChartType])

    const getCharts = function() {
        fetch(selectedChartType)
        .then(res => res.json())
        .then(charts => setCharts(charts.feed.entry))
    }

    const onChartTypeChange = function(chart) {
        changeChartType(chart)
    }

    return (
        <div className="main-container">
            <ChartSelect onChartTypeChange={onChartTypeChange} chartTypes={chartTypes}/>
            <ChartsList charts={charts}/>
        </div>
    )
}

export default ChartsContainer;
