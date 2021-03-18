import Vue from "vue";

Vue.filter("truncateByWord", (str) => str.split(/[ ,]+/).splice(0, 45).join(" "));
