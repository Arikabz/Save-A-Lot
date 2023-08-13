import React from "react";
import Image from "next/image";

interface Subscription {
  id: number;
  issuer: number;
  couponAmt: number;
  src: string;
}

const BriefSubscriptionCard = ({ issuer, couponAmt, src }: Subscription) => {
  return (
    <div className="bg-base-100 border-base-300 border shadow-md shadow-secondary rounded-3xl mt-4 mx-4 flex h-28 ">
      <div className="avatar">
        <div className="h-24 relative w-24 my-auto mx-4 rounded-xl">
          <Image fill alt="Business" src={src} />
        </div>
      </div>
      <div className="card-body py-4">
        <h2 className="card-title">{issuer}</h2>
        <div className=" card-actions justify-start">
          <button className="btn btn-sm btn-primary">{couponAmt} coupons</button>
        </div>
      </div>
    </div>
  );
};

export default BriefSubscriptionCard;
