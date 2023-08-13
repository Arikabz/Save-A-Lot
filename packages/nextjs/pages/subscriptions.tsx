import Link from "next/link";
import type { NextPage } from "next";
import FullBusinessCard from "~~/components/FullBusinessCard";
import { MetaHeader } from "~~/components/MetaHeader";
import { SrtdBsnsCpns } from "~~/utils/CouponExamples";

interface Coupon {
  id: number;
  title: string;
  issuer: string;
  hash: string;
  src: string;
  issuerSrc: string;
  points: number;
}

type kuponArr = Array<Coupon>;

const Subscriptions: NextPage = () => {
  return (
    <>
      <MetaHeader />
      <div className="flex-col">
        <div className="basis-full w-[100vw] flex flex-row">
          <h2 className="container mx-4 font-bold text-4xl py-4 px-4">Your Subscriptions</h2>
          <div className="mr-8 mt-4 justify-items-end">
            <Link href="addFriend.tsx" className="btn justify-end basis-1/2">
              Follow New
            </Link>
          </div>
        </div>
        <div className="my-4 overflow-scroll w-full h-[80vh]  ">
          {SrtdBsnsCpns.map((arr: kuponArr, i: number) => (
            <FullBusinessCard key={i} arr={arr} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Subscriptions;
