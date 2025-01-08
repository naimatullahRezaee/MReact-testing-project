function BlogItem({ pic, title, desc, tagname, time }) {
  return (
    <div className="col-4">
      <div className="blog-box">
        <div className="blog-img">
          <img src={pic} className="img-fluid" />
        </div>
        <div className="blog-content">
          <h3 className="blog-title">{title}</h3>
          <p className="blog-desc">{desc}</p>
        </div>
        <div className="blog-footer">
          <div className="post-author">
            <p className="author">{tagname}</p>
          </div>
          <div className="post-date">
            <span className="bi bi-clock"></span>
            {time}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogItem;
