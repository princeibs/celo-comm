import React, { useState } from "react";
import showdown from "showdown";

import "./CreateContent.scss";

const Write = () => {
  const [imgUrl, setImgUrl] = useState();
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [showEditView, setShowEditView] = useState(true);
  const [converted, setConverted] = useState();

  const processMd = () => {
    const converter = new showdown.Converter();
    const html = converter.makeHtml(content);
    const div = document.createElement("div");
    div.innerHTML += html;

    // document.getElementById("root").innerHTML += html;

    console.log(div);
    setConverted(html);
    setShowEditView(false);
  };

  const handleInputFieldsChange = (e) => {
    const { name, value } = e.target;

    if (name === "imgUrl") setImgUrl(value);
    if (name === "title") setTitle(value);
    if (name === "content") setContent(value);
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
            <div id="title" className="title">
              <input
                type="text"
                name="title"
                value={title}
                placeholder="Enter your article title here"
                onChange={handleInputFieldsChange}
              />
            </div>
            <hr />
            <div className="content">
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
            <div className="preview-title">{title}</div>
            <hr />
            <div id="preview-content" className="preview-content">
              {converted}
            </div>
          </div>
        )}
        <div className="menu">
          <div onClick={() => setShowEditView(true)} className="write-btn">
            Write
          </div>
          <div onClick={() => processMd()} className="preview-btn">
            Preview
          </div>
          <div className="publish-btn">Publish</div>
        </div>
      </div>
    </div>
  );
};

export default Write;
