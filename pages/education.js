import EducationPage from "../components/Education/EducationPage";
import { NextSeo } from "next-seo";
import React from "react";
import { GetAllNews } from "../components/GetAllNews/GetAllNews";

export default function Education() {

  return (
    <div>
      <NextSeo
        title="អប់រំ | Go Global TV"
        openGraph={{
          site_name: "ហ្គោគ្លូប៊លធីវី",
          title: "អប់រំ",
          description:
            "Go Global TV គឺជាបណ្តាញទូរទស្សន៍អនឡាញមួយ (Online) ដែលនឹងធ្វើការផ្សព្វផ្សាយតាមបណ្តាញសង្គមជាសាធារណៈ។ ក្រុមហ៊ុននឹងផ្តោតសំខាន់លើការផ្តល់ជូននូវលទ្ធភាពអាចទស្សនាការផ្សព្វផ្សាយការអប់រំ ការកម្សាន្ត ព័ត៌មានជាតិ និងអន្តរជាតិ ការយល់ដឹងអំពីពាណិជ្ជកម្ម កសិកម្ម និងទេសចរណ៍។",
          images: [
            {
              url: "/Education.jpg",
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
      <EducationPage allNews={GetAllNews()} />
    </div>
  );
}
