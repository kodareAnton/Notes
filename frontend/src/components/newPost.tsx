import { Editor } from "@tinymce/tinymce-react";
import axios from "axios";
import { useRef } from "react";
import { IPost } from "../models/Ipost";

export function NewPost() {
  //   const editorRef = useRef(null);
  const log = () => {
    const testObj = {
      title: "Jonas",
      description: "lalalala",
      date: 20220101,
    };
    console.log(testObj);

    const res = axios.post<IPost>(
      "http://localhost:3000/users/add",
      {
        title: "Jonas",
        description: "lalalala",
        date: "20220101",
      },
      {
        headers: {},
      }
    );

    return res.data.headers["Content-Type"]; // text/json
  };

  //   const log = () => {
  //     if (editorRef.current) {
  //       console.log(editorRef.current.getContent());
  //     }
  //   };
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
