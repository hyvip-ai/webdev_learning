import type { NextPage } from "next";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const router = useRouter();
  const handleRedirect = (url: string) => {
    router.push(url);
  };
  return (
    <>
      <h1 className={styles.container}>
        Welcome to the best web dev learning journey
      </h1>
      <button onClick={() => handleRedirect("/channels")}>
        Learn from youtube (But be careful of tutorial hell)
      </button>
      <button onClick={() => handleRedirect("/blogs")}>
        Learn from blogs (a little boring)
      </button>
      <button onClick={() => handleRedirect("/interview-experiences")}>
        Read some interview experience (It helps)
      </button>
      <button onClick={() => handleRedirect("/github-repos")}>
        best github repos from javascript (trust me in this)
      </button>
      <h2>A little suggestion : Try MDN docs (believe me its good)</h2>
    </>
  );
};

export default Home;
