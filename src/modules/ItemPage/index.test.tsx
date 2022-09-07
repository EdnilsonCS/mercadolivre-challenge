import { composeStories } from '@storybook/testing-react';

import {
  render, screen,
} from '@testing-library/react';
import * as stories from './index.stories';

const {
  ItemPageDefault,
} = composeStories(stories);

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    return <img {...props} alt={props.alt} />;
  },
}));

describe('Test for search input component', () => {
  it('should match snapshot in default style', () => {
    const { container } = render(<ItemPageDefault />);

    expect(container).toMatchSnapshot();
  });

  it('should image render a url link', () => {
    render(<ItemPageDefault />);
    const findImage = screen.getByAltText('Title Value');

    expect(findImage).toHaveAttribute('src', '/Logo_ML.png');
  });

  it('should have a quantity and conditions information', () => {
    render(<ItemPageDefault />);

    const findText = screen.getByText('new - 240 vendidos');

    expect(findText).toBeTruthy();
  });

  it('should have a title', () => {
    render(<ItemPageDefault />);

    const findTitle = screen.getByText('Title Value');
    expect(findTitle).toBeTruthy();
  });

  it('should have a description', () => {
    render(<ItemPageDefault />);

    const findTitle = screen.getByText('description');
    expect(findTitle).toBeTruthy();
  });
});
