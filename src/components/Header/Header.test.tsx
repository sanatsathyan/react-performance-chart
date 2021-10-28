import { configure, mount, ReactWrapper, shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

import { Header } from "./Header";

configure({ adapter: new Adapter() });

let wrapper: ReactWrapper;
describe("Header Component", function () {
  it("should render without crash", () => {
    const Component = <Header title="Test Header" />;
    wrapper = mount(Component);
    expect(wrapper).toBeTruthy();
  });
  it("should show tooltip if content for tooltip is passed!", function () {
    const wrapper = shallow(
      <Header title="Test Header" tooltipContent="Test ToolTip" />
    );
    expect(wrapper.find("Tooltip").exists()).toBeTruthy();
  });
  it("should display text that is passed!", function () {
    const wrapper = shallow(<Header title="Test Header" />);
    expect(wrapper.find(".header-title").text()).toEqual("Test Header");
  });
});
