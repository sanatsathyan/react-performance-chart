import { configure, mount, ReactWrapper, shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

import { PerformanceHeader } from "./PerformanceHeader";

configure({ adapter: new Adapter() });

let wrapper: ReactWrapper;
describe("PerformanceHeader Component", function () {
  it("should render without crash", () => {
    const Component = (
      <PerformanceHeader value="20" title="Test Title" changePercentage={20} />
    );
    wrapper = mount(Component);
    expect(wrapper).toBeTruthy();
  });
  it("should display the passed value text!", function () {
    const wrapper = shallow(
      <PerformanceHeader value="20" title="Test Title" changePercentage={20} />
    );
    expect(wrapper.find(".performance-header-value").text()).toEqual("20");
  });
  it("should display the passed title text!", function () {
    const wrapper = shallow(
      <PerformanceHeader value="20" title="Test Title" changePercentage={20} />
    );
    expect(wrapper.find(".performance-header-title").text()).toEqual(
      "Test Title"
    );
  });
});
