var blogData;
$.get("blog.xml", function (data) {
  blogData = data;
});

var app = angular.module("app", []);
app.controller("head", function($scope) {
});
app.controller("navbar", function($scope) {
});
app.controller("body", function($scope) {
});
