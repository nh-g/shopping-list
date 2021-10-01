// NPM Packages
import {  render, screen} from "@testing-library/react";

// Project files
import ShowAcquiredToggler from "./ShowAcquiredToggler";

test("should say View acquired items when status is false.", () => {
  // Arrange
  const mockStatus = false;
  render(<ShowAcquiredToggler showCompleted={mockStatus} />);

  // Act
  const textElement = screen.getByText(/view acquired/i);

  // Assert
  expect(textElement).toBeInTheDocument();
});

test("should say Hide acquired items when status is true", () => {
  // Arrange
  const fakeStatus = true;
  render(<ShowAcquiredToggler showCompleted={fakeStatus} />);

  // Act
  const hideElement = screen.getByText(/hide acquired/i);

  // Assert
  expect(hideElement).toBeInTheDocument();
});
