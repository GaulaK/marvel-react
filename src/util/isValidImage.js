const isValidImage = (imageURL) => {
  if (
    imageURL.slice(-4) !== ".jpg" ||
    imageURL.includes("image_not_available")
  ) {
    return false;
  }
  return true;
};

export default isValidImage;
