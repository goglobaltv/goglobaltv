import React, { useState, useEffect } from "react";
import { Image } from "@chakra-ui/react";
import axios from "axios";
import { getToken } from "../../pages/api/getToken";

export default function RightAdvertise() {
  const [adsData, setAdsData] = useState();

  useEffect(() => {
    async function getAds() {
      await axios
        .get(
          `${process.env.NEXT_PUBLIC_CMS_API}/api/cms/adsData/get?page=1&limit=10&keyword=&location=sideBar`,
          {
            headers: {
              'authorization': `Bearer ${getToken() === undefined ? getToken() : getToken()
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

  return (
    <div>
      {adsData?.docs
        ?.filter((e) => e?.status === true)
        .slice(0, 2)
        .map((e, index) => (
          <Image
            key={index}
            w="50vh"
            h="40vh"
            borderRadius="10px"
            src={`${e?.imageSrc}`}
            alt="Right Advertise"
          />
        ))}
    </div>
  );
}
