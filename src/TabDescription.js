import React from 'react';
import './styles/Tab.css'; 

function TabDescription({ children, currTab }) {
  if (currTab === null) {
    return null; // Hide the description if no tab is selected
  }

  return <div className="description">{children}</div>;
}

export default TabDescription;
