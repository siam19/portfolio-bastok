import type { NextPage } from "next";
import styles from "./frame-component.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <section className={[styles.heyThisIsBastokParent, className].join(" ")}>
      <img
        className={styles.heyThisIsBastok}
        loading="lazy"
        alt=""
        src="/hey-this-is-bastok.svg"
      />
      <div className={styles.heroContent}>
        <img
          className={styles.heroImageIcon}
          loading="lazy"
          alt=""
          src="/hero-image@2x.png"
        />
        <div className={styles.heroCallToAction}>
          <div
            className={styles.heroText}
          >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed dictum massa. Pellentesque placerat consectetur facilisis. Donec quis egestas ante. Proin sit `}</div>
          <img
            className={styles.learnMoreButton}
            loading="lazy"
            alt=""
            src="/learn-more-button.svg"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
