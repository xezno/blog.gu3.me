import moment from "moment"

function date(value) {
  if (typeof value != "string")
    return value;
  return moment(value).fromNow();
};

function exactDate(value) {
  if (typeof value != "string")
    return value;
  return moment(value).format('MMMM Do, YYYY');
};

export default {
  date,
  exactDate
};