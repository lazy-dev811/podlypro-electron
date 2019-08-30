import React, { Component } from 'react';

import styles from './index.css';

type Props = {
  name: string,
  onFilesAdded: () => void,
  disabled: boolean
};

export default class Dropzone extends Component {
  props: Props;

  constructor(props) {
    super(props);
    this.state = { hightlight: false };
    this.fileInputRef = React.createRef();
  }

  openFileDialog = () => {
    const { disabled } = this.props;

    if (disabled) return;
    this.fileInputRef.current.click();
  };

  onFilesAdded = evt => {
    const { disabled, onFilesAdded } = this.props;

    if (disabled) return;
    const { files } = evt.target;
    if (onFilesAdded) {
      const array = this.fileListToArray(files);
      onFilesAdded(array);
    }
  };

  onDragOver = evt => {
    evt.preventDefault();
    const { disabled } = this.props;

    if (disabled) return;

    this.setState({ hightlight: true });
  };

  onDragLeave = () => {
    this.setState({ hightlight: false });
  };

  onDrop = event => {
    event.preventDefault();

    const { disabled, onFilesAdded } = this.props;

    if (disabled) return;

    const { files } = event.dataTransfer;
    if (onFilesAdded) {
      const array = this.fileListToArray(files);
      onFilesAdded(array);
    }
    this.setState({ hightlight: false });
  };

  fileListToArray = list => {
    const array = [];
    for (let i = 0; i < list.length; i += 1) {
      array.push(list.item(i));
    }
    return array;
  };

  render() {
    const { name, disabled } = this.props;
    const { hightlight } = this.state;
    return (
      <button
        type="button"
        className={
          hightlight
            ? `${styles.Dropzone} ${styles.Highlight}`
            : styles.Dropzone
        }
        onDragOver={this.onDragOver}
        onDragLeave={this.onDragLeave}
        onDrop={this.onDrop}
        onClick={this.openFileDialog}
        style={{ cursor: disabled ? 'default' : 'pointer' }}
      >
        <input
          ref={this.fileInputRef}
          className={styles.FileInput}
          type="file"
          multiple
          onChange={this.onFilesAdded}
        />
        <span>{name}</span>
      </button>
    );
  }
}
