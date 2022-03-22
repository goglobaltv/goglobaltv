import EducationItem from "./EducationItem";
import EducationSlide from "./EducationSlide";

export default function EducationPage({ allNews }) {
  return (
    <div>
      <EducationSlide allNews={allNews} />
      <EducationItem allNews={allNews} />
    </div>
  );
}
