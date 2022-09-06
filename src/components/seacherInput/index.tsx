import Image from 'next/image';
import { FC, useRef } from 'react';
import styles from './index.module.scss';
import { ISearchInputProps } from './index.types';

const SearchInput: FC<ISearchInputProps> = ({
  placeholder,
  onSearch,
  ...rest
}) => {
  const inputRef = useRef<(HTMLInputElement | null)>(null);

  const handleSubmit = () => {
    if (inputRef.current?.value) {
      onSearch(inputRef.current?.value);
    }
  };

  return (
    <div className={styles.container}>
      <input
        ref={inputRef}
        type="text"
        aria-label="Campo de busca"
        placeholder={placeholder}
        {...rest}
      />
      <button type="button" onClick={handleSubmit} aria-label="Search">
        <Image src="/ic_Search.png" alt="Search Icon" width={20} height={20} />
      </button>
    </div>
  );
};

export default SearchInput;
