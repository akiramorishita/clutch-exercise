import Input from '../components/Input/Input';
import Header from '../components/Header/Header';

export const LoanForm = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Header />
      <h1 className="text-gray-500">Loan Form</h1>
      <p>This is the loan form page.</p>
      <Input id="totalLoanAmount" placeholder="Total Loan Amount" />
    </div>
  );
};
