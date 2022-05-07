import React, { useEffect } from "react";
import Jazzicon, { jsNumberForAddress } from "react-jazzicon";
import { readingTime } from "reading-time-estimator";
import processMd from "../utils/processMd";

import "./BlogsList.scss";

const BlogPreview = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const posts = props.posts;
  const handleTitleClick = (blog) => {
    props.showDetails("details");
    props.getDetails(blog);
  };
  return (
    <>
      <div className="app__blogPreview">
        <div className="app__blogPreview-body">
          {posts?.map((blog) => (
            <div className="app__blogPreview-item">
              <img src={blog.coverImgUrl} />
              <div className="preview-details">
                <div className="pd-authorAvatar">
                  <Jazzicon
                    diameter={50}
                    seed={jsNumberForAddress(blog.authorAddress)}
                  />
                </div>
                {/* <img src={blog.authoAvatarUrl} /> */}
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
                  <div
                    className="preview-content--content"
                    dangerouslySetInnerHTML={{
                      __html: processMd(blog.content.slice(0, 120) + " ..."),
                    }}
                  />
                  <div className="preview-bottom">
                    <div className="preview-likes">❤ {blog.likes.length}</div>
                    <div className="preview-comments">
                      💬 {blog.comments.length}
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
