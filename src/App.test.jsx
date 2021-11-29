// NPM Packages
import { render, screen } from "@testing-library/react";

// Project files
import App from "./App";

test("Should show the welcome screen if the list is empty", () => {
  // Arrange
  const mockData = [];

  Storage.prototype.getItem = jest.fn(() => JSON.stringify(mockData));

  render(
    <App />
  );

  // Act
  const textElement = screen.getByText(/Welcome to EIKA’s shopping list/i);

  // Assert
  expect(textElement).toBeInTheDocument();
});

test("The local storage key is null", () => {
  // Arrange
  const mockLocalStorageData = null;

  // localStorage.getItem()
  Storage.prototype.getItem = jest.fn(() => mockLocalStorageData); // null;

  render(<App />);

  // Act
  const textElement = screen.getByText(/Welcome to EIKA’s shopping list/i);

  // Assert
  expect(textElement).toBeInTheDocument();
});

test("The local storage has information (return > 1 items)", () => {
  // Arrange
  const mockData = [
    { id: 1, productName: "sofa", price: 9000, quantity: 1, isComplete: false },
  ];

  Storage.prototype.getItem = jest.fn(() => JSON.stringify(mockData));

  render(<App />);

  // Act
  const item = screen.getByText(/sofa/i);

  // Assert
  expect(item).toBeInTheDocument();
});
