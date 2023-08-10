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
        <div className="my-4 container h-[90vh] basis-3/5 overflow-y-scroll ">
          <h2 className=" mx-4 font-bold text-4xl py-4 px-4">Your Coupons</h2>
          <CouponCard />
          <CouponCard />
          <CouponCard />
          <CouponCard />
          <CouponCard />
          <CouponCard />
        </div>
        <div className="my-4 container h-[90vh] basis-2/5 overflow-y-scroll mx-auto ">
          <h2 className=" mx-4 font-bold text-4xl py-4 px-4">Subscriptions</h2>
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
    </>
  );
};

export default Home;
