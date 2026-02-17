import axios from "axios";

const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
console.log(response.data);