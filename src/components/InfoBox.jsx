import React from 'react';

let InfoBox = ({icon, bgColor, line1, line2, line3}) => {
  return (
    <div className="text-center col-md-6 col-lg-3">
      <p className={"position-relative mb-4 p-3 rounded mx-auto " + bgColor}
        style={{width: "min-content"}}>
        <i className={"fas " + icon + " fa-lg fa-fw"}></i>
      </p>
      <p>{line1}</p>
      <p>{line2}</p>
      <p>{line3}</p>
    </div>
  );
};

export default InfoBox;