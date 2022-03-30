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
          `${process.env.NEXT_PUBLIC_CMS_API}/api/cms/adsData/get?page=1&limit=10&keyword=&location=topBar`,
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
  // console.log(adsData?.docs, "adsDataa");

  return (
    <div>
      {adsData?.docs
        ?.filter((e) => e?.status === true)
        .slice(0, 1)
        .map((e, index) => (
          <Image
            key={index}
            w="60vh"
            h="10vh"
            src={`${e?.imageSrc}`}
            alt="Image Name"
          />
        ))}
    </div>
  );
}
