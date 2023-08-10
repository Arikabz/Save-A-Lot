import React from "react";
import Link from "next/link";

const LoginCard = () => {
  return (
    <div className="card w-96 mx-auto my-4 bg-primary text-primary-content">
      <div className="card-body items-center">
        <h2 className="card-title">Login goes here</h2>
        <p>Login to wallet or create Wallet</p>
        <div className="card-actions justify-center">
          <Link href="/dashboard" className="btn">
            Login with Wallet
          </Link>
          <Link href="/dashboard" className="btn">
            Create Wallet
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginCard;
