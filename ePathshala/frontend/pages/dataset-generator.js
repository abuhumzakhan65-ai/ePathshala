import { useEffect, useState } from "react";
import axios from "axios";

export default function DatasetGenerator(){
  const [templates,setTemplates]=useState([]);
  useEffect(()=>{
    axios.get(process.env.NEXT_PUBLIC_API_URL + "/api/datasets/templates")
      .then(r=>setTemplates(r.data))
      .catch(e=>console.warn(e));
  },[]);
  return (
    <main>
      <h1>Dataset Generator</h1>
      <p>Choose from 50+ dataset templates below (sample list)</p>
      <ul>
        {templates.map(t=> <li key={t.id}>{t.name} — {t.rows} rows</li>)}
      </ul>
    </main>
  )
}
