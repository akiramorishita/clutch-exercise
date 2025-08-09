import Input from '../components/Input/Input';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Button from '../components/Button/Button';
import Select from '../components/Select/Select';
import { useState } from 'react';

export const LoanForm = () => {
  const [select, setSelect] = useState('');
  const [input, setInput] = useState('');
  return (
    <div>
      <Header />
      <form>
        <div style={{ margin: 16, display: 'flex', flexDirection: 'column', gap: 16 }}>
          <h1 className="text-gray-500">Loan Form</h1>
          <p>This is the loan form page.</p>
          <Input
            id="totalLoanAmount"
            value={input}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
            placeholder="Total Loan Amount"
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
      </form>
    </div>
  );
};
