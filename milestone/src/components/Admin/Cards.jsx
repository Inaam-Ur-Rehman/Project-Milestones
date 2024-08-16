import React from "react";

function Cards(props) {
  return (
    <div>
      <div className="bg-white shadow-md p-4">
        <img
          src={props.image}
          alt="Team Member"
          className="w-full h-full object-cover"
        />
        <h3 className="text-lg font-bold text-gray-600">{props.name}</h3>
        <p className="text-lg text-gray-600">{props.position}</p>
      </div>
    </div>
  );
}

export default Cards;
