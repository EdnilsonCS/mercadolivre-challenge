import { composeStories } from '@storybook/testing-react';
import { render } from '@testing-library/react';
import * as stories from './index.stories';

const {
  ContainerDefault,
} = composeStories(stories);

describe('Test for container component', () => {
  it('should match snapshot in default style', () => {
    const { container } = render(<ContainerDefault />);

    expect(container).toMatchSnapshot();
  });
});
