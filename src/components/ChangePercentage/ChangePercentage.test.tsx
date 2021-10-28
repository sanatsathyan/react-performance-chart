import { configure, mount, ReactWrapper, shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

import { ChangePercentage } from "./ChangePercentage";

configure({ adapter: new Adapter() });

let wrapper: ReactWrapper;
describe("ChangePercentage Component", function () {
  it("should render without crash", () => {
    const Component = <ChangePercentage value={2} />;
    wrapper = mount(Component);
    expect(wrapper).toBeTruthy();
  });
  it("should have no children when value is zero!", function () {
    const Component = <ChangePercentage value={0} />;
    wrapper = mount(Component);
    expect(wrapper.children().length).toEqual(0);
  });
  it("should have increase-value class for positive value!", function () {
    const wrapper = shallow(<ChangePercentage value={2} />);
    expect(wrapper.find("#change-percentage").hasClass("increase-value"));
  });
  it("should have decrease-value class for negative value!", function () {
    const wrapper = shallow(<ChangePercentage value={-2} />);
    expect(wrapper.find("#change-percentage").hasClass("decrease-value"));
  });
});
