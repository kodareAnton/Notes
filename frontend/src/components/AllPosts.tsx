import { useEffect, useRef, useState } from "react"
import { Editor } from "@tinymce/tinymce-react"
import axios from "axios";
import './allPosts.css' 
import { Link } from "react-router-dom";

export function AllPosts(){

    // Används för att ta bort från Api
    class GetBookings{    
        constructor (
        public id: string,
        public title: string,
        public description: string,
        public date: string,
        )
    {}}

    const [Data, setData] = useState<GetBookings[]>([])

    // hämtar Api
    useEffect(() => {
        axios
        .get('http://localhost:3000/users')
        .then(res => {
            console.log('GEtting from API', res.data);
            setData(res.data)
        }).catch(err => console.log('Det blev fel'));
    }, [])

    // skriver ut Api i HTML
    const Api = Data.map((data) => {

        let readFile = `/AllPosts/${data.id}`;
        console.log(readFile);
        return(
            <div key={data.id} className="rows">  
            <Link to={readFile}>
            <h1>{data.title}</h1>
            </Link>
            </div>
        )
    });

    const editorRef = useRef();

    return ( <><h1>Loggedin in fungerar</h1>
    {Api}
    </>)
    

}