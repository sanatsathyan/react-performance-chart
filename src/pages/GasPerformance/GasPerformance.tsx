import { Header } from "../../components/Header/Header";
import { GasPerformanceMetrics } from "./GasPerformanceMetrics";

import { data } from "../../data/Mock";
import { PerformanceContextProvider } from "../../helpers/Context";
import { GasPerformanceChart } from "./GasPerformanceChart";

export const GasPerformance = () => {
  return (
    <PerformanceContextProvider value={data}>
      <div className="gas-performance-container">
        <Header
          title="Gas Performance"
          tooltipContent="This graph shows the gas performance from the mock data"
        />
        <GasPerformanceMetrics />
        <GasPerformanceChart />
      </div>
    </PerformanceContextProvider>
  );
};
