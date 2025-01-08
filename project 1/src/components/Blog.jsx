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
          <div className="col-4">
            <div className="blog-box">
              <div className="blog-img">
                <img src="./img/post-1.jpg" className="img-fluid" />
              </div>
              <div className="blog-content">
                <h3 className="blog-title">post title 1</h3>
                <p className="blog-desc">
                  Proin eget tortor risus. Pellentesque in ipsum id orci porta
                  dapibus. Praesent sapien massa, convallis a pellentesque nec,
                  egestas non nisi.
                </p>
              </div>
              <div className="blog-footer">
                <div className="post-author">
                  <p className="author">Milad Bahrami</p>
                </div>
                <div className="post-date">
                  <span className="bi bi-clock"></span> 10 min
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="blog-box">
              <div className="blog-img">
                <img src="./img/post-2.jpg" className="img-fluid" />
              </div>
              <div className="blog-content">
                <h3 className="blog-title">post title 1</h3>
                <p className="blog-desc">
                  Proin eget tortor risus. Pellentesque in ipsum id orci porta
                  dapibus. Praesent sapien massa, convallis a pellentesque nec,
                  egestas non nisi.
                </p>
              </div>
              <div className="blog-footer">
                <div className="post-author">
                  <p className="author">Milad Bahrami</p>
                </div>
                <div className="post-date">
                  <span className="bi bi-clock"></span> 10 min
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="blog-box">
              <div className="blog-img">
                <img src="./img/post-3.jpg" className="img-fluid" />
              </div>
              <div className="blog-content">
                <h3 className="blog-title">post title 1</h3>
                <p className="blog-desc">
                  Proin eget tortor risus. Pellentesque in ipsum id orci porta
                  dapibus. Praesent sapien massa, convallis a pellentesque nec,
                  egestas non nisi.
                </p>
              </div>
              <div className="blog-footer">
                <div className="post-author">
                  <p className="author">Milad Bahrami</p>
                </div>
                <div className="post-date">
                  <span className="bi bi-clock"></span> 10 min
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Blog;
