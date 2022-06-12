import axios from "axios";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import { IPost } from "../models/Ipost";
import { Post } from "../models/Post";
import { Editor } from "@tinymce/tinymce-react";
import { Editor as TinyMCEEditor } from "tinymce";
import { log } from "console";

export const ChangePost = () => {

  interface IPostAPI {
    title: string;
    description: string;
  }

  const [Post, setPost] = useState<Post>();
  const [PostId, setPostId] = useState(0);

  console.log(Post);

  // skickar id
  let params = useParams();
  // sätter id
  useEffect(() => {
    if (params.id) setPostId(+params.id);
  }, []);

  // hämtar från Api
  useEffect(() => {
    if (PostId === 0) {
      console.log("Post id not found");
    } else {
      console.log("rätt");
      axios
        .get<IPost>("http://localhost:3000/users/" + PostId)
        .then((response) => {
          let GetPostsFormApi = response.data;
          return setPost(GetPostsFormApi);
        });
    }
  }, [PostId]);

  const editorRef = useRef<any>(null);
  
  /// Uppdaterar content
  const valuesOfPost = Post?.description;

  const [title, setTitle] = useState<string>();
  const [description, setDescription] = useState<string>();

  function SaveContent() {
    if (editorRef.current){
      console.log(editorRef.current.getContent());
    }
    axios
      .put<IPostAPI>("http://localhost:3000/users/" + PostId, ObjContent)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err, "Inte skickat");
      });
  }

   // Hämtar värdena ifrån titel och editorn
   const handleUpdate = (value: string, editor: TinyMCEEditor) => {
    setDescription(value);
    console.log(value);
  };

    // Gör om värdena till objekt som ska skicka till API
    const ObjContent = { title: Post?.title, description };
    console.log(ObjContent);

  return (
    <>
      <h1>{Post?.title}</h1>

      <Editor
        onEditorChange={handleUpdate}
        value={description}
        // tinymceScriptSrc={process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"}
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue={valuesOfPost}
        init={{
          height: 500,
          menubar: true,
          plugins: [
            "advlist",
            "autolink",
            "lists",
            "link",
            "image",
            "charmap",
            "anchor",
            "searchreplace",
            "visualblocks",
            "code",
            "fullscreen",
            "insertdatetime",
            "media",
            "table",
            "preview",
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
      />
      <button onClick={SaveContent}>Spara</button>
    </>
  );
};
