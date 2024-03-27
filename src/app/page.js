import styles from "./page.module.css";
import { redirect } from 'next/navigation'
export default async function Home() {

  redirect('/Armenia/entertainment')

  return (
    <div className={styles.main_container} >
      <div className={styles.chiled_container} >Hello</div>
    </div>
  );
}
