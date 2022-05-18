import showdown from "showdown"

const processMd = (html) => {
  const converter = new showdown.Converter();
  return converter.makeHtml(html);


}

export default processMd;
