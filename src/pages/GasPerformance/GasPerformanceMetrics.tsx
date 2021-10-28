import { useContext } from "react";

import { PerformanceHeader } from "../../components/PerformanceHeader/PerformanceHeader";
import { IGasPerformance } from "../../data/iMock";
import { PerformanceContext } from "../../helpers/Context";

import "./GasPerformance.scss";

export const GasPerformanceMetrics = () => {
  const apiContext = useContext<IGasPerformance>(PerformanceContext);

  const utilityMeasurementUnit = apiContext.utilityMeasurementUnit;

  const totalAggregations =
    apiContext.regions[0].facilities[0].totalAggregations;

  return (
    <div className="metrics-container">
      <PerformanceHeader
        title="Actual"
        value={`${
          totalAggregations.totalActualConsumption + utilityMeasurementUnit
        }`}
      />
      <PerformanceHeader
        title="Baseline"
        value={`${
          totalAggregations.totalBaselineConsumption + utilityMeasurementUnit
        }`}
      />
      <PerformanceHeader
        title="Savings"
        value={`${
          totalAggregations.totalConsumptionSavings + utilityMeasurementUnit
        }`}
        changePercentage={totalAggregations.totalConsumptionSavingsPercentage}
      />
      <div className="vertical-divider" />
      <PerformanceHeader
        title="Actual Cost"
        value={`$${totalAggregations.totalActualCost}`}
      />
      <PerformanceHeader
        title="Baseline Cost"
        value={`$${totalAggregations.totalBaselineCost}`}
      />
      <PerformanceHeader
        title="Savings"
        value={`$${totalAggregations.totalCostSavings}`}
        changePercentage={totalAggregations.totalCostSavingsPercentage}
      />
    </div>
  );
};
