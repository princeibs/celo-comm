import React from "react";
import { readingTime } from "reading-time-estimator";

import "./BlogsList.scss";

const BlogPreview = (props) => {
  const blogs = props.blogs;
  const handleTitleClick = (blog) => {
    props.showDetails("details");
    props.getDetails(blog);
  };
  return (
    <>
      <div className="app__blogPreview">
        <div className="app__blogPreview-body">
          {blogs.map((blog) => (
            <div className="app__blogPreview-item">
              <img src={blog.coverImgUrl} />
              <div className="preview-details">
                <img src={blog.authorAvatarUrl} />
                <div className="preview-content">
                  <div className="preview-datePublished">
                    {blog.datePublished}
                  </div>
                  <div className="preview-readingTime">
                    {readingTime(blog.content).minutes} min read
                  </div>
                  <div
                    onClick={() => handleTitleClick(blog)}
                    className="preview-title"
                  >
                    {blog.title}
                  </div>
                  <p>{blog.content.slice(0, 170)} ...</p>
                  <div className="preview-bottom">
                    <div className="preview-likes">❤ {blog.likesCount}</div>
                    <div className="preview-comments">
                      💬 {blog.commentsCount}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogPreview;
