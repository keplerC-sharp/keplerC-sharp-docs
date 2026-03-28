import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Primera Ley — Órbitas Elípticas',
    Svg: require('@site/static/img/kepler_laws.svg').default,
    description: (
      <>
        Los planetas orbitan el Sol en trayectorias elípticas, con el Sol en uno
        de los dos focos. Así como Kepler redefinió el cosmos, esta documentación
        redefine tu comprensión de C#.
      </>
    ),
  },
  {
    title: 'Segunda Ley — Áreas Iguales',
    Svg: require('@site/static/img/kepler_orbit.svg').default,
    description: (
      <>
        Una línea que une un planeta con el Sol barre áreas iguales en tiempos
        iguales. El conocimiento, como los planetas, avanza más rápido cuando
        está cerca de su fuente de energía.
      </>
    ),
  },
  {
    title: 'Tercera Ley — Armonía de las Esferas',
    Svg: require('@site/static/img/kepler_telescope.svg').default,
    description: (
      <>
        El cuadrado del período orbital es proporcional al cubo del semieje mayor.
        La armonía matemática que Kepler descubrió en los cielos vive también en
        la elegancia de C#.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.featuresHeader}>
          <h2>Las Tres Leyes de Kepler</h2>
          <p>Principios que gobiernan tanto el cosmos como el código</p>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
