import { useEffect, useState } from "react";
import axios from "axios";

export default function Certifications(){
  const [certs, setCerts] = useState([]);
  useEffect(()=>{
    axios.get(process.env.NEXT_PUBLIC_API_URL + "/api/certificates")
      .then(r=>setCerts(r.data))
      .catch(e=>console.warn(e));
  },[]);
  return (
    <main>
      <h1>Certifications</h1>
      <p>Certificates are auto-generated upon completion of courses/tasks.</p>
      <ul>
        {certs.map(c => (
          <li key={c._id}>{c.title} — issued to {c.userEmail}</li>
        ))}
      </ul>
    </main>
  )
}
