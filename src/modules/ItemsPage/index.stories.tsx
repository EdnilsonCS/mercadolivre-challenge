/* eslint-disable react/prop-types */
import { Meta, Story } from '@storybook/react';
import { IItemsPageProps } from './index.types';
import ItemsPage from '.';

const meta: Meta<IItemsPageProps> = {
  title: 'Page/ItemsPage',
  component: ItemsPage,
};

const Template: Story<IItemsPageProps> = (args) => {
  return (
    <ItemsPage {...args} />
  );
};

export const ItemsPageDefault = Template.bind({});
ItemsPageDefault.args = {
  items: [
    {
      id: '1',
      onClick: () => {},
      title: 'Title Value',
      value: 'value text',
      location: 'Capital Federal',
      imageUrl: 'https://http2.mlstatic.com/D_NQ_NP_846738-MLA47781264197_102021-O.webp',
    },
    {
      id: '2',
      onClick: () => {},
      title: 'Title Value',
      value: 'value text',
      location: 'Capital Federal',
      imageUrl: 'https://http2.mlstatic.com/D_NQ_NP_846738-MLA47781264197_102021-O.webp',
    },
    {
      id: '3',
      onClick: () => {},
      title: 'Title Value',
      value: 'value text',
      location: 'Capital Federal',
      imageUrl: 'https://http2.mlstatic.com/D_NQ_NP_846738-MLA47781264197_102021-O.webp',
    },
    {
      id: '4',
      onClick: () => {},
      title: 'Title Value',
      value: 'value text',
      location: 'Capital Federal',
      imageUrl: 'https://http2.mlstatic.com/D_NQ_NP_846738-MLA47781264197_102021-O.webp',
    },
  ],
};

export default meta;
