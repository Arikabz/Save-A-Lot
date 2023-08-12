import React from "react";
import Image from "next/image";
import Link from "next/link";
import TinyCouponCard from "./TinyCouponCard";

const FullBusinessCard = () => {
  return (
    <div className="w-[95vw] border-base-300 border flex flex-row shadow-md shadow-secondary mx-4 mt-4 drop-shadow-lg card card-side bg-base-100 ">
      <div className="avatar basis-1/8">
        <div className="relative h-32 w-32 rounded-xl my-auto ml-4">
          <Image
            src={
              "https://images.ctfassets.net/3vz37y2qhojh/5ovxftNE5jbkvWUqcnohYk/472f2dbf2ec1eb26b1e9a5b879dca535/Korean_Burgers.jpg?w=750&fit=fill&fm=webp"
            }
            alt="subscription"
            fill
          />
        </div>
      </div>
      <div className="card-body basis-1/8">
        <h2 className="card-title text-xl">McCarthys Irish Pub</h2>
        <div className="card-actions justify-start">
          <Link href="/editFriend" className="btn">
            Visit Site
          </Link>
        </div>
      </div>
      <div className="overflow-x-scroll container mr-2 basis-6/8 justify-start flex-row flex">
        <TinyCouponCard />
        <TinyCouponCard />
        <TinyCouponCard />
        <TinyCouponCard />
        <TinyCouponCard />
        <TinyCouponCard />
        <TinyCouponCard />
        <TinyCouponCard />
      </div>
    </div>
  );
};

export default FullBusinessCard;
