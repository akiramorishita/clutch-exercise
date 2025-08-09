import Input from '../components/Input/Input';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Button from '../components/Button/Button';

export const LoanForm = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Header />
      <form>
        <h1 className="text-gray-500">Loan Form</h1>
        <p>This is the loan form page.</p>
        <Input id="totalLoanAmount" placeholder="Total Loan Amount" />

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
