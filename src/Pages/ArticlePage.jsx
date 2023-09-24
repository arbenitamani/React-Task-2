import React from "react";
import "../App.css";
import TheItem from "./Article";



const items = [
  {
    id: "1",
    name: ".COM",  
    price: "$5.99/yr",
    description: "instead of $10.99/yr",   
  },
  {
    id: "1",
    name: ".COM",  
    price: "$5.99/yr",
    description: "instead of $10.99/yr",   
  },
  {
    id: "1",
    name: ".COM",  
    price: "$5.99/yr",
    description: "instead of $10.99/yr",   
  },
  {
    id: "1",
    name: ".COM",  
    price: "$5.99/yr",
    description: "instead of $10.99/yr",   
  },
  {
    id: "1",
    name: ".COM",  
    price: "$5.99/yr",
    description: "instead of $10.99/yr",   
  },
  {
    id: "1",
    name: ".COM",  
    price: "$5.99/yr",
    description: "instead of $10.99/yr",   
  },
  {
    id: "1",
    name: ".COM",  
    price: "$5.99/yr",
    description: "instead of $10.99/yr",   
  },
  {
    id: "1",
    name: ".COM",  
    price: "$5.99/yr",
    description: "instead of $10.99/yr",   
  }
 
];




const ArticlePage = () => {
  return (
    <div className="item-container">
      {items.map((item) => (
        <div key={item.id} className="item-card">
                         
            <p className="item-name">{item.name}</p>
            <p className="item-price">{item.price}</p>
              <p className="item-description">{item.description}</p>
            <button className="buy-now-button">Buy Now</button> 
          </div>
       
      ))}
    </div>
  );
};

export default ArticlePage;