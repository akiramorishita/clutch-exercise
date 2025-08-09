import './UserCostInfo.css';
type DataType = {
  title: string;
  value: string;
};
type UserCostInfoProps = {
  data: DataType[];
};
const UserCostInfo = ({ data }: UserCostInfoProps) => {
  return (
    <div className="clutch-loanForm-userCostInfo__container">
      {data.map(({ title, value }) => (
        <div key={title} className="clutch-loanForm-userCostInfo__item">
          <h2 className="clutch-loanForm-userCostInfo__title">{title}</h2>
          <p className="clutch-loanForm-userCostInfo__value">{value}</p>
        </div>
      ))}
    </div>
  );
};

export default UserCostInfo;
