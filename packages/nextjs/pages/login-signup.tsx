import type { NextPage } from "next";
import LoginCard from "~~/components/LoginCard";
import { MetaHeader } from "~~/components/MetaHeader";

const Home: NextPage = () => {
  return (
    <>
      <MetaHeader />
      <div className="flex items-center flex-col flex-grow pt-20">
        <LoginCard />
      </div>
    </>
  );
};

export default Home;
