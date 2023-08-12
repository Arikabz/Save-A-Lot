import Link from "next/link";
import type { NextPage } from "next";
import FriendCard from "~~/components/FriendCard";
import { MetaHeader } from "~~/components/MetaHeader";

const Friends: NextPage = () => {
  return (
    <>
      <MetaHeader />
      <div className="container">
        <div className="w-[100vw] flex flex-row">
          <h2 className="container mx-4 font-bold text-4xl py-4 px-4">Your Friends</h2>
          <div className="mr-8 mt-4 justify-items-end">
            <Link href="addFriend.tsx" className="btn justify-end basis-1/2">
              Add Friend
            </Link>
          </div>
        </div>
        <div className="my-4 w-full  h-[90vh] ">
          <FriendCard />
          <FriendCard />
          <FriendCard />
          <FriendCard />
          <FriendCard />
          <FriendCard />
        </div>
      </div>
    </>
  );
};

export default Friends;
