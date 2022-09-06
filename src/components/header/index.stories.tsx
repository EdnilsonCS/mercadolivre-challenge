/* eslint-disable react/prop-types */
import { Meta, Story } from '@storybook/react';
import { IHeaderProps } from './index.types';
import Header from './index';

const meta: Meta<IHeaderProps> = {
  title: 'Componentes/Header',
  component: Header,
  argTypes: {
    onSearch: { action: 'clicked' },
  },
};

const Template: Story<IHeaderProps> = (args) => {
  return (
    <Header {...args} />
  );
};

export const HeaderDefault = Template.bind({});

export default meta;
