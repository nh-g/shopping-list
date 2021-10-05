// NPM Packages
import { render, screen } from "@testing-library/react";

// Project files
import App from "./App";

test("Should show the welcome screen if the list is empty", () => {
  // Arrange
  const fakeData = [];

  Storage.prototype.getItem = jest.fn(() => JSON.stringify(fakeData));

  render(<App />);

  // Act
  const textElement = screen.getByText(/Welcome to EIKA’s shopping list/i);

  // Assert
  expect(textElement).toBeInTheDocument();
});
