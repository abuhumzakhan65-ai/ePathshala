import { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard(){
  const [data, setData] = useState({});
  useEffect(()=>{
    axios.get(process.env.NEXT_PUBLIC_API_URL + "/api/dashboard/summary")
      .then(r=>setData(r.data))
      .catch(e=>console.warn(e));
  },[]);
  return (
    <main>
      <h1>User Dashboard</h1>
      <pre>{JSON.stringify(data,null,2)}</pre>
    </main>
  )
}
