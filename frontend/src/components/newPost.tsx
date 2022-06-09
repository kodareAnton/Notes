import { Editor } from "@tinymce/tinymce-react";
import axios from "axios";
import { ChangeEvent, useEffect, useRef, useState } from "react";

export function NewPost() {
  interface IPostAPI {
    title: string;
    description: string;
  }

  const [post, setPost] = useState<IPostAPI>();
  const [newCustomer, setNewCustomer] = useState<IPostAPI>({
    title: "",
    description: "",
  });
  console.log(newCustomer);
  // Gör en post som vi kan skicka till Api
  useEffect(() => {
    setPost({
      title: newCustomer.title,
      description: newCustomer.description,
    });
  }, [newCustomer]);

  useEffect(() => {}, [post]);

  // Pushar post som gjorts innan till Api
  function log() {
    axios
      .post<IPostAPI>("http://localhost:3000/users/add", post)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err, "Du har INTE beställt");
      });
  }

  function handleBooking(
    e: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>
  ) {
    let name: string = e.target.name;

    if (name === "title" || name === "description") {
      setNewCustomer({ ...newCustomer, [name]: e.target.value });
    } else {
      console.log("det blev fel");
    }
  }

  return (
    <>
      <label htmlFor="title">titel</label>
      <input type="text" name="title" onChange={handleBooking} />
      <label htmlFor="description">description</label>
      <input type="description" name="description" onChange={handleBooking} />

      <button onClick={log}> Log editor content</button>
    </>
  );
}
