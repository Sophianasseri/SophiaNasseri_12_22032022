import React from 'react';
import PropTypes from 'prop-types';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import styles from './activity.module.css';

/**
 * Component for displaying a custom tooltip on chart
 * @component
 *
 */
function CustomTooltip({ active, payload }) {
  if (active && payload && payload.length) {
    return (
      <div className={styles.tooltip}>
        <p>{`${payload[0].value}kg`}</p>
        <p>{`${payload[1].value}kCal`}</p>
      </div>
    );
  }

  return null;
}
/**
 * Component for rendering user's daily activity in a bar chart
 * @component
 * @example
 * const data = activityData.sessions
 * return (
 *  <Activity data={data} />
 * )
 */
function Activity({ data }) {
  const days = data.map((elt) => elt.day.split('-')[2]);
  return (
    <div className={styles.chart}>
      <p className={styles.title}>Activité quotidienne</p>
      <ResponsiveContainer width="99%" height="100%">
        <BarChart data={data} margin={{ bottom: 10 }}>
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="#DEDEDE"
          />
          <XAxis
            dataKey="day"
            tickLine={false}
            axisLine={false}
            tickFormatter={(d, i) => days[i]}
            tick={{ fill: '#9B9EAC', fontSize: '14px' }}
            margin={{ bottom: 10 }}
          />
          <YAxis
            yAxisId="kilogram"
            dataKey="kilogram"
            orientation="right"
            domain={['dataMin -1', 'dataMax +1']}
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#9B9EAC', fontSize: '14px' }}
            tickCount={4}
          />
          <YAxis
            hide
            yAxisId="calories"
            dataKey="calories"
            domain={['dataMin -10', 'dataMax +10']}
          />
          <Tooltip
            content={<CustomTooltip />}
            cursor={{ fill: '#BBBBBB', opacity: 0.5 }}
          />
          <Legend
            wrapperStyle={{
              top: -50,
              marginRight: 15,
            }}
            verticalAlign="top"
            align="right"
            iconType="circle"
            iconSize={8}
          />
          <Bar
            name="Poids(kg)"
            barSize={9}
            yAxisId="kilogram"
            dataKey="kilogram"
            fill="#282d30"
            radius={[7, 7, 0, 0]}
          />
          <Bar
            name="Calories brûlées (kCal)"
            barSize={9}
            yAxisId="calories"
            dataKey="calories"
            fill="#ff0101"
            radius={[7, 7, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Activity;

CustomTooltip.propTypes = {
  /**
   * If true the tooltip whih be visible
   */
  active: PropTypes.bool,
  /**
   * User's activity data to display in tooltip
   */
  payload: PropTypes.arrayOf(Object),
};
CustomTooltip.defaultProps = {
  active: false,
  payload: [],
};
Activity.propTypes = {
  /**
   * User's daily activity satistics for a session
   */
  data: PropTypes.arrayOf(
    PropTypes.shape({
      /**
       * Session's date
       */
      day: PropTypes.string,
      /**
       * User's weight
       */
      kilogram: PropTypes.number,
      /**
       * User's calories loss
       */
      calories: PropTypes.number,
    }),
  ),
};

Activity.defaultProps = {
  data: [{ day: '2022-01-01', kilogram: 50, calories: 300 }],
};
