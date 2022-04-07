import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import './performance.css';

function Performance() {
  const svgRef = useRef();
  const performance = [
    {
      userId: 12,
      kind: {
        1: 'cardio',
        2: 'energy',
        3: 'endurance',
        4: 'strength',
        5: 'speed',
        6: 'intensity',
      },
      data: [
        {
          value: 80,
          kind: 1,
        },
        {
          value: 120,
          kind: 2,
        },
        {
          value: 140,
          kind: 3,
        },
        {
          value: 50,
          kind: 4,
        },
        {
          value: 200,
          kind: 5,
        },
        {
          value: 90,
          kind: 6,
        },
      ],
    },
  ];

  useEffect(() => {
    const numberOfSides = 6;
    const numberOfLevels = 5;
    const size = Math.min(window.innerWidth, window.innerHeight, 258);
    const offset = Math.PI;
    const polyAngle = (Math.PI * -2) / numberOfSides;
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
    // draw polygon levels
    const generateAndDrawLevels = (levelsCount, sideCount) => {
      for (let level = 1; level <= levelsCount; level += 1) {
        const hyp = (level / levelsCount) * r0;

        const levelPoints = [];
        for (let vertex = 0; vertex < sideCount; vertex += 1) {
          const theta = vertex * polyAngle;

          levelPoints.push(generatePoint({ length: hyp, angle: theta }));
        }
        const group = g.append('g').attr('class', 'radar-levels');
        drawPath([...levelPoints, levelPoints[0]], group);
      }
    };

    generateAndDrawLevels(numberOfLevels, numberOfSides);
    // Draw data shape
    const performanceData = performance.map((perf) => perf.data);

    const scale = d3.scaleLinear().domain([0, 300]).range([0, r0]);
    const drawData = (dataset, n) => {
      const dataPoints = [];
      dataset.forEach((data) => {
        data.forEach((d, i) => {
          const len = scale(d.value);
          const theta = i * ((-2 * Math.PI) / n);
          dataPoints.push({
            ...generatePoint({ length: len, angle: theta }),
            value: d.value,
          });
        });
      });

      const group = g.append('g').attr('class', 'radar-shape');

      drawPath([...dataPoints, dataPoints[0]], group);
    };

    drawData(performanceData, numberOfSides);

    // Draw labels

    const drawText = (text, point, textGroup) => {
      textGroup
        .append('text')
        .attr('x', point.x)
        .attr('y', point.y)
        .html(text)
        .style('text-anchor', 'middle')
        .attr('fill', 'white')
        .style('font-size', '12px');
    };

    const performanceKind = performance.map((perf) => perf.kind);

    const drawLabels = (dataset, sideCount) => {
      const groupL = g.append('g');
      for (let vertex = 0; vertex < sideCount; vertex += 1) {
        dataset.forEach((data) => {
          const angle = vertex * polyAngle;
          const point = generatePoint({ length: 0.9 * (size / 2), angle });
          const label = data[vertex];
          drawText(label, point, groupL);
        });
      }
    };
    drawLabels(performanceKind, numberOfSides + 1);
  }, [performance]);

  return (
    <div className="radar-chart">
      <svg id="" ref={svgRef} />
    </div>
  );
}
export default Performance;
