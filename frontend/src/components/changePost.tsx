import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { IPost } from "../models/Ipost";
import { Post } from "../models/Post";
import { Editor } from "@tinymce/tinymce-react"

export const ChangePost = () =>{

    const [Post, setPost] = useState<Post>();
    const [PostId, setPostId] = useState(0);
    
    // omvandlar till objekt
    let PostArray = Post
    let PostObject = {...PostArray}

    console.log(PostObject);

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

    return <> 
    <h1>Ändra</h1>
    <Editor/>
</>
}