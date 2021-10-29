import { configure, mount, ReactWrapper, shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

import { GasPerformance } from "./GasPerformance";
import { PerformanceContextProvider } from "../../helpers/Context";
import { data } from "../../data/Mock";

configure({ adapter: new Adapter() });

let wrapper: ReactWrapper;
describe("GasPerformance Component", function () {
  it("should render without crash", () => {
    const Component = (
      <PerformanceContextProvider value={data}>
        <GasPerformance />
      </PerformanceContextProvider>
    );
    wrapper = mount(Component);
    expect(wrapper).toBeTruthy();
  });
});
