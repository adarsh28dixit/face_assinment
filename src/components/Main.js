import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";

export default function Main() {
  
  const [items, setItems] = useState([]);

  let page = 0;
  const fetchData = (setItems, items) => {
    setTimeout(() => {
      axios
      .get(
        "https://randomuser.me/api/?results=500"
      )
      .then((res) => {
        //setData(res.data.results)
        setItems([...items, ...res.data.results.slice(page, page+10)]);
        page = page + 10;
      });
    },1500)
    
  };

  useEffect(() => {
    fetchData(setItems, items)
  },[])

  
  
  return (
    <>
      <div className="main-div">
        <InfiniteScroll
          dataLength={items.length} //This is important field to render the next data
          next={() => {
            fetchData(setItems, items );
          }}
          hasMore={true}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          {items.map((i, k) => {
            return (
              <div className="card mb-3">
                <div className="row no-gutters">
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">
                        {i.name.title} {i.name.first} {i.name.last}{" "}
                      </h5>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <img
                      src={i.picture.medium}
                      alt="..."
                      style={{ borderRadius: "3rem" }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </InfiniteScroll>

       
      </div>
    </>
  );
}
