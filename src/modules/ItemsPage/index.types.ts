import { ICardProps } from 'src/components/card/index.types';

export interface IItemsPageProps {
  items: Omit<ICardProps, 'onClick'>[]
  onClickItem(id: string): void
}
