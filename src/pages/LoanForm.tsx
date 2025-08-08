import Input from '../components/Input/Input';

export const LoanForm = () => {
  return (
    <div>
      <h1 className="text-gray-500">Loan Form</h1>
      <p>This is the loan form page.</p>
      <Input id="totalLoanAmount" placeholder="Total Loan Amount" />
    </div>
  );
};
