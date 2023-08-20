import { act, fireEvent, render, screen } from "@testing-library/react";
import MenuRes from "../MenuRes";
import MOCK_DATA from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import Cart from "../Cart"
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});
jest.mock("../../../img/logofood.png", () => "logofood2.png");
it("it should load Restaurant Menu Component", async () => {
  await act(async () => {
    render(
       <BrowserRouter> 
      <Provider store={appStore}>
        <Header />
        <MenuRes />
        <Cart/>
      </Provider>
      </BrowserRouter>
    );
  });
  const accordianHeader = screen.getByText("London Doners (7)");
  fireEvent.click(accordianHeader);

  expect(screen.getAllByTestId("fooditems").length).toBe(7);
  const add = screen.getAllByRole("button", { name: "Add+" });
  fireEvent.click(add[0]);
  expect(screen.getByText("Cart-(1) items")).toBeInTheDocument()
  fireEvent.click(add[1])
  expect(screen.getByText("Cart-(2) items")).toBeInTheDocument()
  expect(screen.getAllByTestId("fooditems").length).toBe(9)
  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }))
  //expect(screen.getAllByTestId("fooditems").length).toBe(7)
  expect(screen.getByText("Cart-(0) items")).toBeInTheDocument()

});
