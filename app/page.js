"use client"
import { useState } from "react"

export default function Home() {
  const [bookName, setBookName] = useState('');
  const [bookTitle, setBookTitle] = useState('');
  const [bookInfo, setBookInfo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target;
    const name = form.name.value;
    const title = form.title.value;
    const info = form.info.value;

    console.log(name, title, info);

  }
  return (
    <main className=" flex flex-row">
      <form
        action=""
        onSubmit={handleSubmit}
      >
        <input
          name="name"
          type="text"
          placeholder="Book Name"
          className="input input-bordered w-full max-w-xs"
        // onChange={() =>  }
        /> <br />

        <input
          name="title"
          type="text"
          placeholder="Book title"
          className="input input-bordered w-full max-w-xs"
        />
        <input
          name="info"
          type="text"
          placeholder="Book information"
          className="input input-bordered w-full max-w-xs"
        />

        <br />
        <input
          type="submit"
          value="Submit"
          className="btn btn-primary"
        />
      </form>
    </main>
  )
}
