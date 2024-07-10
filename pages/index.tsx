import type { NextPage } from "next";
import FrameComponent from "../components/frame-component";
import styles from "./index.module.css";

const Desktop: NextPage = () => {
  return (
    <div className={styles.desktop1}>
      <header className={styles.navigation}>
        <a className={styles.projects}>Projects</a>
        <i className={styles.getInTouch}>Get in touch</i>
      </header>
      <FrameComponent />
      <section className={styles.frame}>
        <div className={styles.portfolioTitle}>
          <div className={styles.portfolio}>PORTFOLIO</div>
        </div>
        <img
          className={styles.frameChild}
          loading="lazy"
          alt=""
          src="/rectangle-1@2x.png"
        />
      </section>
    </div>
  );
};

export default Desktop;
