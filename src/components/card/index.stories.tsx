/* eslint-disable react/prop-types */
import { Meta, Story } from '@storybook/react';
import { ICardProps } from './index.types';
import Card from '.';

const meta: Meta<ICardProps> = {
  title: 'Componentes/Card',
  component: Card,
};

const Template: Story<ICardProps> = (args) => {
  return (
    <Card {...args} />
  );
};

export const CardDefault = Template.bind({});
CardDefault.args = {
  title: 'Title Value',
  value: 'value text',
  location: 'Capital Federal',
  imageUrl: 'https://http2.mlstatic.com/D_NQ_NP_846738-MLA47781264197_102021-O.webp',
};

export default meta;
