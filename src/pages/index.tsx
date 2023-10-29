import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
  {
    title: "Easy to Use",
    imageUrl: "img/undraw_docusaurus_mountain.svg",
    description: (
      <>
        Openpesa solutions were designed from the ground up to be easily
        installed and used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: "Focus on What Matters",
    imageUrl: "img/undraw_docusaurus_tree.svg",
    description: (
      <>
        Openpesa solutions lets you focus on your bussiness logic, and
        we&apos;ll do the chores. Go ahead and remove your custom implemtation.
      </>
    ),
  },
  {
    title: "Powered by Modern technologies",
    imageUrl: "img/undraw_docusaurus_react.svg",
    description: (
      <>
        Extend or customize your the logic by composition and overiding.
        Openpesa solutions can be extended while reusing the same header and
        footer.
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`${(siteConfig as any).tagline}`}
      description="An open-source payments integration toolkit for businesses and developers."
    >
      <header className={clsx("hero shadow--lw", styles.heroBanner)}>
        <div className="container">
          <picture>
            <source
              media="(prefers-color-scheme: dark)"
              srcSet={useBaseUrl("img/openpesa-brand.svg")}
              style={{ width: "400px", height: "auto" }}
            ></source>
            <img
              src={useBaseUrl("img/openpesa-brand-alt.svg")}
              alt="Openpesa"
              style={{ width: "400px", height: "auto" }}
              className="hero__logo"
            />
          </picture>
          <h1 className="hero__title">{(siteConfig as any).title}</h1>
          <p className="hero__subtitle">{(siteConfig as any).tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                "button button--outline button--secondary button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("docs/introduction")}
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
