import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '教育理念',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        培养能力、创造未来．
      </>
    ),
  },
  {
    title: '猿创编程专注于青少年教育培训',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        课程涵盖乐高创意启蒙课程、智能机器人编程、人工智能编程、NOIP信息学奥赛，国际机器人竞赛课程等
        完善的课程体系，助力中国孩子持续地系统化学习，与未来世界对话.
      </>
    ),
  },
  {
    title: '价值观',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        对待孩子耐心，致力于开发孩子的创造性
      </>
    ),
  },
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
