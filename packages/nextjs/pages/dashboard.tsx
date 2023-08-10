//import Link from "next/link";
import type { NextPage } from "next";
import LoginCard from "~~/components/LoginCard";
import { MetaHeader } from "~~/components/MetaHeader";

const Home: NextPage = () => {
  return (
    <>
      <MetaHeader />
      <div className="flex flex-row">
        <div className="container h-[90vh] basis-3/5 overflow-y-scroll mx-auto ">
          <LoginCard />
          <LoginCard />
          <LoginCard />
          <LoginCard />
          <LoginCard />
          <LoginCard />
          <LoginCard />
          <div className="columns-1"></div>
        </div>
        <div className="container h-[90vh] basis-2/5 overflow-y-scroll mx-auto ">
          <LoginCard />
          <LoginCard />
          <LoginCard />
          <LoginCard />
          <LoginCard />
          <LoginCard />
          <LoginCard />
        </div>
      </div>
    </>
  );
};

export default Home;
