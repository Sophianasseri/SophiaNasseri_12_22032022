/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
// eslint-disable-next-line react/prop-types
function CustomLabel({ viewBox, score = 0 }) {
  // eslint-disable-next-line react/prop-types
  const { cx, cy } = viewBox;
  return (
    <>
      <circle className="circle" cx="50%" cy="50%" r="78" fill="white" />
      <text x={cx - 15} y={cy - 5}>
        <tspan
          style={{
            fontWeight: 700,
            fontSize: '26',
          }}
        >
          {score}%
        </tspan>
      </text>
      <text x={cx - 20} y={cy + 15}>
        <tspan
          style={{
            fontSize: '16',
            fill: '#74798c',
          }}
        >
          de votre
        </tspan>
      </text>
      <text x={cx - 20} y={cy + 35}>
        <tspan
          style={{
            fontSize: '16',
            fill: '#74798c',
          }}
        >
          objectif
        </tspan>
      </text>
    </>
  );
}
export default CustomLabel;
