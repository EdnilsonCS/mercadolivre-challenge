/* eslint-disable react/prop-types */
import { Meta, Story } from '@storybook/react';
import { ISearchInputProps } from './index.types';
import SearchInput from '.';

const meta: Meta<ISearchInputProps> = {
  title: 'Componentes/SearchInput',
  component: SearchInput,
  argTypes: {
    onSearch: { action: 'clicked' },
  },
};

const Template: Story<ISearchInputProps> = (args) => {
  return (
    <SearchInput {...args} />
  );
};

export const SearchInputDefault = Template.bind({});
SearchInputDefault.args = {
  placeholder: 'Placeholder',
};

export default meta;
