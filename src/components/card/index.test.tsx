import { composeStories } from '@storybook/testing-react';

import {
  render, fireEvent, screen,
} from '@testing-library/react';
import * as stories from './index.stories';

const {
  CardDefault,
} = composeStories(stories);

describe('Test for card component', () => {
  it('should match snapshot in default style', () => {
    const { container } = render(<CardDefault />);

    expect(container).toMatchSnapshot();
  });

  it('should have a title', () => {
    render(<CardDefault />);

    const findText = screen.getByText('Title Value');

    expect(findText).toBeTruthy();
  });

  it('should have a value text', () => {
    render(<CardDefault />);

    const findText = screen.getByText('$ value text');

    expect(findText).toBeTruthy();
  });

  it('should have a location text', () => {
    render(<CardDefault />);

    const findText = screen.getByText('Capital Federal');

    expect(findText).toBeTruthy();
  });

  it('should have a image', () => {
    render(<CardDefault />);

    const findImage = screen.getByAltText('Title Value');

    expect(findImage).toBeTruthy();
  });

  it('should call onClick if user click in title', () => {
    const onClickMock = jest.fn();
    render(<CardDefault onClick={onClickMock} />);

    const findTitle = screen.getByText('Title Value');

    fireEvent.click(findTitle);

    expect(onClickMock).toBeCalled();
  });

  it('should call onClick if user click in image', () => {
    const onClickMock = jest.fn();
    render(<CardDefault onClick={onClickMock} />);

    const findComponent = screen.getByTestId('button-image');

    fireEvent.click(findComponent);

    expect(onClickMock).toBeCalled();
  });
});
