import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import NavBar from "./NavBar";

describe("NavBar.tsx", () => {
  test("renders content", () => {
    const component = render(<NavBar />);
    component.getByText("Rickvana");
    component.getByText("Characters");
    component.getByText("Locations");
    component.getByText("Episodes");
  });
});
