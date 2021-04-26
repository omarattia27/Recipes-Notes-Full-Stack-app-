import React, {useEffect, useState} from 'react';
import './App.css';
import {Get, Post, Delete} from './requests';
//import {Typography, AppBar, Container} from '@material-ui/core';

function App() {
  const [Articles, setArticles] = useState([]);
  const [Author, setAuthor] = useState('');
  const [CurrentArticle, setCurrentArticle] = useState('');
  const [title, setTitle] = useState('');
  const [LoggedIn, setLoggedIn] = useState(false);

  const start = () =>{
    Get().then(result => setArticles(result));
    setTitle('');
    setCurrentArticle('');
    
    if(Author === ''){
      setAuthor(prompt('Enter Your Name'));
      setLoggedIn(true);
      console.log("Articles: ",Articles);
      console.log("Author: ",Author);
    }
  };

  const submit = () => {
     const Submit = ()=>Post({title: title, text: CurrentArticle, creator: Author});
     Submit();
     start();
     start();
     console.log('Articles: ',CurrentArticle,'Title: ',title);
  };

  const remove = (key) => {
    Delete(key);
    start();
    start();
  };

  useEffect(() => {    
     start();       
  },[]);

  return (
    
    <div className="App">
      {!LoggedIn? <header className="App-header"> <h2>Log In PLZ</h2> </header> :
     <header className="App-header">
     <banner>
       <h2> {Author}'s Recipes </h2>
      </banner>
      {Articles.map((val, key) => {
      if(val.CurrentArticle==='' && val.title===''){
        key = val._id;         
        remove(key);          
      }else{
      //console.log(Articles,val.creator,val.title);
            key = val._id;
            return (
            <div className="Article">
              <div className="Card">
              <h2>
                {val.title}
              </h2>
              
              <p>
                {val.text}
              </p>
              </div>
              <p> </p>
              <p> </p>
              <button className="Button" type="submit" onClick={()=>remove(key)}>
                x
              </button>
            </div>
            );
          }})}
    
    <div>
      <div><input type="text" id="pin" name="pin" minlength="30" minwidth="30" size="30"value={CurrentArticle} placeholder="Add a recipe....." onChange={(e)=>{
           setCurrentArticle(e.target.value)
           }}/></div>
     <div>
    <input type="text"  value={title} placeholder="Your Dish Name....." onChange={(e)=>{
           setTitle(e.target.value)
           }}/></div>
    <button className="Button"  onClick={()=>submit()}>Post</button>
        
    </div>{
      }

    </header>}
    </div>
  );
}

export default App;