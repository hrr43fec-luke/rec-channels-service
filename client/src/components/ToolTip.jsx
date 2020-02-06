import React from 'react';

const ToolTip = ({ tooltip }) => (
  <div className="tooltipbox">
    <div className="tooltiptext">
      {tooltip}
    </div>
  </div>
);

export default ToolTip;
