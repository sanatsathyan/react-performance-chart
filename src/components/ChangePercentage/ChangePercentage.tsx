import "./ChangePercentage.scss";

type Props = {
  value: number;
};

export const ChangePercentage = ({ value }: Props) => {
  return (
    <div className={value >= 0 ? "increase-value" : "decrease-value"}>
      <div className="value-change-icon" />
      {value}%
    </div>
  );
};
