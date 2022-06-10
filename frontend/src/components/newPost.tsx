import { Editor } from "@tinymce/tinymce-react";
import axios from "axios";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { Editor as TinyMCEEditor } from "tinymce";
import { setConstantValue } from "typescript";

export function NewPost() {
  interface IPostAPI {
    title: string;
    description: string;
  }
  const valuesOfPost = "";
  const [title, setTitle] = useState<string>();
  const [description, setDescription] = useState<string>();

  // Gör en post som vi kan skicka till Api

  // Pushar post som gjorts innan till Api
  function SaveContent() {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }

    axios
      .post<IPostAPI>("http://localhost:3000/users/add", ObjContent)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err, "Inte skickat");
      });
  }

  const editorRef = useRef<any>(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  // Hämtar värdena ifrån titel och editorn
  const handleUpdate = (value: string, editor: TinyMCEEditor) => {
    setDescription(value);
    setTitle(value);
    console.log(value);
  };

  // Gör om värdena till objekt som ska skicka till API
  const ObjContent = { setTitle, setDescription };

  return (
    <>
      <label htmlFor="title">titel</label>
      <input type="text" name="title" onChange={SaveContent} />
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

      {/* <button onClick={log}>Log editor content</button> */}

      <button onClick={SaveContent}>Spara</button>
    </>
  );
}
