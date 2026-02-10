

import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import mostPopularData from "../data/mostPopularData";
import { SearchContext } from "../App";

const MostPopular = ({searchText}) => {
   const search2 = useContext(SearchContext);
  const navigate = useNavigate();


  const result = mostPopularData.filter(item =>
  item.title.toLowerCase().includes(search2.toLowerCase())
);


  return (
    <div className="mostPopular-container">
      <h2 className="mostPopular-title">Most Popular</h2>

      <div className="mostPopular-grid">
        {result.map((item) => (
          <div
            key={item.id}
            className="mostPopular-card"
            onClick={() => navigate(`/popular/${item.id}`)}
            style={{ cursor: "pointer" }}
          >
            <div className="mostPopular-img-wrapper">
              <img src={item.img} alt={item.title} />
              {/* <span className="mostPopular-badge">
                {item.discount}% OFF
              </span> */}
            </div>

            <div className="mostPopular-info">
              <h3>{item.title}</h3>
              <p>{item.items} items</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MostPopular;

