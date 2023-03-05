import AppContext from "./AppContext";
import React,{ useState } from "react";


const AppState=(props)=>{

  const host="http://localhost:5000";
  const StringAuthToken=localStorage.getItem("token")
  //const navigate=useNavigate();
   /* const s={
         name:"nothing",
         class:"16b"
    }
    const [state,setState]=useState(s)
    const update=()=>{
        setTimeout(() => {
            setState({
                name:"ohkbpt",
                class:"15b"
            })
        }, 2000);
    }*/



     //section for posts and replies 
                      

      const initialPosts=[];

      const [posts,setPosts]=useState(initialPosts)
      const deleteAllPosts=async()=>{
        const response=await fetch(`${host}/api/posts/deleteallposts`,{
          method:"DELETE",
          headers:{
            'auth-token': StringAuthToken,
          'Content-Type': 'application/json'
          }
        });
        const json=await response.json();
        console.log(json)
        setPosts(json)
      }
      const fetchAllPostsForUser=async()=>{
        if(StringAuthToken.length===0)
        {
         // navigate("/sign-in")
        }
        const response=await fetch(`${host}/api/posts/fetchallpostsforuser`,{
          method:"GET",
          headers:{
            'auth-token': StringAuthToken,
          'Content-Type': 'application/json'
          }
        });
        const json=await response.json();
        console.log(json)
        setPosts(json)
      }
      const fetchAllPosts=async()=>{
        if(StringAuthToken.length===0)
        {
         // navigate("/sign-in")
        }
        const response=await fetch(`${host}/api/posts/fetchallposts`,{
          method:"GET",
          headers:{
            'auth-token': StringAuthToken,
          'Content-Type': 'application/json'
          }
        });
        const json=await response.json();
        console.log(json)
        setPosts(json)
      }
      const addPost=async(question,type,division,description)=>{
      /*  const note={
          "_id": "61e4b613047dab38db9",
          "user": "61ee3b83468f7c8fbb4ed78c",
          "title": title,
          "description": description,
          "type": type,
          "date": "2022-01-24T16:05:31.585Z",
          "__v": 0
        }
        setNotes(notes.concat(note))
        console.log(note)*/
        

        const response=await fetch(`${host}/api/posts/addpost`,{
          method:"POST",
          headers:{
            'auth-token': StringAuthToken,
            'Content-Type': 'application/json'
          },
          body:JSON.stringify({question,type,division,description})
        });
        const json=await response.json();
        console.log(json)
        setPosts(posts.concat(json))
       // fetchAllNotes();
      
      }
      const deletepost=async(id)=>{
      /* console.log("deleteing"+id)
       const newNotes=notes.filter((note)=>{return note._id!==id})
       setNotes(newNotes);*/
       const response=await fetch(`${host}/api/posts/deletepost/${id}`,{
        method:"DELETE",
        headers:{
          'auth-token': StringAuthToken,
          'Content-Type': 'application/json'
        }
      });
      const json=await response.json();
      console.log(json)
      const newPosts=posts.filter((post)=>{return post._id!==id})
      setPosts(newPosts);
     // fetchAllNotes();
      }
      const editPost=async(id,question,titles,descriptions,type,images,likes,disLikes,reports,views)=>{
        const response=await fetch(`${host}/api/posts/updatepost/${id}`,{
          method:"PUT",
          headers:{
            'auth-token': StringAuthToken,
            'Content-Type': 'application/json'
          },
          body:JSON.stringify({question,titles,descriptions,type,images,likes,disLikes,reports,views})
        });
        const json=await response.json();
        console.log(json)
        let newPosts=JSON.parse(JSON.stringify(posts))
        for(let i=0;i<posts.length;i++)
        {
          if(newPosts[i]._id===id)
          {
            newPosts[i].titles=titles;
            newPosts[i].descriptions=descriptions;
            newPosts[i].type=type;
            newPosts[i].question=question;
            newPosts[i].images=images;
            newPosts[i].likes=likes;
            newPosts[i].disLikes=disLikes;
            newPosts[i].reports=reports;
            newPosts[i].views=views;
            break
          }
        }
        setPosts(newPosts)
       // fetchAllNotes();
      }
//about replies
const AtMid=[{first:"",second:""}];
const ShownAtMid={};

const [AtRight,setAtRight]=useState({});

const WhatToBeShownAtMid=(obj)=>{

}

const WhatToBeShownAtRight=(obj)=>
{
 setAtRight(obj);
}

const addNewView=async()=>{
  const response=await fetch(`${host}/api/posts/fetchallposts`,{
    method:"GET",
    headers:{
      'auth-token': StringAuthToken,
    'Content-Type': 'application/json'
    }
      
  });
  const json=await response.json();

}

const addNewLike=async()=>{
  const response=await fetch(`${host}/api/posts/fetchallposts`,{
    method:"GET",
    headers:{
      'auth-token': StringAuthToken,
    'Content-Type': 'application/json'
    }
  });
  const json=await response.json();

}
const addNewDislike=async()=>{
  const response=await fetch(`${host}/api/posts/fetchallposts`,{
    method:"GET",
    headers:{
      'auth-token': StringAuthToken,
    'Content-Type': 'application/json'
    }
  });
  const json=await response.json();
}
const addNewReply=async(reply)=>{
console.log(reply)
const response=await fetch(`${host}/api/reply/addreply`,{
  method:"POST",
  headers:{
    'auth-token': StringAuthToken,
  'Content-Type': 'application/json'
  },
  body:JSON.stringify({description:reply})
});
console.log("respoi")
console.log(response)
const json=await response.json();
console.log("hjson")
console.log(json)
/*
const response1=await fetch(`${host}/api/posts/addreplytopost/:$_id}`,{
  method:"PUT",
  headers:{
    'auth-token': StringAuthToken,
  'Content-Type': 'application/json'
  },
  body:JSON.stringify({description:json.id})
});*/


}
const likesList=async()=>{

  const response=await fetch(`${host}/api/posts/fetchallposts`,{
    method:"GET",
    headers:{
      'auth-token': StringAuthToken,
    'Content-Type': 'application/json'
    }
  });
  const json=await response.json();
}
const saveToBookMark=()=>{


}

//what to be shown at mid 
//what to be shown at right      
      console.log(posts)
      console.log(initialPosts)
return (
    <AppContext.Provider value={{posts,addPost,deletepost,deleteAllPosts,editPost,fetchAllPosts,fetchAllPostsForUser
    ,WhatToBeShownAtRight,AtRight,addNewDislike,addNewLike,addNewView,addNewReply,likesList,saveToBookMark}}>
        {props.children}
    </AppContext.Provider>
)
}
export default AppState;