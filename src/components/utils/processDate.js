import Moment from "react-moment";

const processDate = (dateObj) => {
  let dt = new Date(dateObj);
  
  console.log("pd => " + dt);
  return dateObj;
};

export default processDate;
