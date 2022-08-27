import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Banner from "./Banner";

describe("Banner.tsx", () => {
  test("renders content", () => {
    const component = render(<Banner />);
    component.getByText("Rick and Morty");
  });
});
