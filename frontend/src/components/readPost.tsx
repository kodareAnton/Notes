import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { IPost } from "../models/Ipost";
import { Post } from "../models/Post";
import "./readPost.css";
import parse from "html-react-parser"

export const ReadPost = () =>{

    const [Post, setPost] = useState<Post>();
    const [PostId, setPostId] = useState(0);
    console.log(PostId);
    
    
    // omvandlar till objekt

    // skickar id
    let params = useParams();
    // sätter id 
    useEffect(() => {
        if (params.id)
        setPostId(+params.id);
    }, [])

     // hämtar från Api
     useEffect(() => {   
        if (PostId === 0) {
            console.log("Post id not found");
        }else{
            console.log("rätt");
            axios
            .get<IPost>('http://localhost:3000/users/'+PostId)
            .then(response => {
            let GetPostsFormApi = response.data
            return setPost(GetPostsFormApi);
            });
        }
    }, [PostId]);

var string = parse(`<h2>${Post?.title}</h2> <p>${Post?.description}</p> <p>Datum som du skrev detta inlägg: ${Post?.date}</p>`)

return <>
<h1>Visa</h1>
<div className="post">
    {string}
</div>
</>
}