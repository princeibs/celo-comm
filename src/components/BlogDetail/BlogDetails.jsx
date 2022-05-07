import React, { useState, useEffect, useCallback } from "react";
import { readingTime } from "reading-time-estimator";
import Jazzicon, { jsNumberForAddress } from "react-jazzicon";
import "./BlogDetails.scss";
import processMd from "../utils/processMd";

const BlogDetails = (props) => {
  const {
    id,
    slug,
    coverImgUrl,
    authorAddress,
    title,
    content,
    datePublished,
    likes,
    comments,
  } = props.blog;

  const [coffeeQty, setCoffeeQty] = useState(1);
  const [commentMessage, setCommentMessage] = useState();
  const [, updateState] = useState();

  const forceUpdate = useCallback(() => updateState({}), []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCoffeQtyChange = (e) => {
    setCoffeeQty(e.target.value);
  };

  const buyCoffee = () => {
    props.buyCoffee(slug, coffeeQty);
    console.log(
      "Successfully bought " +
        coffeeQty +
        " coffee for " +
        authorAddress +
        "'s post with id: " +
        id
    );
  };

  const likePost = async () => {
    likes.includes(props.userwa)
      ? await props.unlikePost(slug)
      : await props.likePost(slug);

    forceUpdate();
  };

  const sendComment = async () => {
    await props.makeComment(slug, commentMessage);
    console.log("Successfully said " + commentMessage + " on post " + slug);
    setCommentMessage(); // clears edit comment field
  };

  return (
    <div className="app__blogDetail">
      <div className="app__blogDetail-content">
        <img src={coverImgUrl} />
        <div className="info">
          <div className="info-authorAvatar">          
            <Jazzicon diameter={50} seed={jsNumberForAddress(authorAddress)} />
          </div>
          <div className="details">
            <div className="read-time">
              {readingTime(content).minutes} min read
            </div>
            <div className="date-published">Published on {datePublished}</div>
          </div>
          <div className="reactions">
            <div
              className="l-count"
              style={{ color: likes.includes(props.userwa) ? "red" : "" }}
              onClick={() => likePost()}
            >
              ❤ {likes.length}
            </div>
            <div className="c-count">
              <a href="#comments-section">💬 {comments.length}</a>
            </div>
          </div>
        </div>
        <div className="title">{title}</div>
        <hr className="hr-below-title--bd" />
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: processMd(content) }}
        />
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
            onChange={(e) => setCommentMessage(e.target.value)}
          />
          <div className="comment-btn" onClick={() => sendComment()}>
            Comment
          </div>
        </div>
        <div className="comment-list">
          {comments.length > 0 && <p>Comments</p>}
          {comments?.map((comment) => (
            <div className="comment-item">
              <div className="author-avatar-c">
                <Jazzicon
                  diameter={50}
                  seed={jsNumberForAddress(comment.commenterAddress)}
                />
              </div>
              <div className="comment-item">{comment.commentMessage}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
