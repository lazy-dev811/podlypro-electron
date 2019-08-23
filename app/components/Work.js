import React, { Component } from 'react';

import Sidebar from '../containers/Sidebar';
import WorkStudio from '../containers/WorkStudio';
import styles from './Work.css';

type Props = {};

export default class Work extends Component<Props> {
  props: Props;

  render() {
    return (
      <div className={styles.container}>
        <Sidebar />
        <WorkStudio />
      </div>
    );
  }
}
