import axios from 'axios';

export const Get = async () => {
      // fetch data from a url endpoint
      const data = await axios.get("http://localhost:5000/api/");
      return data.data;
}

export const Post = async (newArticle) => {
  // fetch data from a url endpoint
  const data = await axios.post("http://localhost:5000/api/", newArticle);
  return data.data;
}

export const Delete = async (id) => {
  // fetch data from a url endpoint
  const data = await axios.delete("http://localhost:5000/api/"+id);
  console.log("Succesful Deletion");
  return data.data;
}