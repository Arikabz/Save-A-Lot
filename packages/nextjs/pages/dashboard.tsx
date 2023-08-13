//import Link from "next/link";
import type { NextPage } from "next";
import BriefSubscriptionCard from "~~/components/BriefSubscriptionCard";
import CouponCard from "~~/components/CouponCard";
import Divider from "~~/components/Divider";
import { MetaHeader } from "~~/components/MetaHeader";
import CouponExamples from "~~/utils/CouponExamples";
import { BriefSubArr } from "~~/utils/CouponExamples";

interface Coupon {
  id: number;
  title: string;
  issuer: string;
  hash: string;
  src: string;
}

interface BriefSubscription {
  id: number;
  issuer: string;
  couponAmt: number;
  src: string;
}
const Home: NextPage = () => {
  return (
    <>
      <MetaHeader />
      <div className="flex flex-row">
        <div className="mx-4 my-4 basis-3/5">
          <h2 className="mx-4 font-bold text-4xl py-4 px-4">Your Coupons</h2>
          <div className="my-4 container h-[90vh] overflow-y-scroll ">
            {CouponExamples.map((coupon: Coupon, i: number) => (
              <CouponCard
                key={i}
                id={coupon.id}
                issuer={coupon.issuer}
                title={coupon.title}
                hash={coupon.hash}
                src={coupon.src}
              />
            ))}
          </div>
        </div>
        <div className="mx-4 my-4 basis-2/5">
          <h2 className=" mx-4 font-bold text-4xl py-4 px-4">Subscriptions</h2>
          <div className="my-4 container h-[90vh] overflow-y-scroll mx-auto ">
            {BriefSubArr.map((coupon: BriefSubscription, i: number) => (
              <>
                <BriefSubscriptionCard
                  key={i}
                  id={coupon.id}
                  issuer={coupon.issuer}
                  couponAmt={coupon.couponAmt}
                  src={coupon.src}
                />
                <Divider />
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
/*
                        <BriefSubscriptionCard />
                        <Divider />
*/
