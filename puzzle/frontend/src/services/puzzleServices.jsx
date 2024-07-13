import axios from "axios";

const getPuzzle = async () => {
  const response = await axios.get("http://178.128.203.28:5000/api/puzzle");
  return response.data;
};

export default { getPuzzle };
