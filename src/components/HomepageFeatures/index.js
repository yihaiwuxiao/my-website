import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '办学愿景',
    Svg: require('@site/static/img/1.svg').default,
    description: (
      <>
        
      </>
    ),
  },
  {
    title: '育人目标',
    Svg: require('@site/static/img/4.svg').default,
    description: (
      <>
        育怡然灵创好少年．
      </>
    ),
  },
  {
    title: '融创课程',
    Svg: require('@site/static/img/3.svg').default,
    description: (
      <>
      融：五育融合，学科融合，信息技术与教育融合<br/>
      创：多元尝试，创新方法
      </>
    ),
  }
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
