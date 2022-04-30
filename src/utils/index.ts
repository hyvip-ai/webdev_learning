/**
 * Convert object to url query string
 * @param {object} object - Object to convert
 * @returns {string} - Returns a url string
 */
export const serialize = (object: any) => {
  const str = [`key=${process.env.NEXT_PUBLIC_API_KEY}`];
  for (const p in object)
    if (Object.prototype.hasOwnProperty.call(object, p)) {
      if (object[p] || typeof object[p] === "boolean") {
        str.unshift(
          `${encodeURIComponent(p)}=${encodeURIComponent(object[p])}`
        );
      }
    }

  return str.join("&");
};

export const limitDescription = (str: string) => {
  return `${str.split(".")[0]}. ${str.split(".")[1]}`;
};
