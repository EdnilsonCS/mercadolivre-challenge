/* eslint-disable react/prop-types */
import { Meta, Story } from '@storybook/react';
import { IItemPageProps } from './index.types';
import ItemPage from '.';

const meta: Meta<IItemPageProps> = {
  title: 'Page/ItemPage',
  component: ItemPage,
};

const Template: Story<IItemPageProps> = (args) => {
  return (
    <ItemPage {...args} />
  );
};

export const ItemPageDefault = Template.bind({});
ItemPageDefault.args = {
  title: 'Title Value',
  value: 'value text',
  description: 'description',
  imageUrl: '/Logo_ML.png',
  condition: 'new',
  soldQuantity: '240',
};

export default meta;
