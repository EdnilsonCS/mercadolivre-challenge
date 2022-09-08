import React, { useMemo } from 'react';
import styles from './index.module.scss';
import { IBreadCrumbsProps } from './index.types';

const BreadCrumbs: React.FC<IBreadCrumbsProps> = ({ categoryList }) => {
  const formattedCategory = useMemo(() => {
    const categoryLength = categoryList.length;
    let formattedString = '';

    categoryList.forEach((category, index) => {
      if (index !== 0 || index === categoryLength - 1) {
        formattedString = `${formattedString} > ${category}`;
      } else {
        formattedString += category;
      }
    });

    return formattedString;
  }, [categoryList]);

  return (
    <div className={styles.container}>
      <span>
        {formattedCategory}
      </span>
    </div>
  );
};

export default BreadCrumbs;
