import BlogItem from "./BlogItem";
import img1 from "../assets/images/post-1.jpg";
import img2 from "../assets/images/post-2.jpg";
import img3 from "../assets/images/post-3.jpg";

const BlogInfo = [
  {
    id: 1,
    pic: `${img1}`,
    title: "post title 1",
    desc: "Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis a pellentesque nec,egestas non nisi.",
    tagname: "Ali Karimi",
    time: "10 min",
  },
  {
    id: 2,
    pic: `${img2}`,
    title: "post title 2",
    desc: "Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis a pellentesque nec,egestas non nisi.",
    tagname: "Marwa Ahmadi",
    time: "30 min",
  },
  {
    id: 3,
    pic: `${img3}`,
    title: "post title 3",
    desc: "Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis a pellentesque nec,egestas non nisi.",
    tagname: "Reza Muradi",
    time: "20 min",
  },
];
function Blog() {
  return (
    <section id="blog">
      <div className="container">
        <div className="section-info">
          <h2 className="section-title">BLOG</h2>
          <p className="section-desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="row">
          {BlogInfo.map((blog) => (
            <BlogItem key={blog.id} {...blog} />
          ))}
        </div>
      </div>
    </section>
  );
}
export default Blog;
