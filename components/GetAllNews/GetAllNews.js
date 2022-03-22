import { useEffect, useState } from "react";
import axios from "axios";
import { getToken } from "../../pages/api/getToken";

export const GetAllNews = () => {
    const [allNews, setAllNews] = useState([]);
    useEffect(async() => {
    const getAllNews = async () => {
      await axios.get(`${process.env.NEXT_PUBLIC_CMS_API}/api/cms/news/getAllNews`, {
          headers:{
            'authorization': `Bearer ${
              getToken() === undefined ? getToken() : getToken()
            }`,
          },
        })
        .then((res) => {
          console.log(res.data);
          setAllNews(res.data);
        })
        .catch(err=>{
          console.log(err)
        })
    };
    getAllNews();
  // console.log(allNews);
}, [])

  return allNews;
} 