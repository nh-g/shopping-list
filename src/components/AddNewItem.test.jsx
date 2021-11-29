// NPM packages
import { render, screen, fireEvent } from "@testing-library/react";
import user from "@testing-library/user-event";

// Project files
import AddNewItem from "./AddNewItem";
import { requestNewItem } from "../scripts/add-item";
jest.mock("../scripts/add-item.js");

test("the AddItem form should display when '+ Add a new item' button be clicked", () => {
  // Arrange
  render(<AddNewItem />);

  // Act
  const buttonElement = screen.getByText("+ Add a new item");

  fireEvent.click(buttonElement);

  const titleQuery = screen.getByText("What's product name? *");
  const priceQuery = screen.getByText("What's product price? *");
  const quantityQuery = screen.getByText("How many items?");

  // Assert
  expect(titleQuery).toBeInTheDocument;
  expect(priceQuery).toBeInTheDocument;
  expect(quantityQuery).toBeInTheDocument;
});

test("should call the requestNewItem function when click Create button", () => {
  // Arrange
  render(<AddNewItem />);

  requestNewItem.mockReturnValue({
    id: 3,
    productName: "sofa",
    price: 9000,
    quantity: 1,
    isComplete: false,
  });

  const buttonAdd = screen.getByText("+ Add a new item");

  user.click(buttonAdd);

  // Act
  const buttonCreate = screen.getByText(/create/i);

  user.click(buttonCreate);

  // Assert
  expect(requestNewItem).toHaveBeenCalledTimes(1);
});
