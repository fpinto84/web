import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { I18nProvider } from '../../hooks/useI18n';
import Header from '../Header';

const renderWithProviders = (component: React.ReactElement) => {
  return render(
    <BrowserRouter>
      <I18nProvider>{component}</I18nProvider>
    </BrowserRouter>
  );
};

describe('Header', () => {
  it('renders without crashing', () => {
    const { container } = renderWithProviders(<Header />);
    expect(container).toBeTruthy();
  });

  it('contains navigation', () => {
    const { container } = renderWithProviders(<Header />);
    const header = container.querySelector('header');
    expect(header).toBeTruthy();
  });
});
