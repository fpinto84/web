import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { I18nProvider } from '../../hooks/useI18n';
import Footer from '../Footer';

const renderWithProvider = (component: React.ReactElement) => {
  return render(<I18nProvider>{component}</I18nProvider>);
};

describe('Footer', () => {
  it('renders footer element', async () => {
    renderWithProvider(<Footer />);

    // Wait for content to load
    const footer = await screen.findByRole('contentinfo');
    expect(footer).toBeInTheDocument();
  });

  it('contains contact information', async () => {
    renderWithProvider(<Footer />);

    await screen.findByRole('contentinfo');

    // Should have links (social media, etc.)
    const links = screen.getAllByRole('link');
    expect(links.length).toBeGreaterThan(0);
  });

  it('displays copyright', async () => {
    renderWithProvider(<Footer />);

    await screen.findByRole('contentinfo');

    const copyrightText = screen.getByText(/2024|©/i);
    expect(copyrightText).toBeInTheDocument();
  });
});
