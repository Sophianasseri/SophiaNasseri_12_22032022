import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import styles from './averageSession.module.css';

function AverageSession() {
  const width = 258;
  const height = 150;
  const padding = 20;
  const sessions = [
    {
      day: 1,
      sessionLength: 30,
    },
    {
      day: 2,
      sessionLength: 23,
    },
    {
      day: 3,
      sessionLength: 45,
    },
    {
      day: 4,
      sessionLength: 50,
    },
    {
      day: 5,
      sessionLength: 0,
    },
    {
      day: 6,
      sessionLength: 0,
    },
    {
      day: 7,
      sessionLength: 60,
    },
  ];

  const svgRef = useRef();
  const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

  useEffect(() => {
    // x scale

    const xScale = d3
      .scalePoint()
      .domain(sessions.map((d) => d.day))
      .range([0, width]);
    // y sclae
    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(sessions, (d) => d.sessionLength)])
      .range([height - padding, 0 + padding]);

    // Line

    const line = d3
      .line()
      .x((d) => xScale(d.day))
      .y((d) => yScale(d.sessionLength))
      .curve(d3.curveBasis);

    d3.select(svgRef.current)
      .select('path')
      .attr('d', () => line(sessions))
      .attr('fill', 'none')
      .attr('stroke', 'white');

    // x axis
    const xAxis = d3.axisBottom(xScale);
    xAxis
      .tickFormat((d, i) => days[i])
      .tickSizeOuter(0)
      .tickSizeInner(0);

    d3.select('#xaxis').remove();
    d3.select(svgRef.current)
      .append('g')
      .attr('transform', `translate(0,${height - padding})`)
      .attr('id', 'xaxis')
      .call(xAxis)
      .call((g) => g.select('.domain').remove());
  }, [sessions]);

  return (
    <div className={styles.chart}>
      <p>Durée moyenne des sessions</p>
      <svg id="" ref={svgRef} viewBox="0 0 258 400">
        <path d="" fill="none" stroke="white" strokeWidth="2" />
      </svg>
    </div>
  );
}

export default AverageSession;
