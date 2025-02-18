import bgImage3 from "../assets/img/sekil3.jpg";
import FirstComponent from "../home/FirstComponent";
import CommonItems from "./CommonItems";
const Blogs = () => {
  return (
    <div>
      <FirstComponent title="Blog" subtitle="// Blog" bgImage={bgImage3} />
      <CommonItems />
    </div>
  );
};

export default Blogs;
