import type { NextPage } from "next";
import { useRouter } from "next/router";
import styles from "../../styles/Home.module.css";

const Home: NextPage = () => {
  const router = useRouter();
  const handleRedirect = () => {
    router.push("/channels");
  };
  return (
    <h1 className={styles.container}>
      Welcome to the best web dev learning journey
      <br />
      <button onClick={handleRedirect}>start</button>
    </h1>
  );
};

export default Home;
