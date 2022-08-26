import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Button from "./Button";

describe("Button.tsx", () => {
  test("renders content", () => {
    const component = render(
      <Button variant="primary" onClick={() => alert("hello world")}>
        click me
      </Button>
    );
    component.getByText("click me");
  });
});
