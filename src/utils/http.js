const API_URL = process.env.NEXT_PUBLIC_API_URL;

/**
 * Generate HTTP headers
 * @param {Object} headers
 */
const getHeader = (headers = {}, hasFiles = false) => {
  const defaultHeaders = {
    "Content-Type": "application/json",
  };
  const newHeaders = {
    ...defaultHeaders,
    ...headers,
  };

  if (hasFiles) {
    delete newHeaders["Content-Type"];
  }

  return newHeaders;
};

/**
 * Generate HTTP body
 * @param {Object} body
 * @param {Boolean} hasFiles
 */
const getBody = (body, hasFiles = false) => {
  if (hasFiles) {
    return body;
  }

  return JSON.stringify(body);
};

/**
 * Handle HTTP error
 * @param {Number} httpStatusCode
 * @param {Object | Error} response
 */
const handleError = (httpStatusCode, response = {}) => {
  if (httpStatusCode === 401 || httpStatusCode === 403) {
    if (window.location.pathname !== "/404") {
      localStorage.clear();
      window.location.href = "/404";
      throw response;
    }
  }

  if (httpStatusCode === 429) {
    throw new Error("Too Many Requests.");
  }

  if (httpStatusCode < 200 || httpStatusCode > 302) {
    throw response;
  }
};
/**
 * Generate Request URL
 * @param {String} url
 * @param {Object} options
 */
const generateURL = (url, options = {}) => {
  if (options.url) {
    return options.url;
  }

  let prefix = "";
  if (options.prefix) {
    prefix = options.prefix;
  }

  return `${API_URL}${prefix}${url}`;
};

/**
 * HTTP GET Request
 * @method GET
 * @param {String} url
 * @param {Object} options
 */
const httpGet = async (url, option = { headers: {} }) => {
  const result = await fetch(generateURL(url), {
    method: "GET",
    headers: getHeader(option.headers),
  });

  const response = await result.json();
  handleError(result.status, response);
  return response;
};

const http = {
  get: httpGet,
};

export default http;
