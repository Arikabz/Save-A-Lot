interface CouponType {
  id: number;
  title: string;
  issuer: string;
  hash: string;
  src: string;
  issuerSrc: string;
  points: number;
}

const CouponExamples: Array<CouponType> = [
  {
    id: 1,
    title: "Buy one, get one free!",
    issuer: "DrunkenDog",
    hash: "7B33B70D437ADB736D740414ABB6DA97",
    src: "https://res.cloudinary.com/di6tr2xz5/image/upload/v1691893409/coupondog/burger_w7f7ku.webp",
    issuerSrc: "https://res.cloudinary.com/di6tr2xz5/image/upload/v1691906155/Businesses/drunkendog_fsnufh.png",
    points: 40,
  },
  {
    id: 2,
    title: "2 for 1 on Beers!",
    issuer: "DrunkenDog",
    hash: "40629A6D201891F3ECAA9F2DB54F0AFB",
    src: "https://res.cloudinary.com/di6tr2xz5/image/upload/v1691898661/coupondog/beer2_nrad6i.webp",
    issuerSrc: "https://res.cloudinary.com/di6tr2xz5/image/upload/v1691906155/Businesses/drunkendog_fsnufh.png",
    points: 50,
  },
  {
    id: 3,
    title: "2 for 1 on Pizza!",
    issuer: "DrunkenDog",
    hash: "9C66F453BD3B40320321137CB5000A64",
    src: "https://res.cloudinary.com/di6tr2xz5/image/upload/v1691892390/coupondog/pizza3_lvsmmu.webp",
    issuerSrc: "",
    points: 30,
  },
  {
    id: 4,
    title: "10% off on Milkshakes!",
    issuer: "El Merendero",
    hash: "D149CBABBC0246476C2BB1771363C08D",
    src: "https://res.cloudinary.com/di6tr2xz5/image/upload/v1691892391/coupondog/milkshake1_s3mruf.webp",
    issuerSrc:
      "https://res.cloudinary.com/di6tr2xz5/image/upload/v1691906103/Businesses/do1_IqUbFKUm2hav1xxt8gcB_bauamu.webp",
    points: 190,
  },
  {
    id: 5,
    title: "3 for 2 on Birria Tacos",
    issuer: "El Manolito",
    hash: "D23EF6109C7A1CFCB6300650639EF7D8",
    src: "https://res.cloudinary.com/di6tr2xz5/image/upload/v1691898716/coupondog/birria2_voecxe.webp",
    issuerSrc: "https://res.cloudinary.com/di6tr2xz5/image/upload/v1691905929/Businesses/donmanolitowebp_tim5ov.jpg",
    points: 80,
  },
  {
    id: 6,
    title: "3 for 2 on Pastor Tacos",
    issuer: "El Manolito",
    hash: "577508DA09D3C4DE00A8E9592B401CF6",
    src: "https://res.cloudinary.com/di6tr2xz5/image/upload/v1691892390/coupondog/tacosAlPastor_eqxrdo.webp",
    issuerSrc: "https://res.cloudinary.com/di6tr2xz5/image/upload/v1691905929/Businesses/donmanolitowebp_tim5ov.jpg",
    points: 140,
  },
  {
    id: 7,
    title: "30 Wings for $15!",
    issuer: "Buffalo Wild Wings",
    hash: "8D6921344D041897A7EB4E10DBB039DF",
    src: "https://res.cloudinary.com/di6tr2xz5/image/upload/v1691892390/coupondog/wings_telcrl.webp",
    issuerSrc: "https://res.cloudinary.com/di6tr2xz5/image/upload/v1691905811/Businesses/bww_ljf0nq.png",
    points: 70,
  },
  {
    id: 8,
    title: "Boneless half price!",
    issuer: "Buffalo Wild Wings",
    hash: "4DBF3F68FEB60B2D03BFB1B09520D6D7",
    src: "https://res.cloudinary.com/di6tr2xz5/image/upload/v1691892391/coupondog/wingsboneless_neerlx.webp",
    issuerSrc: "https://res.cloudinary.com/di6tr2xz5/image/upload/v1691905811/Businesses/bww_ljf0nq.png",
    points: 80,
  },
  {
    id: 9,
    title: "20% off on Running Shoes!",
    issuer: "Nike",
    hash: "B6E76D77F459196F4D0B36886B5823C2",
    src: "https://res.cloudinary.com/di6tr2xz5/image/upload/v1691892390/coupondog/shoes1_r2chhp.webp",
    issuerSrc: "https://res.cloudinary.com/di6tr2xz5/image/upload/v1691905872/Businesses/nike_q78pa4.webp",
    points: 110,
  },
  {
    id: 10,
    title: "10% off on Sportswear!",
    issuer: "Nike",
    hash: "A5CDD89709F8FD910DE86702006FD5C9",
    src: "https://res.cloudinary.com/di6tr2xz5/image/upload/v1691918020/coupondog/sportswear_u2uj3n.webp",
    issuerSrc: "https://res.cloudinary.com/di6tr2xz5/image/upload/v1691905872/Businesses/nike_q78pa4.webp",
    points: 20,
  },
  {
    id: 11,
    title: "Bratwurst combo -10%!",
    issuer: "DrunkenDog",
    hash: "653A3CEE8B70DD7360F6E3AD6365A1B6",
    src: "https://res.cloudinary.com/di6tr2xz5/image/upload/v1691918131/coupondog/50-grilled-bratwurst_wpmuwe.webp",
    issuerSrc: "https://res.cloudinary.com/di6tr2xz5/image/upload/v1691906155/Businesses/drunkendog_fsnufh.png",
    points: 30,
  },
  {
    id: 12,
    title: "Beer and Fries combo for $10!",
    issuer: "DrunkenDog",
    hash: "75C42FCF600899A382A8456B0ADBD5AF",
    src: "https://res.cloudinary.com/di6tr2xz5/image/upload/v1691918296/coupondog/koreancombo_bq6dln.webp",
    issuerSrc: "https://res.cloudinary.com/di6tr2xz5/image/upload/v1691906155/Businesses/drunkendog_fsnufh.png",
    points: 60,
  },
  {
    id: 13,
    title: "2 for 1 on Milkshakes",
    issuer: "Mercado del Carmen",
    hash: "A41611513118AF63908FCF61F36A1935",
    src: "https://res.cloudinary.com/di6tr2xz5/image/upload/v1691892389/coupondog/milkshake3_uw8kia.webp",
    issuerSrc: "https://res.cloudinary.com/di6tr2xz5/image/upload/v1691918532/coupondog/mercadodelcarmen_wh7fbi.jpg",
    points: 120,
  },
  {
    id: 14,
    title: "Pasta for 2 15% off!",
    issuer: "Mercado del Carmen",
    hash: "B88587535C322460CFDA43E3E9BFBA8E",
    src: "https://res.cloudinary.com/di6tr2xz5/image/upload/v1691892389/coupondog/pasta1_arfwc6.webp",
    issuerSrc: "https://res.cloudinary.com/di6tr2xz5/image/upload/v1691918532/coupondog/mercadodelcarmen_wh7fbi.jpg",
    points: 110,
  },
  {
    id: 15,
    title: "Pint of Ice Cream for $10!",
    issuer: "Mercado del Carmen",
    hash: "254C6E3034B579E3F4C2959BEB932777",
    src: "https://res.cloudinary.com/di6tr2xz5/image/upload/v1691892389/coupondog/helado_wzkvsr.webp",
    issuerSrc: "https://res.cloudinary.com/di6tr2xz5/image/upload/v1691918532/coupondog/mercadodelcarmen_wh7fbi.jpg",
    points: 10,
  },
  {
    id: 16,
    title: "3 for 2 in Donuts!",
    issuer: "Mercado del Carmen",
    hash: "208BF9A08DD24FA81FA34C95490176D0",
    src: "https://res.cloudinary.com/di6tr2xz5/image/upload/v1691892389/coupondog/donuts2_faem7m.webp",
    issuerSrc: "https://res.cloudinary.com/di6tr2xz5/image/upload/v1691918532/coupondog/mercadodelcarmen_wh7fbi.jpg",
    points: 130,
  },
  {
    id: 17,
    title: "10% off on High-End Liquor",
    issuer: "Bodegas Alianza",
    hash: "F06E7B8DA51BCDF6A708DE107276B49E",
    src: "https://res.cloudinary.com/di6tr2xz5/image/upload/v1691892389/coupondog/bluelabel_etuhkz.webp",
    issuerSrc: "https://res.cloudinary.com/di6tr2xz5/image/upload/v1691918879/coupondog/alianza_xuhbyv.jpg",
    points: 10,
  },
  {
    id: 18,
    title: "15% off on Black Label",
    issuer: "Bodegas Alianza",
    hash: "AAEA2B666C729D4E2D65942841FE44CD",
    src: "https://res.cloudinary.com/di6tr2xz5/image/upload/v1691892389/coupondog/blacklabel_e5zslx.webp",
    issuerSrc: "https://res.cloudinary.com/di6tr2xz5/image/upload/v1691918879/coupondog/alianza_xuhbyv.jpg",
    points: 90,
  },
];

