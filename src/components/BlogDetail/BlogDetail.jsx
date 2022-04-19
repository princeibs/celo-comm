import React from "react";
import "./BlogDetail.scss";

const BlogDetail = (props) => {
  const {
    coverImgUrl,
    authorAvatarUrl,
    title,
    content,
    datePublished,
    likesCount,
    commentsCount,
    comments,
  } = props.blog;
  return (
    <div className="app__blogDetail">
      <div className="app__blogDetail-content">
        <img src={coverImgUrl} />
        <div className="info">
          <img src={authorAvatarUrl} />
          <div className="details">
            <div className="read-time">5 min read</div>
            <div className="date-published">Published on {datePublished}</div>
          </div>
          <div className="reactions">
            <div className="l-count">❤ {likesCount}</div>
            <div className="">💬 {commentsCount}</div>
          </div>
        </div>
        <div className="title">{title}</div>
        <hr />
        <div className="content">{content}</div>
      </div>

      <div className="sponsor">
        Buy me a coffee <span>🥤</span>
      </div>

      <div className="comments">
        <hr />
        <div>
          <textarea placeholder="Enter your comment here" />
        </div>
        <div className="comment-list">
          <p>Comments</p>
          {comments.map((comment) => (
            <div className="comment-item">
              <div className="author-avatar-c"></div>
              <div className="comment-item">{comment.comment}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
