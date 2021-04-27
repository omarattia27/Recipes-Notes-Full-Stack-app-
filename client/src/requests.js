import axios from 'axios';

export const Get = async () => {
      const data = await axios.get("http://localhost:5000/api/");
      return data.data;
}

export const Post = async (newArticle) => {
  const data = await axios.post("http://localhost:5000/api/", newArticle);
  return data.data;
}

export const Delete = async (id) => {
  const data = await axios.delete("http://localhost:5000/api/"+id);
  console.log("Succesful Deletion");
  return data.data;
}
