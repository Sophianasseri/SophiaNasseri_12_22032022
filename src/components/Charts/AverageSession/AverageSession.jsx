import React from 'react';
import PropTypes from 'prop-types';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import styles from './averageSession.module.css';

function CustomTooltip({ active, payload }) {
  if (active && payload && payload.length) {
    return (
      <div className={styles.tooltip}>
        <p>{`${payload[0].value}min`}</p>
      </div>
    );
  }

  return null;
}

function AverageSession({ data }) {
  const formatedDays = (days) => {
    switch (days) {
      case 1:
        return 'L';
      case 2:
        return 'M';
      case 3:
        return 'M';
      case 4:
        return 'J';
      case 5:
        return 'V';
      case 6:
        return 'S';
      case 7:
        return 'D';

      default:
        return days;
    }
  };
  return (
    <div className={styles.chart}>
      <p className={styles.title}>Durée moyenne des sessions</p>
      <ResponsiveContainer width="100%" height="80%">
        <LineChart data={data}>
          <XAxis
            dataKey="day"
            tickLine={false}
            axisLine={false}
            tickFormatter={formatedDays}
            tick={{ fill: 'white' }}
            tickMargin={10}
            padding={{ left: 10, right: 10 }}
          />
          <YAxis
            type="number"
            domain={['dataMin -5', 'dataMax +5']}
            dataKey="sessionLength"
            hide
          />
          <Tooltip
            content={<CustomTooltip />}
            cursor={{ stroke: 'rgba(0, 0, 0, 0.1)', strokeWidth: 60 }}
          />
          <Line
            type="natural"
            dataKey="sessionLength"
            stroke="white"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default AverageSession;

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.arrayOf(Object),
};
CustomTooltip.defaultProps = {
  active: false,
  payload: [],
};
AverageSession.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.number,
      sessionLength: PropTypes.number,
    }),
  ),
};

AverageSession.defaultProps = {
  data: 'average-session',
};
