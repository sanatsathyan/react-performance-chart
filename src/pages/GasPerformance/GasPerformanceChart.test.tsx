import { configure, mount, ReactWrapper, shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

import { GasPerformanceChart } from "./GasPerformanceChart";
import { data } from "../../data/Mock";
import { PerformanceContextProvider } from "../../helpers/Context";

configure({ adapter: new Adapter() });

let wrapper: ReactWrapper;
describe("GasPerformanceChart Component", function () {
  it("should render without crash", () => {
    const Component = (
      <PerformanceContextProvider value={data}>
        <GasPerformanceChart />
      </PerformanceContextProvider>
    );
    wrapper = mount(Component);
    expect(wrapper).toBeTruthy();
  });
});
