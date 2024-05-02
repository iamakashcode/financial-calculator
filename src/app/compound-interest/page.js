"use client"
import Sidebar from '@/components/sidebar/Sidebar'
import React, { useState } from 'react'

export default function page() {
  const [principal, setPrincipal] = useState(100);
  const [annualRate, setAnnualRate] = useState(10);
  const [period, setPeriod] = useState(1);
  const [compoundFreq, setCompoundFreq] = useState(1);
  const [periodUnit, setPeriodUnit] = useState(1);
  const [interestEarned, setInterestEarned] = useState();
  const [totalAmount, setTotalAmount] = useState();
  function calculate(){
    let p = Number(principal);
    let r = Number(annualRate / 100);
    let t = Number(period / periodUnit);
    let n = Number(compoundFreq);
    console.log(n)
    let a = p * Math.pow(1 + r / n, n * t);
    console.log(a)
    let ci = a - p;
    let fi = Number(ci.toFixed(2))
    setInterestEarned(fi);
    setTotalAmount(a.toFixed(2))
  }
  return (
    <>
    <div className='content-container pt-4'>
      <h1 className='text-center text-2xl pb-10'>Compound Interest</h1>
      <div className='grid grid-cols-2 px-4 justify-center'>
        <div className='bg-slate-100 rounded-sm shadow p-8'>
          <p className='mr-3 pt-1'>Compound Frequency:</p>
          <select className='py-2 px-4 w-full' value={compoundFreq} onChange={(e)=>setCompoundFreq(e.target.value)}>
            <option value={365}>Daily</option>
            <option value={52}>Weekly</option>
            <option value={12}>Monthly</option>
            <option value={4}>Quaterly</option>
            <option value={1}>Yearly</option>
          </select>
          <p className='mt-4'>Principal Amount:</p>
          <input type='number' className='w-full rounded-lg py-2 px-3' value={principal} onChange={(e)=>setPrincipal(e.target.value)}></input>
          <p className='mt-4'>Annual Rate:</p>
          <input type='number' className='w-full rounded-lg py-2 px-3' value={annualRate} onChange={(e)=>setAnnualRate(e.target.value)}></input>
          <p className="mt-4">Period Unit:</p>
          <select className='py-2 px-4 w-full' value={periodUnit} onChange={(e)=>setPeriodUnit(e.target.value)}>
            <option value={365}>Daily</option>
            <option value={52}>Weekly</option>
            <option value={12}>Monthly</option>
            <option value={4}>Quaterly</option>
            <option value={1}>Yearly</option>
          </select>
          <p className='mt-4'>Period:</p>
          <input type='number' className='w-full rounded-lg py-2 px-3' value={period} onChange={(e)=>setPeriod(e.target.value)}></input>
          <p className='text-center mt-8'>
            <button className='bg-orange-500 px-8 py-2 rounded-lg text-white' onClick={calculate}>calculate</button>
          </p>
        </div>
        <div className='p-4'>
          <div className='shadow p-4'>
            <div className='flex justify-between py-4 border-bottom-gray'>
              <p>Interest Earned</p>
              <p>₹ {interestEarned}</p>
            </div>
            <div className='flex justify-between py-4 border-bottom-gray'>
              <p>Principal Amount</p>
              <p>₹ {principal}</p>
            </div>
            <div className='flex justify-between py-4'>
              <p>Total Amount</p>
              <p>₹ {totalAmount}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
