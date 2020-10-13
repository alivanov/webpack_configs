import Post from "@models/Post";
import "./styles/styles.css";
import json from "./assets/json";
import xml from "./assets/data.xml";
import csv from "./assets/data.csv";
import Avatar from "@/assets/avatar";
import * as $ from "jquery";

const post = new Post("Webpack post title", Avatar);

console.log("Post to string: " + post.toString());
console.log("your JSON:", json);
console.log("XML:", xml);
console.log("CSV:", csv);

$("pre").html(post.toString());
