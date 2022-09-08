import Image from 'next/image';
import { FC } from 'react';
import styles from './index.module.scss';
import { ICardProps } from './index.types';

const Card: FC<ICardProps> = ({
  title, value, location, imageUrl, onClick,
}) => {
  return (
    <div className={styles.container} data-testid="card-teste-id">
      <div className={styles.imageLogo}>
        <button type="button" onClick={onClick} className={styles.noButtonStyles} data-testid="button-image">
          <Image objectFit="cover" src={imageUrl} width="180px" height="180px" />
        </button>
      </div>

      <div className={styles.contentInformation}>
        <div>
          <span>
            $
            {' '}
            {value}
          </span>
          <Image src="/ic_shipping.png" width="18px" height="18px" alt={title} />
        </div>
        <button type="button" onClick={onClick} className={styles.noButtonStyles}>
          <h2>{title}</h2>
        </button>
      </div>

      <span className={styles.contentLocation}>
        {location}
      </span>

    </div>
  );
};

export default Card;
