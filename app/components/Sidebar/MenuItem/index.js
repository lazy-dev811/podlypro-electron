import React, { Component } from 'react';

import styles from './index.css';

type Props = {
  onClicked: () => void,
  name: string,
  status: boolean
};

export default class MenuItem extends Component {
  props: Props;

  render() {
    const { name, status, onClicked } = this.props;

    return (
      <button type="button" className={styles.container} onClick={onClicked}>
        <span className={status ? styles.active : styles.disable}>{name}</span>
      </button>
    );
  }
}
