import { Editor } from "@tinymce/tinymce-react";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { IPost } from "../models/Ipost";

export function NewPost() {

  interface IPostAPI {
    title: string;
    description: string;
}

const [post, setPost] = useState<IPostAPI>();
 // Gör en post som vi kan skicka till Api
 useEffect(() => {
  setPost({
      title: 'Lousie',
      description: 'Baka',
  });  
}, []);

useEffect(() => {
}, [post]);

   // Pushar post som gjorts innan till Api
   function log(){
    axios.post<IPostAPI>('http://localhost:3000/users/add', post)
    .then(res => {
        console.log(res);   
    }).catch(err => {
        console.log(err, 'Du har INTE beställt');
    });
  }

  return (
    <>
      {/* <Editor
        disabled={true}
        apiKey="no-api-key"
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue="<p> This is the initial content of the editor. </p>"
        init={{
          height: 500,
          menubar: false,
          plugins: [
            "advlist",
            "autolink",
            "lists",
            "link",
            "image",
            "charmap",
            "preview",
            "anchor",
            "searchreplace",
            "visualblocks",
            "code",
            "fullscreen",
            "insertdatetime",
            "media",
            "table",
            "code",
            "help",
            "wordcount",
          ],
          toolbar:
            "undo redo | blocks | " +
            "bold italic forecolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
      /> */}
      <button onClick={log}> Log editor content</button>
    </>
  );
}
