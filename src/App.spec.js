import { render, screen } from "@testing-library/react";
import App from "./App";

it("Happy path", () => {
  render(<App />);

  const h2 = screen.getByRole("heading", { name: /hello/i });
  screen.debug(h2);
  expect(h2).toBeInTheDocument();
});
