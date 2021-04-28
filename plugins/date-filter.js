import Vue from "vue"
import moment from "moment"

Vue.filter("date", function (value) {
  if (typeof value != "string")
    return value;
  return moment(value).fromNow();
});