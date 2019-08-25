import React, { Component } from 'react';

import styles from './index.css';

type Props = {};

export default class Ruler extends Component {
  props: Props;

  render() {
    return <div className={styles.container} />;
  }
}
