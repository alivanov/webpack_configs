import Post from "@models/Post";

import "./styles/styles.css";
import "./styles/less.less";
import "./styles/scss.scss";

import json from "./assets/json";
import xml from "./assets/data.xml";
import csv from "./assets/data.csv";
import Avatar from "./assets/avatar.png";
import * as $ from "jquery";

import "./babel";

import React from "react";
import { render } from "react-dom";

const post = new Post("Webpack post title!", Avatar);

console.log("Post to string: " + post.toString());
console.log("your JSON:", json);
console.log("XML:", xml);
console.log("CSV:", csv);

//this does not work in react
//$("pre").addClass("code").html(post.toString());

//==================

const App = () => (
  <div class="container">
    <h1>Open browser console for details</h1>

    <hr />

    <div class="logo" />

    <hr />

    <pre />

    <hr />

    <div class="box">
      <h2>LESS!</h2>
    </div>

    <hr />

    <div class="card">
      <h2>SCSS!</h2>
    </div>
  </div>
);

render(<App />, document.getElementById("app"));
