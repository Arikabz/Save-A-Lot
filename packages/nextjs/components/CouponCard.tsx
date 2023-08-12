import React from "react";
import Image from "next/image";
import Link from "next/link";

const CouponCard = () => {
  return (
    <div className="bg-base-100 border-base-300 h-64 border shadow-md shadow-secondary rounded-3xl mx-4 mt-4 drop-shadow-lg card card-side">
      <div className="avatar ">
        <div className="h-60 ml-2 rounded-xl w-44 my-auto relative">
          <Image
            src="https://images.ctfassets.net/3vz37y2qhojh/5ovxftNE5jbkvWUqcnohYk/472f2dbf2ec1eb26b1e9a5b879dca535/Korean_Burgers.jpg?w=750&fit=fill&fm=webp"
            alt="Burguer"
            fill
          />
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title text-2xl">Get 20% off on Burgers!</h2>
        <h2 className="card-title">McArthys</h2>
        <div className="card-actions justify-end">
          <Link href="/coupon" className="btn">
            See Coupon
          </Link>
          <code className="text-base btn-outline btn-sm btn">wefoi3124j831js10324</code>
        </div>
      </div>
    </div>
  );
};

export default CouponCard;
