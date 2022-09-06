import { composeStories } from '@storybook/testing-react';

import {
  render, screen, fireEvent,
} from '@testing-library/react';
import * as stories from './index.stories';

const {
  HeaderDefault,
} = composeStories(stories);

describe('Test for search input component', () => {
  it('should match snapshot in default style', () => {
    const { container } = render(<HeaderDefault />);

    expect(container).toMatchSnapshot();
  });

  it('should have a enterprise icon', () => {
    render(<HeaderDefault />);

    const findImage = screen.getByAltText('Mercado libre logo');

    expect(findImage).toBeValid();
  });

  it('should return a value when the user search a item', () => {
    const onSearchMock = jest.fn();
    const mockedString = 'My Search';
    render(<HeaderDefault onSearch={onSearchMock} />);

    const findButton = screen.getByRole('button');

    const findInput = screen.getByPlaceholderText('Nunca dejes de buscar');
    fireEvent.change(findInput, { target: { value: mockedString } });

    fireEvent.click(findButton);

    expect(onSearchMock).toBeCalledWith(mockedString);
  });
});
