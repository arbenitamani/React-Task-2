import React from "react";


const Article = (props) => {
  const { name, id, date, version, description } = props;

  return (
    <div className="article-card">
      <div className="artcle-image-container"></div>
      <div className="article-text-container">
        <p>{version}</p>
        <p>{date}</p>
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Article;
