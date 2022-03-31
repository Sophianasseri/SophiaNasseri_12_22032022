import React, { useRef } from 'react';
import * as d3 from 'd3';
import styles from './performance.module.css';

function Performance() {
  const svgRef = useRef();

  const numberOfSides = 6;
  const numberOfLevels = 5;
  const size = Math.min(window.innerWidth, window.innerHeight, 400);
  const offset = Math.PI;
  const polyAngle = (Math.PI * 2) / numberOfSides;
  const r = 0.8 * size;
  const r0 = r / 2;
  const center = {
    x: size / 2,
    y: size / 2,
  };

  d3.select(svgRef.current).attr('width', size).attr('height', size);
  const g = d3.select(svgRef.current).append('g');

  const generatePoint = ({ length, angle }) => {
    const point = {
      x: center.x + length * Math.sin(offset - angle),
      y: center.y + length * Math.cos(offset - angle),
    };
    return point;
  };

  let points = [];
  const length = 100;
  for (let vertex = 0; vertex < numberOfSides; vertex += 1) {
    const theta = vertex * polyAngle;
    points.push(generatePoint({ length, angle: theta }));
  }
  const drawPath = (pts, parent) => {
    const lineGenerator = d3
      .line()
      .x((d) => d.x)
      .y((d) => d.y);

    parent.append('path').attr('d', lineGenerator(pts));
  };

  points = [...points, points[0]];
  drawPath(points, g);

  const generateAndDrawLevels = (levelsCount, sideCount) => {
    for (let level = 1; level <= levelsCount; level += 1) {
      const hyp = (level / levelsCount) * r0;

      const levelPoints = [];
      for (let vertex = 0; vertex < sideCount; vertex += 1) {
        const theta = vertex * polyAngle;

        levelPoints.push(generatePoint({ length: hyp, angle: theta }));
      }
      const group = g.append('g').attr('class', 'levels');
      drawPath([...levelPoints, levelPoints[0]], group);
    }
  };

  generateAndDrawLevels(numberOfLevels, numberOfSides);

  return (
    <div className={styles.chart}>
      <svg id="" ref={svgRef}>
        <path d="" fill="white" stroke="black" strokeWidth="2" />
      </svg>
    </div>
  );
}
export default Performance;
