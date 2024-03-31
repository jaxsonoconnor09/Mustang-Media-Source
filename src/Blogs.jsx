import "../public/global.css";
import "./Blogs.css";

function Blogs() {
  const blogs = [
    {
      thumbnail: "https://jaxsonoconnor09.github.io/image-repo/blossom.png",
      title: "Introducting Business Professionals of America!",
      desc: "Learn how you can sign up for BPA through Eagle High School."
    },
    {

    }
  ];
  return (
    <div className="body paragraph-content">
      <h1>Blogs</h1>
      {blogs.length == 0
        ? <h1>No blogs yet!</h1>
        : blogs.map((blog) => (
          <div className="blog">
            <div className="blog-thumbnail" style={{backgroundImage: `url(${blog.thumbnail})`}}></div>
            <h2>{blog.title}</h2>
            <p>{blog.desc}</p>
          </div>
        ))}
    </div>
  )
}

export default Blogs;