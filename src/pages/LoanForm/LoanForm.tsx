import './LoanForm.css';

import Input from '../../components/Input/Input';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Button from '../../components/Button/Button';
import Select from '../../components/Select/Select';
import { useState } from 'react';

const LoanForm = () => {
  const [select, setSelect] = useState('');
  const [input, setInput] = useState('');
  return (
    <div className="clutch-loanForm">
      <Header />

      <div className="clutch-loanForm__container">
        <form className="clutch-loanForm__form">
          <h1 className="text-gray-500">Loan Form</h1>
          <div className="clutch-loanForm__fields">
            <Input
              id="totalLoanAmount"
              placeholder="Total Loan Amount"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <Select
              id="loanPurpose"
              label="Loan Purpose"
              placeholder="Select an option"
              onChange={setSelect}
              value={select}
              options={[
                { value: 'debtConsolidation', label: 'Debt Consolidation' },
                { value: 'personal', label: 'Personal' },
                { value: 'apiError', label: 'API Error' }
              ]}
            />
            <small>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sagittis dictum dignissim.
              In hac habitasse platea dictumst. Duis at efficitur dolor. Nulla id venenatis lectus,
              vitae laoreet magna. Etiam tincidunt ipsum sapien, sed convallis dui mollis eget.
              Vestibulum a cursus eros, et tempor odio. Integer ut lobortis metus. Curabitur
              elementum sapien quam, lobortis blandit ipsum varius at.
            </small>
            <div>
              <div />
            </div>
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
