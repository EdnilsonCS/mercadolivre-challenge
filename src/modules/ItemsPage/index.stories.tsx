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
      title: 'Title Value',
      value: 'value text',
      location: 'Capital Federal',
      imageUrl: 'https://http2.mlstatic.com/D_NQ_NP_846738-MLA47781264197_102021-O.webp',
      isFullShipping: false,
    },
    {
      id: '2',
      title: 'Title Value',
      value: 'value text',
      location: 'Capital Federal',
      imageUrl: 'https://http2.mlstatic.com/D_NQ_NP_846738-MLA47781264197_102021-O.webp',
      isFullShipping: false,
    },
    {
      id: '3',
      title: 'Title Value',
      value: 'value text',
      location: 'Capital Federal',
      imageUrl: 'https://http2.mlstatic.com/D_NQ_NP_846738-MLA47781264197_102021-O.webp',
      isFullShipping: false,
    },
    {
      id: '4',
      title: 'Title Value',
      value: 'value text',
      location: 'Capital Federal',
      imageUrl: 'https://http2.mlstatic.com/D_NQ_NP_846738-MLA47781264197_102021-O.webp',
      isFullShipping: false,
    },
  ],
};

export default meta;
