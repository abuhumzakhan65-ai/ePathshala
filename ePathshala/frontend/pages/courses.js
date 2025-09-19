import { useEffect, useState } from "react";
import axios from "axios";

export default function Courses(){
  const [courses, setCourses] = useState([]);

  useEffect(()=>{
    axios.get(process.env.NEXT_PUBLIC_API_URL + "/api/courses")
      .then(r => setCourses(r.data))
      .catch(e => console.warn(e));
  },[]);

  return (
    <main>
      <h1>Courses (Free & Paid)</h1>
      <ul>
        {courses.map(c => (
          <li key={c._id}>
            <strong>{c.title}</strong> — {c.paid ? "Paid" : "Free"}<br/>
            {c.description}
          </li>
        ))}
      </ul>
    </main>
  )
}
