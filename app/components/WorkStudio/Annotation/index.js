import React, { Component } from 'react';

import statusList from '../../../constants/status.json';
import styles from './index.css';

type Props = { status: string };

const txtAnnotations = {
  [statusList.NEW]: 'Please insert New Audio Clip.',
  [statusList.INSERTED]: 'Import audio from file or record from your mic.',
  [statusList.SELECTED_CLIP]:
    'Import audio from file or record from your mic. - SELECT_CLIP',
  [statusList.SELECTED_ENTIRE_CLIP]:
    'Please insert New Audio Clip. SELECT_ENTIRE_CLIP',
  [statusList.SLICED]: 'Please insert New Audio Clip. SLICED',
  [statusList.DRAGGING_CLIP]: 'Please insert New Audio Clip. DRAGGING_CLIP',
  [statusList.DRAGGING_CLIP_ANOTHER]:
    'Please insert New Audio Clip. DRAGGING_CLIP_ANOTHER',
  [statusList.EXTENDING_SELECTED_CLIP]:
    'Please insert New Audio Clip. EXTENDING_SELECTED_CLIP',
  [statusList.CROPPING_SELECTED_CLIP]:
    'Please insert New Audio Clip. CROPPING_SELECTED_CLIP',
  [statusList.MULTI_CLIPS]: 'Please insert New Audio Clip. MULTI_CLIPS'
};

export default class Annotation extends Component {
  props: Props;

  render() {
    const { status } = this.props;

    return (
      <div className={styles.container}>
        <div className={styles.textDescription}>{txtAnnotations[status]}</div>
      </div>
    );
  }
}
