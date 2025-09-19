import { useEffect, useState } from "react";
import axios from "axios";

export default function Internships(){
  const [list, setList] = useState([]);
  useEffect(()=>{
    axios.get(process.env.NEXT_PUBLIC_API_URL + "/api/internships")
      .then(r=>setList(r.data))
      .catch(e=>console.warn(e));
  },[]);
  return (
    <main>
      <h1>Internships (10+ Domains)</h1>
      <ul>
        {list.map(i=>(
          <li key={i._id}>
            <strong>{i.title}</strong> — {i.domain} — {i.duration}
          </li>
        ))}
      </ul>
    </main>
  )
}
