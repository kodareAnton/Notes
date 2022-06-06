import { useRef } from "react"
import { Editor } from "@tinymce/tinymce-react"

export function AllPosts(){

    const editorRef = useRef();

    return ( <><h1>Loggedin in fungerar</h1>
    <div>
        <Editor 
        //onInit={(evt, editor) => editorRef.current }
        />
    </div>
    </>)
    

}