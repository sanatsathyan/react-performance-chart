import "./ChangePercentage.scss";

type Props = {
  value: number;
};

export const ChangePercentage = ({ value }: Props) => {
  return !value || value === 0 ? (
    <></>
  ) : (
    <div className={value >= 0 ? "increase-value" : "decrease-value"}>
      <div className="value-change-icon" />
      {value}%
    </div>
  );
};
