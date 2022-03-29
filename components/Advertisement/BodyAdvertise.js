import React, { useState, useEffect } from "react";
import { Image } from "@chakra-ui/react";
import axios from "axios";
import { getToken } from "../../pages/api/getToken";

export default function TopAdvertise() {
  const [adsData, setAdsData] = useState();

  useEffect(() => {
    const getAds = async () => {
      await axios
        .get(
          `${process.env.NEXT_PUBLIC_CMS_API}/api/cms/adsData/get?page=1&limit=10&keyword=&location=body`,
          {
            headers: {
              authorization: `Bearer ${
                getToken() === undefined ? getToken() : getToken()
              }`,
            },
          }
        )
        .then((res) => {
          // console.log(res.data.docs);
          setAdsData(res.data);
        });
    };
    getAds();
  }, []);
  console.log(adsData?.docs, "adsDataa");
  const w_Image = {
    base: "70vh",
    sm: "150vh",
    lg: "110vh",
    xl: "200vh",
    "2xl": "150vh",
  };

  return (
    <div>
      {adsData?.docs
        ?.filter((e) => e?.status === true)
        .slice(0, 2)
        .map((e, index) => (
          <Image key={index} w={w_Image} h="15vh" src={`${e?.imageSrc}`} alt="Image Name" />
        ))}
    </div>
  );
}
