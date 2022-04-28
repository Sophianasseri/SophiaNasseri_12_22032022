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

/**
 * Component for rendring user's daily score in a pie chart
 * @component
 * @example
 * const data = performanceData
 * return (
 *  <Performance data={data} />
 * )
 */
function Performance({ data }) {
  const performanceData = data.data;

  const formatKind = {
    cardio: 'Cardio',
    energy: 'Energie',
    endurance: 'Endurance',
    strength: 'Force',
    speed: 'Vitesse',
    intensity: 'Intensité',
  };

  const sortLabels = Object.values(formatKind);

  // Format data to match app design
  const formattedData = [];
  performanceData.map((d, i) => {
    performanceData[i].kind = sortLabels[i];
    return formattedData.push(performanceData[i]);
  });
  formattedData.reverse();

  return (
    <div className="radar-chart">
      <ResponsiveContainer className="test" width="99%" height="100%">
        <RadarChart outerRadius="70%" data={formattedData}>
          <PolarGrid radialLines={false} stroke="white" />
          <PolarRadiusAxis tickCount={6} tick={false} axisLine={false} />
          <PolarAngleAxis
            dataKey="kind"
            tick={{ fill: 'white', fontSize: '12px' }}
          />
          <Radar dataKey="value" fill="#ff0101" fillOpacity={0.7} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Performance;

Performance.propTypes = {
  data: PropTypes.shape({
    /**
     * Labels' name
     */
    kind: PropTypes.objectOf(PropTypes.string),
    /**
     * User's performance*
     */
    data: PropTypes.arrayOf(Object),
  }),
};

Performance.defaultProps = {
  data: 'average-session',
};
