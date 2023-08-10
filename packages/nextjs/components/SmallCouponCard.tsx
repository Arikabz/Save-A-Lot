import React from "react";
import Image from "next/image";
import Link from "next/link";

const imageStyle = {
  borderRadius: "20%",
};
const SmallCouponCard = () => {
  return (
    <div className="mx-4 mt-4 drop-shadow-lg card card-side bg-base-100 shadow-xl">
      <figure className="">
        <Image
          src="https://images.ctfassets.net/3vz37y2qhojh/5ovxftNE5jbkvWUqcnohYk/472f2dbf2ec1eb26b1e9a5b879dca535/Korean_Burgers.jpg?w=750&fit=fill&fm=webp"
          alt="Burguer"
          style={imageStyle}
          className="pl-4"
          height={100}
          width={200}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl">Get 20% off on Burgers!</h2>
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
