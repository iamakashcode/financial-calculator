"use client"
import Sidebar from '@/components/sidebar/Sidebar'
import React, { useState } from 'react'

export default function page() {
  const [principal, setPrincipal] = useState(1000);
  const [annualRate, setAnnualRate] = useState(10);
  const [period, setPeriod] = useState(1);
//   const [compoundFreq, setCompoundFreq] = useState(1);
  const [periodUnit, setPeriodUnit] = useState(1);
  const [emi, setEmi] = useState();
  const [interest, setInterest] = useState();
  const [totalAmount, setTotalAmount] = useState();
  function calculate(){
    let p = Number(principal);
    let r = Number(annualRate);
    let t = Number(period / periodUnit);
    // let n = Number(compoundFreq);
    
    const MonthlyRate = r / (12 * 100);
    const months = t * 12;

    const e = (p * MonthlyRate * Math.pow(1 + MonthlyRate, months)) / (Math.pow(1 + MonthlyRate, months) - 1);
    const ti = e * months - p;
    const ta = p + ti;
    // const ta = e * months;

    setEmi(e.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ","));
    setInterest(ti.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ","));
    setTotalAmount(ta.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ","));

    // let a = p * Math.pow(1 + r / n, n * t);
    // console.log(a)
    // let ci = a - p;
    // let fi = Number(ci.toFixed(2))
    // setInterestEarned(fi);
    // setTotalAmount(a.toFixed(2))
  }
  return (
    <>
    <div className='content-container pt-4'>
      <h1 className='text-center text-2xl pb-10'>EMI Calculator</h1>
      <div className='grid grid-cols-2 px-4 justify-center'>
        <div className='bg-slate-100 rounded-sm shadow p-8'>
          {/* <p className='mr-3 pt-1'>Compound Frequency:</p>
          <select className='py-2 px-4 w-full' value={compoundFreq} onChange={(e)=>setCompoundFreq(e.target.value)}>
            <option value={365}>Daily</option>
            <option value={52}>Weekly</option>
            <option value={12}>Monthly</option>
            <option value={4}>Quaterly</option>
            <option value={1}>Yearly</option>
          </select> */}
          <p className='mt-4'>Loan Amount:</p>
          <input type='number' className='w-full rounded-lg py-2 px-3' value={principal} onChange={(e)=>setPrincipal(e.target.value)}></input>
          <p className='mt-4'>Annual Interest Rate:</p>
          <input type='number' className='w-full rounded-lg py-2 px-3' value={annualRate} onChange={(e)=>setAnnualRate(e.target.value)}></input>
          <div className='grid grid-cols-2 gap-3'>
            <div>
                <p className='mt-4'>Loan Terms:</p>
                <input type='number' className='w-full rounded-lg py-2 px-3' value={period} onChange={(e)=>setPeriod(e.target.value)}></input>
            </div>
            <div className='pt-10'>
                <select className='py-2 px-4 w-full' value={periodUnit} onChange={(e)=>setPeriodUnit(e.target.value)}>
                    <option value={1}>Years</option>
                    <option value={4}>Quaters</option>
                    <option value={12}>Months</option>
                    <option value={52}>Weeks</option>
                    <option value={365}>Days</option>
                </select>
            </div>
          </div>
          <p className='text-center mt-8'>
            <button className='bg-orange-500 px-8 py-2 rounded-lg text-white' onClick={calculate}>calculate</button>
          </p>
        </div>
        <div className='p-4'>
          <div className='shadow p-4'>
          <div className='flex justify-between py-4 border-bottom-gray'>
              <p>Monthly Repayment (Emi)</p>
              <p>₹ {emi}</p>
            </div>
            <div className='flex justify-between py-4 border-bottom-gray'>
              <p>Interest Paid</p>
              <p>₹ {interest}</p>
            </div>
            <div className='flex justify-between py-4 border-bottom-gray'>
              <p>Principal Amount</p>
              <p>₹ {principal}</p>
            </div>
            <div className='flex justify-between py-4'>
              <p>Total Repayment</p>
              <p>₹ {totalAmount}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
