import { useRouter } from "next/router";
import type { NextPage } from "next";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import HeroWithForm from "~~/components/HeroWithForm";
import { MetaHeader } from "~~/components/MetaHeader";

const Redeem: NextPage = () => {
  const router = useRouter();
  return (
    <>
      <MetaHeader />
      <div className="flex items-center flex-col flex-grow pt-20">
        <button className="mx-4 btn btn-outline" onClick={() => router.back()}>
          <ArrowLeftIcon className="h-8 w-8 fill-secondary" />
        </button>
        <h2 className=" mx-4 font-bold text-4xl py-4 px-4">Redeem</h2>
        <HeroWithForm />
      </div>
    </>
  );
};

export default Redeem;
