import { render, screen } from "@testing-library/react"
import RestaurantCard, { withBadges } from "../RestaurantCard"
import MOCK_DATA from '../../components/mocks/resCardmock.json'
import "@testing-library/jest-dom";


it("should render Restaurantcard component with props data",()=>{
    render(<RestaurantCard resData={MOCK_DATA}/>)

   const resCardrendering=screen.getByText("Lavonne")
    expect(resCardrendering).toBeInTheDocument()
})
it("should render Restaurantcard component with props data", () => {
    const EnhancedRestaurantCard = withBadges(RestaurantCard);
  
    // Log the MOCK_DATA to see its structure
   // console.log(MOCK_DATA);
  
    render(<EnhancedRestaurantCard resData={MOCK_DATA} />);
  
    // Log the rendered HTML to see what's actually rendered
  
  
    const enhancedFeature = screen.getByText("Gourmet");
    const resCardRendering = screen.getByText("Lavonne");
    expect(enhancedFeature).toBeInTheDocument();
  });