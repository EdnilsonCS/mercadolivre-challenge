import React from 'react';
import styles from './index.module.scss';
import { IContainerProps } from './index.types';

const Container: React.FC<IContainerProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
};

export default Container;
