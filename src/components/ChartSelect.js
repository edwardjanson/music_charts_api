import React from 'react';
import './ChartSelect.css';

const ChartSelect = ({onChartTypeChange, chartTypes}) => {

    const chartItems = chartTypes.map((chart, index) => {
        return <option value={index} key={index}>{chart.name}</option>
    });

    const handleSelect = function(event) {
        onChartTypeChange(chartTypes[event.target.value]['url'])
    }

    return (
        <select className="select" defaultValue="" onChange={handleSelect}>
            {chartItems}
        </select>
    )
}

export default ChartSelect;