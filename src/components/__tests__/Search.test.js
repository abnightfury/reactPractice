import { act, fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListData.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";


global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});
it("should render the body component and search the list", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
   const searchBtn = screen.getByRole("button",{name:"Search"})
   const SearInput = screen.getByPlaceholderText("Search Restaurants")
   fireEvent.change(SearInput,{target:{value:"burger"}})
   fireEvent.click(searchBtn)
   
   const cards = screen.getAllByTestId("rescard")
   expect(cards.length).toBe(1);

});


it("should render the body component and search the list", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );
 
     
     const cardsbeforeFilter = screen.getAllByTestId("rescard")
     expect(cardsbeforeFilter.length).toBe(20);
     const toprated = screen.getByRole("button",{name : "Top Rated Button"})
     fireEvent.click(toprated)
     const cardsafterFilter = screen.getAllByTestId("rescard")
     expect(cardsafterFilter.length).toBe(16)
  });
