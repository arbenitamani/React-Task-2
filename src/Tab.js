import React from 'react';
import './styles/Tab.css'; // Import your CSS file for the Tab component
import Toggle from './images/toggle'; // Import the Toggle component

function Tab({ tab, tabIndex, currTab, onTabSelected }) {
  function handleClick() {
    onTabSelected(tabIndex);
  }

  return (
    <div className="tab-heading">
      <div className={`title ${tabIndex === currTab ? 'active' : ''}`} onClick={handleClick}>
        {tab.title}
        <div className="toggle-icon">
        {tab.image}
      </div>
      </div>
     
    </div>
  );
}

export default Tab;
