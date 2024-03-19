import React, { useState, useEffect } from "react";
import { Center } from "@chakra-ui/react";
import axios from "axios";
import { getToken } from "../../pages/api/getToken";
import FooterItem from "./FooterItem";

export default function Footer() {
  const [footers, setFooters] = useState();
  useEffect(() => {
    async function getFooter() {
      await axios
        .get(`${process.env.NEXT_PUBLIC_CMS_API}/api/cms/footer/getFooter`, {
          headers: {
            authorization: `Bearer ${getToken() === undefined ? getToken() : getToken()
              }`,
          },
        })
        .then((res) => {
          // console.log(res.data);
          setFooters(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getFooter();
  }, []);

  // console.log(footers, "footer");

  return (
    <div>
      <Center width={"100%"} bg="brand.200">
        {footers?.map((footer) => (
          <FooterItem key={footer?._id} footer={footer} />
        ))}
      </Center>
    </div>
  );
}
