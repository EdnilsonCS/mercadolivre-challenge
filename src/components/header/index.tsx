import Image from 'next/image';
import { FC } from 'react';
import Container from '../container';
import SearchInput from '../seacherInput';
import styles from './index.module.scss';
import { IHeaderProps } from './index.types';

const Header: FC<IHeaderProps> = ({
  onSearch,
}) => {
  return (
    <header className={styles.container}>
      <Container>
        <div className={styles.content}>
          <div className={styles.imageLogo}>
            <Image src="/Logo_ML.png" alt="Mercado libre logo" width={53} height={36} />
          </div>
          <SearchInput placeholder="Nunca dejes de buscar" onSearch={onSearch} />
        </div>
      </Container>
    </header>
  );
};

export default Header;
