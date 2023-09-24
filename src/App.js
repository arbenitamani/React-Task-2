import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

import ArticlePage from "./Pages/ArticlePage";
import Navbar from "./Pages/Navbar";
import TabDescription from './TabDescription';
import Tab from './Tab';
import Toggle from './images/toggle'

function App() {
  const [tabsData] = useState([
    { title: 'Why park a domain name in Parkname',
      image: <Toggle/>,
     description: 'Parkname is the leading industry standard for domain name parking and monetization services. We offer a wide variety of services to help you achieve success.' },
   
  ]);

  const [currTab, setCurrTab] = useState(null);

  function onTabSelected(tabIndex) {
    setCurrTab(tabIndex);
  }

  return (
    <Router> 
      <div className="App">
        <Navbar />
        <ArticlePage />
        <div className="tabs">
          <div className="tab-headings">
            {tabsData.map((tab, index) => (
              <Tab
                tab={tab}
                tabIndex={index}
                currTab={currTab}
                onTabSelected={onTabSelected}
                key={tab.title}
              />
            ))}
          </div>
          {currTab !== null && (
            <TabDescription>
              <div>{tabsData[currTab].description}</div>
            </TabDescription>
          )}
        </div>
      </div>
    </Router>
  );
}

export default App;
