import { FC } from 'react';
import Card from '../../components/card';
import { IItemsPageProps } from './index.types';

const ItemsPage: FC<IItemsPageProps> = ({
  items,
}) => {
  return (
    <div>
      {items.map((item) => {
        return <Card key={item.id} {...item} />;
      })}
    </div>
  );
};

export default ItemsPage;
