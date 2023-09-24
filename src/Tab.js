import React, { useState } from 'react';
import './styles/Tab.css'; // Import your CSS file for the Tab component
import Toggle from './images/toggle'; // Import the Toggle component

function Tab({ tab, tabIndex, currTab, onTabSelected }) {
    const [isActive, setIsActive] = useState(false);
  
    function handleClick() {
      onTabSelected(tabIndex);
  
      // Toggle the isActive state to trigger the rotation
      setIsActive((prevState) => !prevState);
    }
  
    return (
      <div
        className={`tab-heading ${tabIndex === currTab ? 'active' : ''}`}
        onClick={handleClick}
      >
        <div className="title">
          {tab.title}
        </div>
        <div className={`toggle-icon ${isActive ? 'rotate' : ''}`}>
          {tab.image}
        </div>
      </div>
    );
  }
  
  export default Tab;