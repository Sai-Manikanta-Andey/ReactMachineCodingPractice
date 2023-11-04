import React, { useState } from "react";


//lifting the state


const EachAccordian = ({
  eachCardData,
  activeIndex,
  setActiveIndex,
  index,
}) => {

  const handleClick = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="card">
      <div className="title-dropdown" onClick={() => handleClick(index)}>
        <div className="title"> {eachCardData.title} </div>
        <div className="dropdown">{activeIndex===index ? "-" : "+"}</div>
      </div>
       
      {index === activeIndex && (
        <div className="data"> {eachCardData.data} </div>
      )}
    </div>
  );
};

const Accordian = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      {data.map((EachData, index) => (
        <EachAccordian
          eachCardData={EachData}
          key={index}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          index={index}
        />
      ))}
    </div>
  );
};

export default Accordian;
