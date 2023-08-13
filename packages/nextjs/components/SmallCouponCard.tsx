import React from "react";
import Image from "next/image";
import Link from "next/link";

interface SmCoupon {
  src: string;
  title: string;
}
const imageStyle = {
  borderRadius: "20%",
};
const SmallCouponCard = ({ src, title }: SmCoupon) => {
  return (
    <div className="mx-4 mt-4 drop-shadow-lg card card-side bg-base-100 shadow-xl">
      <figure className="">
        <Image src={src} alt="Burguer" style={imageStyle} className="pl-4" height={100} width={200} />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl">{title}</h2>
        <div className="card-actions justify-start">
          <Link href="/coupon" className="btn">
            See Coupon
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SmallCouponCard;
