import { FC } from 'react';
import Card from '../../components/card';
import { IItemsPageProps } from './index.types';

const ItemsPage: FC<IItemsPageProps> = ({
  items,
  onClickItem,
}) => {
  return (
    <div>
      {items.map((item) => {
        return <Card key={item.id} {...item} onClick={() => onClickItem(item.id)} />;
      })}
    </div>
  );
};

export default ItemsPage;
