import './LoanForm.css';

import Input from '../../components/Input/Input';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Button from '../../components/Button/Button';
import Select from '../../components/Select/Select';
import { useEffect, useState } from 'react';
import UserCostInfo from './components/UserCostInfo';
import { postOffer } from '../../api/offers';
import type { OfferResponse } from '../../types/offers';

const LoanForm = () => {
  const [select1, setSelect1] = useState('');
  const [input, setInput] = useState('');
  const [select2, setSelect2] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const [userCostInfo, setUserCostInfo] = useState<OfferResponse | undefined>();

  useEffect(() => {
    const getOffer = async () => {
      setIsLoading(true);
      const result = await postOffer({
        loanPurpose: select1,
        amount: Number(input),
        terms: Number(select2)
      });
      setUserCostInfo(result);
      setIsLoading(false);
    };

    if (select1 && input && select2) {
      getOffer();
    }
  }, [select1, input, select2]);

  return (
    <div className="clutch-loanForm">
      <Header />

      <div className="clutch-loanForm__container">
        <form className="clutch-loanForm__form">
          <h1 className="text-gray-500">Loan Information</h1>
          <div className="clutch-loanForm__fields">
            <Select
              id="loanPurpose"
              label="Loan Purpose"
              placeholder="Select an option"
              onChange={setSelect1}
              value={select1}
              options={[
                { value: 'debtConsolidation', label: 'Debt Consolidation' },
                { value: 'personal', label: 'Personal' },
                { value: 'apiError', label: 'API Error' }
              ]}
            />
            <Input
              id="totalLoanAmount"
              placeholder="Total Loan Amount"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <Select
              id="loanTerm"
              label="Loan Term (months)"
              placeholder="Select an option"
              onChange={setSelect2}
              value={select2}
              options={[
                { value: '12', label: '12 months' },
                { value: '24', label: '24 months' },
                { value: '36', label: '36 months' },
                { value: '48', label: '48 months' }
              ]}
            />
            <small>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sagittis dictum dignissim.
              In hac habitasse platea dictumst. Duis at efficitur dolor. Nulla id venenatis lectus,
              vitae laoreet magna. Etiam tincidunt ipsum sapien, sed convallis dui mollis eget.
              Vestibulum a cursus eros, et tempor odio. Integer ut lobortis metus. Curabitur
              elementum sapien quam, lobortis blandit ipsum varius at.
            </small>
            <UserCostInfo data={userCostInfo} isLoading={isLoading} />
          </div>
        </form>
      </div>
      <Footer>
        <Button
          text="Submit Application"
          role="submit"
          fullWidth
          onClick={() => {
            console.log('Submit!');
          }}
        />
      </Footer>
    </div>
  );
};

export default LoanForm;
