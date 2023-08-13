import React from "react";

interface Points {
  points: number;
}

const TinyPointsCard = ({ points }: Points) => {
  return (
    <div className="card w-40 bg-primary shadow-xl mx-2 my-2">
      <div className="card-body justify-center items-center text-center">
        <h2 className="card-title mb-0">Points</h2>
        <p className="my-0">{points}</p>
        <div className="card-actions justify-center"></div>
      </div>
    </div>
  );
};

export default TinyPointsCard;
