import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App", () => {
  it("Clicking delete all should show the confirm alert", () => {
    render(<App />);
    const mockConfirm = jest.spyOn(window, "confirm");
    mockConfirm.mockImplementation(() => true);
    screen.getByText("Delete All").click();
    expect(mockConfirm).toHaveBeenCalledWith(
      "Are you sure you want to delete them all"
    );
  });
});

// 1 heading in header is 🛫 Far Away 🚅
// 2 one input , one select and a button is present in the document
// 3 when we click the  button the item is added to the list of array
// 4 when we click on X button the item is deleted
// 5 when we click on delete button the command window pops up
// 6 when we click on the ok all the items deleted
// 7 footer initial message exists
// 8 when we click on the button does the message changes
