import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Card {
  id: number;
  title: string;
  issuer: string;
  hash: string;
  src: string;
}

const CouponCard = ({ issuer, title, hash, src }: Card) => {
  return (
    <div className="bg-base-100 border-base-300 h-64 border shadow-md shadow-secondary rounded-3xl mx-4 mt-4 drop-shadow-lg card card-side">
      <div className="avatar">
        <div className="relative h-60 my-auto ml-2 rounded-xl w-60 my-auto">
          <Image src={src} alt="img" fill />
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title text-2xl">{title}</h2>
        <h2 className="card-title">{issuer}</h2>
        <div className="card-actions justify-end">
          <Link href="/coupon" className="btn">
            See Coupon
          </Link>
          <code className="text-base btn-outline btn-sm btn">{hash}</code>
        </div>
      </div>
    </div>
  );
};

export default CouponCard;
