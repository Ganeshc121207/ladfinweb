import React, { useState } from 'react';
import { Calculator } from 'lucide-react';
import Button from './Button';

interface LoanCalculatorProps {
  className?: string;
}

interface PaymentSchedule {
  month: number;
  payment: number;
  principal: number;
  interest: number;
  balance: number;
}

const LoanCalculator: React.FC<LoanCalculatorProps> = ({ className = '' }) => {
  const [amount, setAmount] = useState<number>(100000);
  const [interestRate, setInterestRate] = useState<number>(10);
  const [duration, setDuration] = useState<number>(1);
  const [rateType, setRateType] = useState<'none' | 'annual' | 'monthly'>('none');
  const [interestType, setInterestType] = useState<'simple' | 'compound' | 'emi'>('simple');
  const [schedule, setSchedule] = useState<PaymentSchedule[]>([]);
  const [showResults, setShowResults] = useState(false);

  const calculateSimpleInterest = () => {
    const principal = amount;
    const rate = interestRate / 100;
    const numberOfMonths = rateType === 'annual' ? duration * 12 : duration;

    const totalInterest = rateType === 'annual'
      ? (principal * rate * duration)
      : (principal * rate * numberOfMonths);

    const monthlyInterest = totalInterest / numberOfMonths;
    const monthlyPrincipal = principal / numberOfMonths;
    const monthlyPayment = monthlyPrincipal + monthlyInterest;

    const newSchedule: PaymentSchedule[] = [];
    let remainingBalance = principal;

    for (let month = 1; month <= numberOfMonths; month++) {
      remainingBalance -= monthlyPrincipal;

      newSchedule.push({
        month,
        payment: monthlyPayment,
        principal: monthlyPrincipal,
        interest: monthlyInterest,
        balance: Math.max(0, remainingBalance)
      });
    }

    setSchedule(newSchedule);
    setShowResults(true);
  };

  const calculateCompoundInterest = () => {
    const principal = amount;
    const numberOfMonths = rateType === 'annual' ? duration * 12 : duration;
    const monthlyRate = rateType === 'annual'
      ? (interestRate / 12) / 100
      : interestRate / 100;

    const emi = monthlyRate === 0
      ? principal / numberOfMonths
      : (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfMonths)) /
        (Math.pow(1 + monthlyRate, numberOfMonths) - 1);

    const newSchedule: PaymentSchedule[] = [];
    let remainingBalance = principal;

    for (let month = 1; month <= numberOfMonths; month++) {
      const interest = remainingBalance * monthlyRate;
      const principalPart = emi - interest;
      remainingBalance -= principalPart;

      newSchedule.push({
        month,
        payment: emi,
        principal: principalPart,
        interest: interest,
        balance: Math.max(0, remainingBalance)
      });
    }

    setSchedule(newSchedule);
    setShowResults(true);
  };

  const calculateEMIInterest = () => {
    const principal = amount;
    const numberOfMonths = rateType === 'annual' ? duration * 12 : duration;
    const monthlyRate = rateType === 'annual'
      ? (interestRate / 12) / 100
      : interestRate / 100;

    const monthlyPrincipal = principal / numberOfMonths;
    let remainingBalance = principal;

    const newSchedule: PaymentSchedule[] = [];

    for (let month = 1; month <= numberOfMonths; month++) {
      const interest = remainingBalance * monthlyRate;
      const payment = monthlyPrincipal + interest;
      remainingBalance -= monthlyPrincipal;

      newSchedule.push({
        month,
        payment,
        principal: monthlyPrincipal,
        interest,
        balance: Math.max(0, remainingBalance)
      });
    }

    setSchedule(newSchedule);
    setShowResults(true);
  };

  const handleCalculate = () => {
    if (interestType === 'simple') {
      calculateSimpleInterest();
    } else if (interestType === 'compound') {
      calculateCompoundInterest();
    } else if (interestType === 'emi') {
      calculateEMIInterest();
    }
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(e.target.value) || 0, 0);
    setAmount(value);
  };

  const totalPayment = schedule.reduce((sum, item) => sum + item.payment, 0);
  const totalInterest = schedule.reduce((sum, item) => sum + item.interest, 0);

  return (
    <div className={`bg-secondary p-8 rounded-xl border border-gray-800 ${className}`}>
      <div className="flex items-center gap-4 mb-8">
        <Calculator className="w-8 h-8 text-primary" />
        <h3 className="text-2xl font-semibold text-white">Loan Calculator</h3>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-gray-300 mb-2">Loan Amount</label>
          <input
            type="number"
            min="0"
            value={amount}
            onChange={handleAmountChange}
            className="w-full bg-secondary-dark text-white px-4 py-2 rounded-lg border border-gray-700 focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-gray-300 mb-2">Interest Rate</label>
          <div className="flex items-center gap-4">
            <input
              type="number"
              min="0"
              max="100"
              step="0.1"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-2/3 bg-secondary-dark text-white px-4 py-2 rounded-lg border border-gray-700 focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <select
              value={rateType}
              onChange={(e) => setRateType(e.target.value as 'none' | 'annual' | 'monthly')}
              className="w-1/3 bg-secondary-dark text-white px-4 py-2 rounded-lg border border-gray-700 focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              <option value="none">Select Type</option>
              <option value="annual">Annual</option>
              <option value="monthly">Monthly</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-gray-300 mb-2">Interest Calculation Method</label>
          <select
            value={interestType}
            onChange={(e) => setInterestType(e.target.value as 'simple' | 'compound' | 'emi')}
            className="w-full bg-secondary-dark text-white px-4 py-2 rounded-lg border border-gray-700 focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            <option value="simple">Simple Interest</option>
            <option value="compound">Compound Interest</option>
            <option value="emi">EMI (Reducing Balance)</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-300 mb-2">
            {rateType === 'annual' ? 'Duration (years)' : 'Duration (months)'}
          </label>
          <input
            type="number"
            min="1"
            max={rateType === 'annual' ? 30 : 360}
            value={duration}
            onChange={(e) => setDuration(Number(e.target.value))}
            className="w-full bg-secondary-dark text-white px-4 py-2 rounded-lg border border-gray-700 focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>

        <Button variant="primary" size="lg" className="w-full" onClick={handleCalculate}>
          Calculate
        </Button>

        {showResults && (
          <>
            <div className="grid grid-cols-3 gap-4 p-6 bg-secondary-dark rounded-lg">
              <div>
                <p className="text-gray-400">Monthly Payment</p>
                <p className="text-2xl font-semibold text-primary">
                  ₹{schedule[0]?.payment.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                </p>
              </div>
              <div>
                <p className="text-gray-400">Total Interest</p>
                <p className="text-2xl font-semibold text-primary">
                  ₹{totalInterest.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                </p>
              </div>
              <div>
                <p className="text-gray-400">Total Amount</p>
                <p className="text-2xl font-semibold text-primary">
                  ₹{totalPayment.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                </p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-400">
                <thead className="text-xs uppercase bg-secondary-dark">
                  <tr>
                    <th className="px-4 py-3">Month</th>
                    <th className="px-4 py-3">Payment</th>
                    <th className="px-4 py-3">Principal</th>
                    <th className="px-4 py-3">Interest</th>
                    <th className="px-4 py-3">Balance</th>
                  </tr>
                </thead>
                <tbody>
                  {schedule.map((item) => (
                    <tr key={item.month} className="border-b border-gray-800">
                      <td className="px-4 py-3">{item.month}</td>
                      <td className="px-4 py-3">₹{item.payment.toLocaleString(undefined, { maximumFractionDigits: 2 })}</td>
                      <td className="px-4 py-3">₹{item.principal.toLocaleString(undefined, { maximumFractionDigits: 2 })}</td>
                      <td className="px-4 py-3">₹{item.interest.toLocaleString(undefined, { maximumFractionDigits: 2 })}</td>
                      <td className="px-4 py-3">₹{item.balance.toLocaleString(undefined, { maximumFractionDigits: 2 })}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        <Button variant="primary" size="lg" className="w-full">
          Apply Now
        </Button>
      </div>
    </div>
  );
};

export default LoanCalculator;
