import Vue from "vue"
import moment from "moment"

Vue.filter("date", function (value) {
  if (!process.client)
    return "...";
    
  if (typeof value != "string")
    return value;
  return moment(value).fromNow();
});

Vue.filter("exactDate", function (value) {
  if (!process.client)
    return "...";

  if (typeof value != "string")
    return value;
  return moment(value).format('MMMM Do, YYYY');
});