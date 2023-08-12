import React from "react";
import Image from "next/image";

const TinyCouponCard = () => {
  return (
    <div className="card w-32 bg-base-100 shadow-xl image-full mx-5 my-2">
      <div className="relative">
        <Image
          fill
          src="https://images.ctfassets.net/3vz37y2qhojh/5ovxftNE5jbkvWUqcnohYk/472f2dbf2ec1eb26b1e9a5b879dca535/Korean_Burgers.jpg?w=750&fit=fill&fm=webp"
          alt="Coupon"
        />
      </div>
      <div className="card-body justify-center text-center items-center">
        <h2 className="card-title">20% off!</h2>
        <div className="card-actions justify-center">
          <button className="btn btn-primary">See Coupon</button>
        </div>
      </div>
    </div>
  );
};

export default TinyCouponCard;
