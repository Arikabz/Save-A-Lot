import Link from "next/link";
import type { NextPage } from "next";
import { FaceSmileIcon, GiftIcon, IdentificationIcon } from "@heroicons/react/24/outline";
import { Carousel } from "~~/components/Carousel";
import { MetaHeader } from "~~/components/MetaHeader";

const Home: NextPage = () => {
  return (
    <>
      <MetaHeader />
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center mb-8">
            <span className="block text-4xl font-bold">Save More Now!</span>
          </h1>
          <p className="text-center text-lg">
            Finally! A way for customers and businesses to have decentralized loyalty points and benefits!
          </p>
          <p className="text-center text-lg">Here are some of the latest coupons and offers!</p>
        </div>
        <Link href="/login-signup" className="text-base h-16 btn-wide btn btn-accent">
          Start Now!
        </Link>
        <div className="mx-auto container mt-8 px-8 py-8">
          <Carousel />
        </div>

        <div className="flex-grow bg-base-300 w-full mt-16 px-8 py-12">
          <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <GiftIcon className="h-8 w-8 fill-secondary" />
              <p>Receive goodies from your favorite places! No spam!</p>
            </div>
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <IdentificationIcon className="h-8 w-8 fill-secondary" />
              <p>A secure wallet for all your coupons!</p>
            </div>
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <FaceSmileIcon className="h-8 w-8 fill-secondary" />
              <p>Transfer coupons with your loved ones over the blockchain!</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
