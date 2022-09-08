/* eslint-disable react/prop-types */
import { Meta, Story } from '@storybook/react';
import { IBreadCrumbsProps } from './index.types';
import Breadcrumbs from '.';

const meta: Meta<IBreadCrumbsProps> = {
  title: 'Componentes/Breadcrumbs',
  component: Breadcrumbs,
};

const Template: Story<IBreadCrumbsProps> = (args) => {
  return (
    <Breadcrumbs {...args} />
  );
};

export const BreadcrumbsDefault = Template.bind({});
BreadcrumbsDefault.args = {
  categoryList: ['Iphone', 'Smarthphone', '32GB'],
};

export default meta;
