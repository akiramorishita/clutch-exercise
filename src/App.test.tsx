import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the app title', () => {
  render(<App />);
  expect(screen.getByText(/Click on the Vite and React logos to learn more/i)).toBeInTheDocument();
});
