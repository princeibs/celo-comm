import React, { useState } from "react";
import showdown from "showdown";

import "./CreateContent.scss";
import slugify from "../utils/slugify";

const Write = (props) => {
  const [imgUrl, setImgUrl] = useState("https://picsum.photos/700/250");
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [showEditView, setShowEditView] = useState(true);
  const [converted, setConverted] = useState();

  const key = title?.length > 1 ? slugify(title) : "";

  const processMd = () => {
    const converter = new showdown.Converter();
    const html = converter.makeHtml(content);

    setConverted(html);
    setShowEditView(false);
  };

  const handleInputFieldsChange = (e) => {
    const { name, value } = e.target;
    if (name === "imgUrl") setImgUrl(value);
    if (name === "title") setTitle(value);
    if (name === "content") setContent(value);
  };

  const handlePublishBtn = () => {
    props.getNewlyCreatedPost(key, title, content);
  };

  return (
    <div className="app__writeview">
      <div className="main">
        {showEditView ? (
          <>
            <div className="cover-img">
              <img src={imgUrl} alt={imgUrl} />
              <input
                type="text"
                name="imageUrl"
                onChange={handleInputFieldsChange}
                value={imgUrl}
                placeholder="Start typing image URL to preview image"
              />
            </div>            
            <div className="edit-title">
              <input
                type="text"
                name="title"
                value={title}
                placeholder="Title here"
                onChange={handleInputFieldsChange}
              />
            </div>
            <hr />
            <div className="edit-content">
              <textarea
                name="content"
                value={content}
                onChange={handleInputFieldsChange}
                placeholder="Write your content here"
              />
            </div>
          </>
        ) : (
          <div className="preview">
            <div className="preview-coverImg">
              <img src={imgUrl} alt={imgUrl} />
            </div>
            <div className="preview-title edit-title">{title}</div>
            <hr />
            <div
              className="preview-content"
              dangerouslySetInnerHTML={{ __html: converted }}
            />
          </div>
        )}
        <div className="menu">
          <div onClick={() => setShowEditView(true)} className="write-btn">
            Write
          </div>
          {title && content && (
            <div onClick={() => processMd()} className="preview-btn">
              Preview
            </div>
          )}
          {title && content && (
            <div className="publish-btn" onClick={() => handlePublishBtn()}>
              Publish
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Write;
