import { render, screen } from '@testing-library/react';
import App from './App';

test('renders dance fitness brand and contact section', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /rhythm_with_sakshi/i })).toBeInTheDocument();
  expect(
    screen.getByRole('heading', {
      name: /reach out for workshops, private sessions, and collaborations/i,
    })
  ).toBeInTheDocument();
});
