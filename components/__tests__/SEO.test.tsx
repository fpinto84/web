import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { I18nProvider } from '../../hooks/useI18n';
import SEO from '../SEO';

const renderWithProviders = (component: React.ReactElement) => {
  return render(
    <HelmetProvider>
      <BrowserRouter>
        <I18nProvider>{component}</I18nProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
};

describe('SEO Component', () => {
  it('renders without crashing', () => {
    const { container } = renderWithProviders(<SEO />);
    expect(container).toBeTruthy();
  });

  it('is wrapped by Helmet provider', () => {
    const { container } = renderWithProviders(<SEO />);
    // Helmet doesn't render visible content, just updates head
    expect(container.firstChild).toBeNull();
  });
});
