import Link from "next/link";
export default function Home() {
  return (
    <main>
      <h1>ePathshala — Learn. Build. Grow.</h1>
      <p>Home — find courses, internships, certification tools and datasets.</p>
      <nav>
        <Link href="/courses">Courses</Link> | 
        <Link href="/internships">Internships</Link> | 
        <Link href="/certifications">Certifications</Link> | 
        <Link href="/dataset-generator">Datasets</Link> | 
        <Link href="/dashboard">Dashboard</Link>
      </nav>
    </main>
  );
}
