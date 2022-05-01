import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useStore } from "../store/index";
import styles from "../styles/Home.module.css";
import shallow from "zustand/shallow";

const Home: NextPage = () => {
  const router = useRouter();

  const { showPlayGround, togglePlayGround } = useStore(
    (state: any) => ({
      showPlayGround: state.showPlayGround,
      togglePlayGround: state.togglePlayGround,
    }),
    shallow
  );

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
      <h2>
        A little suggestion : Try MDN docs (believe me its good){" "}
        <a
          href="https://developer.mozilla.org/en-US/"
          target="_blank"
          rel="noreferrer"
        >
          Click here
        </a>
      </h2>
      <button onClick={togglePlayGround}>Toggle PlayGround</button>
      <div className="js_playground">
        {showPlayGround ? (
          <iframe
            src="https://www.programiz.com/javascript/online-compiler/"
            width="100%"
            height="800px"
            title="Javascript playground"
            frameBorder="0"
          ></iframe>
        ) : null}
      </div>
    </>
  );
};

export default Home;
