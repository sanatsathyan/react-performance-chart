import { configure, mount, ReactWrapper, shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

import { Tooltip } from "./Tooltip";

configure({ adapter: new Adapter() });

let wrapper: ReactWrapper;
describe("Tooltip Component", function () {
  it("should render without crash", () => {
    const Component = <Tooltip title="Test Tooltip" />;
    wrapper = mount(Component);
    expect(wrapper).toBeTruthy();
  });
});
