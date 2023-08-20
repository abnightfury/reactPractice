import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("contact us page test case",()=>{
    test("should load contactus component", ()=>{
        render(<Contact/>)
        const heading = screen.getByRole("heading");
        
        //assertion
        expect(heading).toBeInTheDocument();
       
      
      })
      
      test("should load button contactus component", ()=>{
          render(<Contact/>)
          const button = screen.getByRole("button");
          
          //assertion
          expect(button).toBeInTheDocument();
         
        
        })
        it("should load input contactus component", ()=>{
          render(<Contact/>)
          const input = screen.getByPlaceholderText("Enter Name");//returns a jsx element 
          
          //assertion
          expect(input).toBeInTheDocument();
          
        
        })
})
