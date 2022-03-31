import React from 'react';
import * as d3 from 'd3';
import styles from './dayScore.module.css';

function Score() {
  const height = 180;
  const width = 180;
  const arcWidth = 12;
  const innerRadius = width / 2 - arcWidth;
  const outerRadius = width / 2;
  const percent = 0.12;

  // progress circle
  const arc = d3
    .arc()
    .innerRadius(innerRadius)
    .outerRadius(outerRadius)
    .startAngle(0)
    .cornerRadius(5);

  // draw arc from value
  const progress = (value) =>
    // eslint-disable-next-line implicit-arrow-linebreak
    arc({
      endAngle: -2 * Math.PI * value,
    });

  return (
    <div className={styles.chart}>
      <p>Score</p>
      <svg className={styles.svg} height={height} width={width}>
        <g transform={`translate(${width / 2}, ${height / 2})`}>
          <path d={progress(1)} fill="none" />
        </g>
        <g transform={`translate(${width / 2}, ${height / 2})`}>
          <path d={progress(percent)} fill="red" />
          <circle className={styles.circle} cx="0" cy="0" r="78" fill="white" />
          <text textAnchor="middle">
            <tspan className={styles.score} x="0" dy="-10">
              {`${percent * 100}%`}
            </tspan>
            <tspan fill="#74798c" x="0" dy="1.5em">
              de votre
            </tspan>
            <tspan fill="#74798c" x="0" dy="1.5em">
              objectif
            </tspan>
          </text>
        </g>
      </svg>
    </div>
  );
}

export default Score;
