import React from "react";
import Image from "next/image";

const CouponCard = () => {
  return (
    <div className="mx-4 mt-4 drop-shadow-lg card card-side bg-base-100 shadow-xl">
      <figure>
        <Image
          src="https://images.ctfassets.net/3vz37y2qhojh/5ovxftNE5jbkvWUqcnohYk/472f2dbf2ec1eb26b1e9a5b879dca535/Korean_Burgers.jpg?w=750&fit=fill&fm=webp"
          alt="Burguer"
          height={270}
          width={270}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl">Get 20% off on Burgers!</h2>
        <h2 className="card-title">McArthys</h2>
        <div className="card-actions justify-end">
          <button className="btn">See Coupon</button>
          <code className="text-base btn-outline btn-sm btn">wefoi3124j831js10324</code>
        </div>
      </div>
    </div>
  );
};

export default CouponCard;
