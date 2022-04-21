import React from "react";

import data from "../../data";
import "./BlogPreview.scss";

const blogs = data.blogs;

const BlogPreview = () => {
  return (
    <>
      <div className="app__blogPreview">
        <div className="app__blogPreview-body">
          {blogs.map((blog) => (
            <div className="app__blogPreview-item">
              <img src={blog.coverImgUrl} />
              <div className="details">
                <img src={blog.authorAvatarUrl} />
                <div className="content">
                  <div>{blog.datePublished}</div>
                  <p>5 mins read</p>
                  <h2>{blog.title}</h2>
                  <p>{blog.content.slice(0, 170)} ...</p>
                  <div className="bottom">
                    <div className="likes">❤ {blog.likesCount}</div>
                    <div className="comments">💬 {blog.commentsCount}</div>
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
