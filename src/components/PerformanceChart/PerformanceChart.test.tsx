import { configure, mount, ReactWrapper, shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

import { PerformanceChart } from "./PerformanceChart";

configure({ adapter: new Adapter() });

let wrapper: ReactWrapper;
describe("PerformanceChart Component", function () {
  it("should render without crash", () => {
    const Component = <PerformanceChart options={{}} />;
    wrapper = mount(Component);
    expect(wrapper).toBeTruthy();
  });
});
