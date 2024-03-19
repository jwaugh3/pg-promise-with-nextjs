import styles from "./page.module.css";
import { getUser } from "@/lib/db/users/route";

export default async function Home() {

  getUser()

  return (
    <main className={styles.main}>

    </main>
  );
}
