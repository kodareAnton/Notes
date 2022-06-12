import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import { IPost } from "../models/Ipost";
import { Post } from "../models/Post";
import { Editor } from "@tinymce/tinymce-react";

export const ChangePost = () => {
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
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };
  const test = { description: "Heja Bajen" };
  const valuesofPost = test.description;

  return (
    <>
    
      <Editor
        // tinymceScriptSrc={process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"}
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue={valuesofPost}
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

      <button onClick={log}>Log editor content</button>
    </>
  );
};
