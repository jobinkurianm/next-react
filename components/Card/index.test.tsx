import React from "react";
import { shallow } from "enzyme";
import Card from "../../components/Card";

let nominee = {
  title: "Nomadland",
  photoUrL: "https://variety.com/wp-content/uploads/2020/12/nomadland_ver2.jpg",
  id: "nomadland",
  isSelected: false,
};

describe("Promise Component is properly rendered with Props", () => {
  const data = null;
  const hasSubmitted = false;
  const handleSelection = jest.fn();
  const key = 0;
  const sectionID = "best-picture";
  const id = "mank";

  const component = shallow(
    <Card
      hasSubmitted={hasSubmitted}
      nominee={nominee}
      handleSelection={handleSelection}
      key={key}
      sectionID={sectionID}
      id={id}
    />
  );
  expect(component).toMatchSnapshot();

  it("should render all the Promise Card component", () => {
    expect(component.find("div.Card")).toHaveLength(1);
  });
});
