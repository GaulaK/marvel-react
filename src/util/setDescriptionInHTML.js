const setDescriptionInHTML = (str) => {
  if (str.includes("*")) {
    const newStr = `<ul>${str
      .replace("*", "<li>")
      .replaceAll("* ", "</li><li>")} </li><ul>`;
    return <div dangerouslySetInnerHTML={{ __html: newStr }}></div>;
  } else {
    return <div dangerouslySetInnerHTML={{ __html: str }}></div>;
  }
};

export default setDescriptionInHTML;
