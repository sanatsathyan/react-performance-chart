import PropTypes from "prop-types";
import { configure, mount, ReactWrapper, shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

import { GasPerformanceMetrics } from "./GasPerformanceMetrics";
import { data } from "../../data/Mock";
import { PerformanceContextProvider } from "../../helpers/Context";

configure({ adapter: new Adapter() });

let wrapper: ReactWrapper;
describe("GasPerformanceMetrics Component", function () {
  it("should render without crash", () => {
    const Component = (
      <PerformanceContextProvider value={data}>
        <GasPerformanceMetrics />
      </PerformanceContextProvider>
    );
    wrapper = mount(Component);
    expect(wrapper).toBeTruthy();
  });
});
