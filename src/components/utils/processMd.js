import showdown from "showdown"

const processMd = (html) => {
  const converter = new showdown.Converter();
  const converted = converter.makeHtml(html);

  return converted;
}

export default processMd;