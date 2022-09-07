import { composeStories } from '@storybook/testing-react';

import {
  render, screen,
} from '@testing-library/react';
import * as stories from './index.stories';

const {
  ItemsPageDefault,
} = composeStories(stories);

describe('Test for search input component', () => {
  it('should match snapshot in default style', () => {
    const { container } = render(<ItemsPageDefault />);

    expect(container).toMatchSnapshot();
  });

  it('should have 4 itens', () => {
    render(<ItemsPageDefault />);

    const findItems = screen.getAllByTestId('card-teste-id');

    expect(findItems).toHaveLength(4);
  });
});
