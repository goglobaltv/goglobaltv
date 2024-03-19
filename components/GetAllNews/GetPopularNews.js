import { useEffect, useState } from "react";
import axios from "axios";
import { getToken } from "../../pages/api/getToken";

export const GetPopularNews = () => {
  const [popularNews, setPopularNews] = useState([]);
  useEffect(() => {
    async function getPopular() {
      await axios
        .get(
          `${process.env.NEXT_PUBLIC_CMS_API}/api/cms/dashboard/getPopular?page=&limit=6`,
          {
            headers: {
              authorization: `Bearer ${getToken() === undefined ? getToken() : getToken()
                }`,
            },
          }
        )
        .then((res) => {
          // console.log(res.data.docs, "popular news");
          setPopularNews(res.data.docs);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getPopular();
    // console.log(popular);
  }, []);

  return popularNews;
};
