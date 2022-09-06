import { composeStories } from '@storybook/testing-react';

import {
  render, fireEvent, screen,
} from '@testing-library/react';
import * as stories from './index.stories';

const {
  SearchInputDefault,
} = composeStories(stories);

describe('Test for search input component', () => {
  it('should match snapshot in default style', () => {
    const { container } = render(<SearchInputDefault />);

    expect(container).toMatchSnapshot();
  });

  it('should render search input with a search image button', () => {
    render(<SearchInputDefault />);
  });

  it('should search input return a value in onSearchProps', () => {
    const onSearchMock = jest.fn();
    const mockedString = 'My Search';
    render(<SearchInputDefault onSearch={onSearchMock} />);

    const findButton = screen.getByRole('button');

    const findInput = screen.getByPlaceholderText('Placeholder');
    fireEvent.change(findInput, { target: { value: mockedString } });

    fireEvent.click(findButton);

    expect(onSearchMock).toBeCalledWith(mockedString);
  });

  it('should not call onSearch if input is empty', () => {
    const onSearchMock = jest.fn();
    render(<SearchInputDefault onSearch={onSearchMock} />);

    const findButton = screen.getByRole('button');
    fireEvent.click(findButton);

    expect(onSearchMock).not.toBeCalledWith();
  });
});
