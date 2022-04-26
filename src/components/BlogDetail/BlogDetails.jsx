import React, { useState } from "react";
import { readingTime } from "reading-time-estimator";
import "./BlogDetails.scss";

const BlogDetails = (props) => {
  const {
    postId,
    coverImgUrl,
    authorAvatarUrl,
    title,
    content,
    datePublished,
    likesCount,
    commentsCount,
    comments,
  } = props.blog;

  const [coffeeQty, setCoffeeQty] = useState(1);
  const [commentMessage, setCommentMessage] = useState();

  const handleCoffeQtyChange = (e) => {
    setCoffeeQty(e.target.value);
  };

  const handleCommentMessage = (e) => {
    setCommentMessage(e.target.value);
  };

  const buyCoffee = () => {
    console.log(
      "Successfully bought " +
        coffeeQty +
        " coffee for " +
        authorAvatarUrl +
        "'s post with id: " +
        postId
    );
  };

  const likePost = () => {
    console.log("Successfully liked post " + postId);
  };

  const sendComment = () => {
    console.log("Successfully said " + commentMessage + " on post " + postId);
  };

  return (
    <div className="app__blogDetail">
      <div className="app__blogDetail-content">
        <img src={coverImgUrl} />
        <div className="info">
          <img src={authorAvatarUrl} />
          <div className="details">
            <div className="read-time">
              {readingTime(content).minutes} min read
            </div>
            <div className="date-published">Published on {datePublished}</div>
          </div>
          <div className="reactions">
            <div className="l-count" onClick={() => likePost()}>
              ❤ {likesCount}
            </div>
            <div className="c-count">
              <a href="#comments-section">💬 {commentsCount}</a>
            </div>
          </div>
        </div>
        <div className="title">{title}</div>
        <hr />
        <div className="content">{content}</div>
      </div>

      <div className="sponsor">
        <div className="sponsor-txt">Enjoy reading this post?</div>
        <div className="sponsor-input">
          <span>Each cup costs 1 cUSD</span>
          <input
            type="number"
            min={1}
            value={coffeeQty}
            onChange={handleCoffeQtyChange}
          />
        </div>
        <div onClick={() => buyCoffee()} className="buy">
          Buy me a coffee <span>🥤</span>
        </div>
      </div>

      <div id="comments-section" className="comments">
        <hr />
        <div>
          <textarea
            placeholder="Enter your comment here"
            value={commentMessage}
            onChange={handleCommentMessage}
          />
          <div className="comment-btn" onClick={() => sendComment()}>
            Comment
          </div>
        </div>
        <div className="comment-list">
          {comments.length > 0 && <p>Comments</p>}
          {comments?.map((comment) => (
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

export default BlogDetails;
