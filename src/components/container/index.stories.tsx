/* eslint-disable react/prop-types */
import { Meta, Story } from '@storybook/react';
import { IContainerProps } from './index.types';
import Container from './index';

const meta: Meta<IContainerProps> = {
  title: 'Componentes/Container',
  component: Container,
};

const Template: Story<IContainerProps> = () => {
  return (
    <Container>
      <div style={{ background: 'red' }}>test</div>
    </Container>
  );
};

export const ContainerDefault = Template.bind({});

export default meta;
