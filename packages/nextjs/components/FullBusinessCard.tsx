import React from "react";
import Image from "next/image";
import Link from "next/link";
import TinyCouponCard from "./TinyCouponCard";
import TinyPointsCard from "./TinyPointsCard";

interface Coupon {
  id: number;
  title: string;
  issuer: string;
  hash: string;
  src: string;
  issuerSrc: string;
  points: number;
}

type CouponArr = Array<Coupon>;

const FullBusinessCard = ({ arr }: { arr: CouponArr }) => {
  const points: number = arr.reduce((acc, current) => acc + current.points, 0);
  return (
    <div className="w-[95vw] border-base-300 border flex flex-row shadow-md shadow-secondary mx-4 mt-4 drop-shadow-lg card card-side bg-base-100 ">
      <div className="avatar basis-1/8">
        <div className="relative h-32 w-32 rounded-xl my-auto ml-4">
          <Image src={arr[0].issuerSrc} alt="subscription" fill />
        </div>
      </div>
      <div className="card-body basis-1/8">
        <h2 className="card-title text-xl">{arr[0].issuer}</h2>
        <div className="card-actions justify-start">
          <Link href="/editFriend" className="btn">
            Visit Site
          </Link>
        </div>
      </div>
      <div className="my-auto justify-start basis-1/8">
        <TinyPointsCard points={points} />
      </div>
      <div className="overflow-x-scroll container mr-2 basis-5/8 justify-start flex-row flex">
        {arr.map((coupon: Coupon, i: number) => (
          <TinyCouponCard key={i} title={coupon.title} src={coupon.src} />
        ))}
      </div>
    </div>
  );
};

export default FullBusinessCard;
