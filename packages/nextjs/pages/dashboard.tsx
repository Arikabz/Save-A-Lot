//import Link from "next/link";
import type { NextPage } from "next";
import BriefSubscriptionCard from "~~/components/BriefSubscriptionCard";
import CouponCard from "~~/components/CouponCard";
import Divider from "~~/components/Divider";
import { MetaHeader } from "~~/components/MetaHeader";

const Home: NextPage = () => {
  return (
    <>
      <MetaHeader />
      <div className="flex flex-row">
        <div className="mx-4 my-4 basis-3/5">
          <h2 className="mx-4 font-bold text-4xl py-4 px-4">Your Coupons</h2>
          <div className="my-4 container h-[90vh] overflow-y-scroll ">
            <CouponCard />
            <CouponCard />
            <CouponCard />
            <CouponCard />
            <CouponCard />
            <CouponCard />
          </div>
        </div>
        <div className="mx-4 my-4 basis-2/5">
          <h2 className=" mx-4 font-bold text-4xl py-4 px-4">Subscriptions</h2>
          <div className="my-4 container h-[90vh] overflow-y-scroll mx-auto ">
            <BriefSubscriptionCard />
            <Divider />
            <BriefSubscriptionCard />
            <Divider />
            <BriefSubscriptionCard />
            <Divider />
            <BriefSubscriptionCard />
            <Divider />
            <BriefSubscriptionCard />
            <Divider />
            <BriefSubscriptionCard />
            <Divider />
            <BriefSubscriptionCard />
            <Divider />
            <BriefSubscriptionCard />
            <Divider />
            <BriefSubscriptionCard />
            <Divider />
            <BriefSubscriptionCard />
            <Divider />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
