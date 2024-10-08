const ApiRequest = async (url = "", optionsObject = null, errMsg = null) => {
  try {
    const response = await fetch(url, optionsObject);
    if (!response.ok) throw Error("Please, reload the app");
  } catch (err) {
    errMsg = err.message;
  } finally {
    return errMsg;
  }
};

export default ApiRequest;
