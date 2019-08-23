import React, { Component } from 'react';
import styles from './index.css';

type Props = {};

export default class Sidebar extends Component {
  props: Props;

  render() {
    const arrfile = [];
    return (
      <div className={styles.container}>
        <div className={styles.title}>Project Name</div>
        <button type="button" className={styles.closeBtn}>
          Close Project
        </button>
        <div className={styles.fileList}>
          <a className={styles.addBtn}>+ Add audio file</a>
          {arrfile.length === 0 ? (
            <div className={styles.description}>
              You can also drag and drop audio files from your desktop.
            </div>
          ) : (
            <div className={styles.list} />
          )}
        </div>
        <div className={styles.fileList}>
          <a className={styles.addBtn}>Export</a>
          {arrfile.length === 0 ? (
            <div className={styles.description}>
              Distribute to your audience by exporting in the format you want.
            </div>
          ) : (
            <div className={styles.list} />
          )}
        </div>
      </div>
    );
  }
}
