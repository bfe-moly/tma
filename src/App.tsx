import React from 'react';
import styles from './style.module.less';

console.log('styles', styles);

function App() {
  return <div className={styles.title}>Hello Mako!</div>;
}

export { App };
