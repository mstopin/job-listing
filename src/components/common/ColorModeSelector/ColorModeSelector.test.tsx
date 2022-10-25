import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import ColorModeSelector from './ColorModeSelector';

describe('ColorModeSelector', () => {
  it('should change color mode to dark', async () => {
    const classListMock = {
      add: jest.fn(),
      contains: jest.fn(),
    };
    const localStorageMock = {
      setItem: jest.fn(),
    };
    jest.spyOn(document, 'querySelector').mockImplementation(() => ({
      // @ts-ignore
      classList: classListMock,
    }));
    Storage.prototype.setItem = localStorageMock.setItem;

    render(<ColorModeSelector />);

    fireEvent.click(screen.getByLabelText('Use dark theme'));
    expect(
      await waitFor(() => screen.getByLabelText('Use light theme'))
    ).toBeInTheDocument();
    expect(classListMock.add).toHaveBeenCalledTimes(1);
    expect(localStorageMock.setItem).toHaveBeenCalledTimes(1);
    expect(localStorageMock.setItem).toHaveBeenCalledWith('isDark', 'true');
  });

  it('should change color mode to light', async () => {
    const classListMock = {
      remove: jest.fn(),
      contains: jest.fn().mockReturnValue(true),
    };
    const localStorageMock = {
      getItem: jest.fn().mockReturnValue(true),
      removeItem: jest.fn(),
    };
    jest.spyOn(document, 'querySelector').mockImplementation(() => ({
      // @ts-ignore
      classList: classListMock,
    }));
    Storage.prototype.getItem = localStorageMock.getItem;
    Storage.prototype.removeItem = localStorageMock.removeItem;

    render(<ColorModeSelector />);

    fireEvent.click(screen.getByLabelText('Use light theme'));
    expect(
      await waitFor(() => screen.getByLabelText('Use dark theme'))
    ).toBeInTheDocument();
    expect(classListMock.remove).toHaveBeenCalledTimes(1);
    expect(localStorageMock.removeItem).toHaveBeenCalledTimes(1);
    expect(localStorageMock.removeItem).toHaveBeenCalledWith('isDark');
  });
});
