import React from 'react';

let InfoBox = ({ icon, bgColor, lines }) => {
  let renderedLines = lines.map((v, i, a) => (<p key={i}>{v}</p>));
  return (
    <div className="text-center col-md-6 col-lg-3">
      <p className={"position-relative d-inline-block mb-4 p-3 rounded mx-auto " + bgColor}>
        <i className={"fas " + icon + " fa-lg fa-fw"}></i>
      </p>
      {renderedLines}
    </div>
  );
};

export default InfoBox;