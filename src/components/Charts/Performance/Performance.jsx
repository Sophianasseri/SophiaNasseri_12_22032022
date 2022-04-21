import React from 'react';
import PropTypes from 'prop-types';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts';
import './performance.css';

function Performance({ data }) {
  console.log(data);
  const performanceData = data.data;
  const formatedLabel = (label) => {
    switch (label) {
      case 1:
        return 'Cardio';
      case 2:
        return 'Energie';
      case 3:
        return 'Endurance';
      case 4:
        return 'Force';
      case 5:
        return 'Vitesse';
      case 6:
        return 'Intensité';

      default:
        return label;
    }
  };

  return (
    <div className="radar-chart">
      <ResponsiveContainer className="test" width="100%" height="100%">
        <RadarChart
          outerRadius="70%"
          data={performanceData}
          startAngle="30"
          endAngle="-330"
        >
          <PolarGrid radialLines={false} stroke="white" />
          <PolarRadiusAxis tickCount={6} tick={false} axisLine={false} />
          <PolarAngleAxis
            dataKey="kind"
            tick={{ fill: 'white', fontSize: '12px' }}
            tickFormatter={formatedLabel}
          />
          <Radar dataKey="value" fill="#ff0101" fillOpacity={0.7} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Performance;

Performance.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.number,
      sessionLength: PropTypes.number,
    }),
  ),
};

Performance.defaultProps = {
  data: 'average-session',
};
