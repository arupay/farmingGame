import React from 'react';

// import FieldTile from '../fieldTile/FieldTile';

import './FieldKey.css';

const FieldKey = () => {
  return (
    <div className="fieldKey">
      <div className="fieldKey__entry"><div className="fieldKey__block fieldKey__house"></div> House</div>
      <div className="fieldKey__entry"><div className="fieldKey__block"></div> Land</div>
      <div className="fieldKey__entry"><div className="fieldKey__block fieldKey__forest"></div> Forest</div>
      <div className="fieldKey__entry"><div className="fieldKey__block fieldKey__water"></div> Water</div>
    </div>
  )
}

export default FieldKey