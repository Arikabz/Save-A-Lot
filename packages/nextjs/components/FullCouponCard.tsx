import React from "react";
import Image from "next/image";
import Link from "next/link";

const FullCouponCard = () => {
  return (
    <div className="card bg-base-100 shadow-xl overflow-hidden">
      <div className="card-body">
        <h2 className="card-title text-2xl">Buy one Burger, get one free!</h2>
        <p>
          We are celebrating you for being one of the first users on coupon.dog! Because of that, have a burger on us!
          This coupon is valid in the purchase of two burgers of any price. The burger with the higher cost will be
          billed and the other one will be free of charge! In order to redeem this coupon, you have to verify your
          identity.{" "}
          <a className="text-bold text-secondary hover:text-primary" href="">
            {" "}
            Terms and Conditions
          </a>{" "}
          apply.
        </p>
        <div className="card-actions justify-center">
          <Link href="/redeem" className="btn btn-secondary">
            Redeem
          </Link>
          <Link href="/transfer" className="btn btn-accent">
            Transfer
          </Link>
        </div>
      </div>
      <div className="avatar">
        <div className="mx-auto mb-4 rounded-xl relative w-[60vw] h-[60vh]">
          <Image
            src="https://res.cloudinary.com/di6tr2xz5/image/upload/v1691893409/coupondog/burger_w7f7ku.webp"
            alt="Shoes"
            fill
          />
        </div>
      </div>
    </div>
  );
};

export default FullCouponCard;
