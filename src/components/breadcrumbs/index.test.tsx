import { composeStories } from '@storybook/testing-react';

import {
  render, screen,
} from '@testing-library/react';
import * as stories from './index.stories';

const {
  BreadcrumbsDefault,
} = composeStories(stories);

describe('Test for card component', () => {
  it('should match snapshot in default style', () => {
    const { container } = render(<BreadcrumbsDefault />);

    expect(container).toMatchSnapshot();
  });

  it('should have a text value in breadcrumb', () => {
    render(<BreadcrumbsDefault />);

    const findText = screen.getByText('Iphone > Smarthphone > 32GB');

    expect(findText).toBeTruthy();
  });
});
