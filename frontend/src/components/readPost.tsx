import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

export const ReadPost = () =>{

    class GetPosts{    
        constructor (
        public id: string,
        public title: string,
        public description: string,
        public date: string,
        )
    {}}

    class post {
        constructor(
            public id: string,
            public title: string,
            public description: string,
            public date: string,
            )
    {}} 

    const [Post, setPost] = useState<post>();
    const [PostId, setPostId] = useState(0);
    
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
            .get<GetPosts>('http://localhost:3000/users/'+PostId)
            .then(response => {
            let GetPostsFormApi = response.data
            return setPost(GetPostsFormApi);
            });
        }
    }, [PostId]);

    return <> 
    <h1>hej</h1>
    <h2>{Post?.title}</h2>
</>
}