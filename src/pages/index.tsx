import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className={styles.keplerPortraitRow}>
          <div className={styles.keplerPortraitFrame}>
            <img src="/img/kepler.jpg" alt="Johannes Kepler (1571–1630)" />
          </div>
          <div className={styles.keplerHeroText}>
            <Heading as="h1" className="hero__title">
              {siteConfig.title}
            </Heading>
            <p className="hero__subtitle">{siteConfig.tagline}</p>
            <p className={styles.keplerQuote}>
              «La música de las esferas celestiales resuena en la geometría del cosmos»
              <br />
              <span className={styles.keplerAttrib}>— Johannes Kepler, Harmonices Mundi, 1619</span>
            </p>
            <div className={styles.buttons}>
              <Link
                className="button button--secondary button--lg"
                to="/docs/intro">
                Explorar la Documentación
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function KeplerBio() {
  return (
    <section className={styles.keplerBioSection}>
      <div className="container">
        <div className={styles.keplerBioInner}>
          <div className={styles.keplerBioOrbit}>
            <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" width="120" height="120">
              <ellipse cx="60" cy="60" rx="55" ry="34" fill="none" stroke="#c9a84c" strokeWidth="1.5" strokeDasharray="4,3" opacity="0.6"/>
              <circle cx="38" cy="60" r="9" fill="#c9a84c" opacity="0.9"/>
              <circle cx="38" cy="60" r="6" fill="#f4d03f"/>
              <circle cx="114" cy="60" r="5" fill="#2c5f8a"/>
              <circle cx="60" cy="27" r="3" fill="#8b4513" opacity="0.8"/>
            </svg>
          </div>
          <div className={styles.keplerBioText}>
            <Heading as="h2">Johannes Kepler (1571–1630)</Heading>
            <p>
              Astrónomo y matemático alemán, figura fundamental de la Revolución Científica.
              Kepler descubrió las tres leyes del movimiento planetario que llevan su nombre,
              demostrando que los planetas orbitan el Sol en trayectorias elípticas.
            </p>
            <p>
              Su obra <em>Astronomia Nova</em> (1609) y <em>Harmonices Mundi</em> (1619)
              transformaron para siempre nuestra comprensión del cosmos y sentaron las bases
              para la mecánica celeste de Newton.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Kepler C# — Documentación inspirada en Johannes Kepler (1571–1630), astrónomo de la Revolución Científica">
      <HomepageHeader />
      <main>
        <KeplerBio />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
