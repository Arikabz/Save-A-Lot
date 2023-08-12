import React from "react";
import Image from "next/image";
import Link from "next/link";

const FullCouponCard = () => {
  return (
    <div className="card bg-base-100 shadow-xl overflow-hidden">
      <div className="card-body">
        <h2 className="card-title text-2xl">Get 20% off on burers!</h2>
        <p>
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem
          pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud
          nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia
          pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem
          duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt
          duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris
          sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.
        </p>
        <div className="card-actions justify-center">
          <Link href="/redeem" className="btn btn-secondary">
            Redeem
          </Link>
          <Link href="/transfer" className="btn btn-accent">
            Transfer
          </Link>
        </div>
      </div>
      <div className="avatar">
        <div className="mx-auto rounded-xl relative w-[60vw] h-[60vh]">
          <Image
            src="https://images.ctfassets.net/3vz37y2qhojh/5ovxftNE5jbkvWUqcnohYk/472f2dbf2ec1eb26b1e9a5b879dca535/Korean_Burgers.jpg?w=750&fit=fill&fm=webp"
            alt="Shoes"
            fill
          />
        </div>
      </div>
    </div>
  );
};

export default FullCouponCard;
