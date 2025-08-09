import classNames from 'classnames';
import type { OfferResponse } from '../../../types/offers';
import './UserCostInfo.css';
import Skeleton from '../../../components/Skeleton/Skeleton';

type UserCostInfoProps = {
  data: OfferResponse | undefined;
  isLoading: boolean;
};

const UserCostInfo = ({ data, isLoading }: UserCostInfoProps) => {
  if (!isLoading && !data) {
    return null;
  }

  return (
    <div className="clutch-loanForm-userCostInfo__container">
      <div className="clutch-loanForm-userCostInfo__item">
        <h2 className="clutch-loanForm-userCostInfo__title">Monthly payment</h2>
        <Skeleton isLoading={isLoading}>
          <p className={classNames('clutch-loanForm-userCostInfo__value')}>
            ${data?.monthlyPayments || 0}
          </p>
        </Skeleton>
      </div>
      <div className="clutch-loanForm-userCostInfo__item">
        <h2 className="clutch-loanForm-userCostInfo__title">APR</h2>
        <Skeleton isLoading={isLoading}>
          <p className={classNames('clutch-loanForm-userCostInfo__value')}>{data?.apr}%</p>
        </Skeleton>
      </div>
    </div>
  );
};

export default UserCostInfo;