interface BriefSubscription {
  id: number;
  issuer: string;
  couponAmt: number;
  src: string;
}

const BriefSubArr: Array<BriefSubscription> = [];

CouponExamples.forEach((coupon: CouponType) => {
  const found = BriefSubArr.find(e => e.issuer == coupon.issuer);
  if (found) {
    BriefSubArr[BriefSubArr.indexOf(found)].couponAmt += 1;
  } else {
    const notFound = {
      id: BriefSubArr.length,
      issuer: coupon.issuer,
      couponAmt: 1,
      src: coupon.issuerSrc,
    };
    BriefSubArr.push(notFound);
  }
});

type BusinessCoupons = Array<CouponType>;
type BusinessesArr = Array<BusinessCoupons>;

const issArr: Array<string> = [];
CouponExamples.forEach((coupon: CouponType) => {
  if (!issArr.includes(coupon.issuer)) {
    issArr.push(coupon.issuer);
  }
});
const SrtdBsnsCpns: BusinessesArr = [];
issArr.forEach(x => {
  const thisArr: BusinessCoupons = CouponExamples.filter(coupon => (coupon.issuer === x ? coupon : null));
  SrtdBsnsCpns.push(thisArr);
});

export default CouponExamples;
export { BriefSubArr, SrtdBsnsCpns };
