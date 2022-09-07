import Image from 'next/image';
import { FC } from 'react';
import styles from './index.module.scss';
import { IItemPageProps } from './index.types';

const ItemPage: FC<IItemPageProps> = ({
  title, value, description, imageUrl, condition, soldQuantity,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.imageLogo}>
          <Image src={imageUrl} width="680px" height="680px" alt={title} />
        </div>
        <div className={styles.contentValues}>
          <span className={styles.quantitySoldOut}>
            {condition}
            {' '}
            -
            {' '}
            {soldQuantity}
            {' '}
            vendidos
          </span>
          <h2>{title}</h2>
          <span className={styles.value}>{value}</span>

          <button type="button">Comprar</button>
        </div>

      </div>

      <div className={styles.contentInformation}>
        <span>Descripción del producto</span>
        <p>
          {description}
        </p>
      </div>
    </div>
  );
};

export default ItemPage;
