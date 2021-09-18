import { max, mean, min } from "lodash";

function analyse(arr) {
  return {
    average: mean(arr),
    min: min(arr),
    max: max(arr),
    length: arr.length,
  };
}

export default analyse;
