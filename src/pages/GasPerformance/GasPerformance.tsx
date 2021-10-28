import { Header } from "../../components/Header/Header";
import { GasPerformanceMetrics } from "./GasPerformanceMetrics";

import { GasPerformanceChart } from "./GasPerformanceChart";

export const GasPerformance = () => {
  return (
    <div className="gas-performance-container">
      <Header
        title="Gas Performance"
        tooltipContent="This graph shows the gas performance from the mock data"
      />
      <GasPerformanceMetrics />
      <GasPerformanceChart />
    </div>
  );
};
