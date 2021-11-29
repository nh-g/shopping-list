// NPM Packages
import { render, screen, fireEvent } from "@testing-library/react";

// Project files
import Checkbox from "./Checkbox";

test("Should fire an event changes", async () => {
  // Arrange
  const fakeMethod = jest.fn();
  render(<Checkbox onChange={fakeMethod} />);

  // Act
  const inputCheckboxElement = screen.getByTestId("checkbox");

  fireEvent.click(inputCheckboxElement);

  // Assert
  expect(fakeMethod).toHaveBeenCalledTimes(1);
});

test("Should be checked when is true", async () => {
  // Arrange
  const fakeChecked = true;
  const fakeMethod = jest.fn();
  render(<Checkbox checked={fakeChecked} onChange={fakeMethod} />);

  // Act
  const inputCheckboxElement = screen.getByTestId("checkbox");

  // Assert
  expect(inputCheckboxElement.checked).toBe(true);
});

test("Should be unchecked when is false.", async () => {
  // Arrange
  const fakeChecked = false;
  const fakeMethod = jest.fn();
  render(<Checkbox checked={fakeChecked} onChange={fakeMethod} />);

  // Act
  const inputCheckboxElement = screen.getByTestId("checkbox");

  // Assert
  expect(inputCheckboxElement.checked).toBe(false);
});
