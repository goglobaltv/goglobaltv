import { useEffect, useState } from "react";
import {
  Box,
  Center,
  Grid,
  GridItem,
  Flex,
  Icon,
  Spacer,
  Tooltip,
  SimpleGrid,
} from "@chakra-ui/react";
import { BsFillPersonFill } from "react-icons/bs";
import { RiCalendarCheckLine, RiThumbUpLine } from "react-icons/ri";
import { BsEyeFill } from "react-icons/bs";
import { MdThumbUp } from "react-icons/md";
import PopularItem from "../../components/PopularItem";
import RelatedArticales from "../../components/RelatedArticles";
import Weather from "../../components/Weather";
import { Markup } from "interweave";
import moment from "moment";
import axios from "axios";
import ls from "local-storage";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import BodyAdvertise from "../../components/Advertisement/BodyAdvertise";
import RightAdvertise from "../../components/Advertisement/RightAdvertise";
import { getToken } from "../api/getToken";
import { GetAllNews } from "../../components/GetAllNews/GetAllNews";
import { GetPopularNews } from "../../components/GetAllNews/GetPopularNews";

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { params } = context;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_CMS_API}/api/cms/news/${params.slug}`
  );

  console.log(params?.slug, "newsData");

  const data = await response.json();
  console.log(data, "newsData");
  return {
    props: {
      newDetails: data,
      getView: data?.view,
      getLike: data?.like,
    },
  };
}

export default function Detail({ newDetails, getLike, getView }) {
  console.log(newDetails, "NewDetails");
  const allNewsData = GetAllNews();
  const popularNews = GetPopularNews();
  const [allNews, setAllNews] = useState([]);
  const [like, setLike] = useState(ls.get("like"));
  const [viewCount, setViewCount] = useState(0);

  const [countLike, setCountLike] = useState(0);
  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    setCountLike(getLike);
    setViewCount(getView);
    console.log(newDetails, "thhhh");
  }, [newDetails]);

  useEffect(() => {
    ls.remove("visiting");
    const getNewDetail = async () => {
      await axios
        .get(
          `${process.env.NEXT_PUBLIC_CMS_API}/api/cms/news/getNews?page=1&limit=10&keyword=&category=622020fdd0226f986ed9986b`,
          {
            headers: {
              authorization: `Bearer ${
                getToken() === undefined ? getToken() : getToken()
              }`,
            },
          }
        )
        .then((res) => {
          setAllNews(res.data.docs);
        });
    };
    getNewDetail();
    window.addEventListener("scroll", handleScroll, { passive: true });
  }, []);
  // console.log(allNews, "allNewsaa");

  const handleLike = async () => {
    let checkLike = ls.get("like");
    if (checkLike === slug) {
      ls.set("like", "");
      setLike("");
      await addLike(-1);
      setCountLike(countLike - 1);
    } else {
      ls.set("like", slug);
      setLike(slug);
      await addLike(1);
      setCountLike(countLike + 1);
    }
  };

  const addLike = async (likeValue) => {
    try {
      await axios
        .put(
          `${process.env.NEXT_PUBLIC_CMS_API}/api/cms/news/like/${slug}`,
          // {
          //   headers: {
          //     authorization: `Bearer ${
          //       getToken() === undefined ? getToken() : getToken()
          //     }`,
          //   },
          // },
          {
            like: likeValue,
          }
        )
        .then((response) => {
          console.log(response?.data, "like data");
        });
    } catch (err) {
      if (err.response) {
        console.log("Error data", err.response.data);
        console.log("Error header", err.response.status);
        console.log("Error header", err.response.headers);
      } else {
        console.log(`Error: ${err.message}`);
      }
    }
  };

  const handleScroll = async () => {
    let checkView = ls.get("visiting");
    if (checkView != slug) {
      ls.set("visiting", slug);
      try {
        await axios
          .put(`${process.env.NEXT_PUBLIC_CMS_API}/api/cms/news/view/${slug}`, {
            headers: {
              authorization: `Bearer ${
                getToken() === undefined ? getToken() : getToken()
              }`,
            },
          })
          .then((response) => {
            setViewCount(newDetails?.view + 1);
          });
      } catch (err) {
        if (err.response) {
          console.log("Error data", err.response.data);
          console.log("Error header", err.response.status);
          console.log("Error header", err.response.headers);
        } else {
          console.log(`Error: ${err.message}`);
        }
      }
    }
  };

  const width = {
    base: "95%",
    md: "90%",
    lg: "85%",
    "2xl": "70%",
  };

  const width_Advertisement = {
    base: "100%",
    md: "22vw",
    "2xl": "18.5vw",
  };
  const mt_Advertises = {
    base: "10px",
    md: "100px",
  };
  const title = {
    base: "20px",
    xl: "25px",
  };
  const text_icon = {
    base: "15px",
    "2xl": "16px",
  };
  const description = {
    base: "15px",
    lg: "16px",
  };
  const mt_Popular = {
    base: "0px",
    md: "20px",
  };

  return (
    <>
      <Center>
        <NextSeo
          title="ព័ត៌មានលម្អិត | Go Global TV"
          openGraph={{
            site_name: "ហ្គោគ្លូប៊លធីវី",
            title: <Markup content={newDetails?.title} />,
            images: [
              {
                url: `${newDetails?.socialMediaThumbnail}`,
                width: 700,
                height: 500,
                alt: "Logo",
                type: "image/jpg",
              },
            ],
          }}
          twitter={{
            handle: "@handle",
            site: "@site",
            cardType: "summary_large_image",
          }}
        />
        <Box w={width} mt="50px" color="brand.100">
          <Grid
            templateColumns={{
              base: "1fr",
              lg: "2.5fr 1fr",
              md: "2fr 1fr",
            }}
            gap={4}
          >
            <GridItem colSpan={1}>
              <Box
                w="100%"
                mb="20px"
                fontSize={title}
                fontFamily="bayon"
                color="brand.200"
              >
                <Markup content={newDetails?.title} />
              </Box>
              <Flex mb="8px">
                <Icon as={BsFillPersonFill} mt="1px" w="24px" h="24px" />
                <Box
                  fontFamily="Kantumruy-Regular"
                  fontSize={text_icon}
                  p="5px 0px 0px 5px"
                >
                  {newDetails?.author}
                </Box>
                <Icon
                  as={RiCalendarCheckLine}
                  mt="2px"
                  ml="20px"
                  w="24px"
                  h="24px"
                />
                <Box
                  fontFamily="Kantumruy-Regular"
                  fontSize={text_icon}
                  p="5px 0px 0px 5px"
                >
                  {moment(
                    newDetails?.createdAt || newDetails?.updatedAt
                  ).format("YYYY-MMMM-DD")}
                </Box>
                <Spacer />
                <Box cursor="pointer" onClick={() => handleLike()}>
                  <Tooltip
                    label={like === slug ? "Unlike" : "Like"}
                    placement="top"
                    bg="white"
                    boxShadow="1px 2px 6px 1px #E1E0E3"
                    color="brand.100"
                    p="5px 10px"
                    borderRadius="15px"
                  >
                    <Flex>
                      {like === slug ? (
                        <Icon
                          as={MdThumbUp}
                          mt="2px"
                          ml="20px"
                          w="24px"
                          h="24px"
                        />
                      ) : (
                        <Icon
                          as={RiThumbUpLine}
                          mt="2px"
                          ml="20px"
                          w="24px"
                          h="24px"
                          color="brand.100"
                        />
                      )}
                      <Box
                        fontFamily="Kantumruy-Regular"
                        fontSize={text_icon}
                        p="5px 0px 0px 5px"
                      >
                        ចូលចិត្ត
                      </Box>
                    </Flex>
                  </Tooltip>
                </Box>
                <Box
                  fontFamily="Kantumruy-Regular"
                  fontSize={text_icon}
                  p="5px 0px 0px 5px"
                >
                  {countLike}
                </Box>
                <Box
                  fontFamily="Kantumruy-Regular"
                  fontSize={text_icon}
                  m="3px 0px 0px 10px"
                >
                  |
                </Box>
                <Icon
                  as={BsEyeFill}
                  mt="2px"
                  ml="10px"
                  w="24px"
                  h="24px"
                  color="brand.100"
                />
                <Box
                  fontFamily="Kantumruy-Regular"
                  fontSize={text_icon}
                  p="5px 0px 0px 10px"
                >
                  ចំនួនចូលមើល {viewCount}
                </Box>
              </Flex>
              <hr />
              <Box
                fontFamily="Kantumruy-Regular"
                fontSize={description}
                mt="30px"
                mb="30px"
                lineHeight="1.93"
              >
                <Markup content={newDetails?.article} />
              </Box>
              <BodyAdvertise />
              <Box>
                <Box
                  mt="30px"
                  w="150px"
                  textAlign="center"
                  fontSize={title}
                  fontFamily="bayon"
                  color="white"
                  borderRadius="0px 15px 0px 0px"
                  bg="brand.200"
                  h="40px"
                  pt="6px"
                >
                  អត្ថបទទាក់ទង
                </Box>
                <Box bg="brand.200" mb="20px" h="4px" w="100%" />
                <Grid
                  templateColumns={{
                    base: "1fr",
                    md: "1fr 1fr",
                    xl: "1fr 1fr 1fr",
                  }}
                  gap={4}
                  paddingBottom="7vw"
                >
                  {allNewsData
                    ?.filter(
                      (newData) =>
                        newData?.newsCategory?._id ===
                        newDetails?.newsCategory?._id
                    )
                    .map((newData) => (
                      <GridItem key={newData?._id}>
                        <RelatedArticales newData={newData} />
                      </GridItem>
                    ))}
                </Grid>
              </Box>
            </GridItem>
            <GridItem colSpan={1}>
              <Box mt={mt_Advertises}>
                <Weather />
              </Box>
              <SimpleGrid mt="24px" columns={1} spacing={6}>
                <Box>
                  <RightAdvertise />
                </Box>
                <Box>
                  <RightAdvertise />
                </Box>
              </SimpleGrid>
              <Box
                mt={mt_Popular}
                boxShadow="0 1px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
                p="2"
                rounded="md"
                bg="white"
              >
                <Box fontFamily="bayon" mb="20px">
                  អត្ថបទពេញនិយម
                </Box>
                <Box w={width_Advertisement} h="fit-content">
                  {popularNews?.map((newData) => (
                    <PopularItem key={newData?._id} newData={newData} />
                  ))}
                </Box>
              </Box>
            </GridItem>
          </Grid>
        </Box>
      </Center>
    </>
  );
}
