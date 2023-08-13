import React from "react";
import Image from "next/image";
import Link from "next/link";

interface TinyCoupon {
  title: string;
  src: string;
}

const TinyCouponCard = ({ title, src }: TinyCoupon) => {
  return (
    <div className="card w-32 bg-base-100 shadow-xl image-full mx-5 my-2">
      <div className="avatar">
        <div className="relative rounded-2xl">
          <Image fill src={src} alt="Coupon" />
        </div>
      </div>
      <div className="card-body justify-center text-center items-center">
        <h2 className="text-sm card-title">{title}</h2>
        <div className="card-actions justify-center">
          <Link href={"/coupon"} className="btn btn-primary">
            See Coupon
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TinyCouponCard;
