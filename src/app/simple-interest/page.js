"use client"
import Sidebar from '@/components/sidebar/Sidebar'
import React, { useState } from 'react'

export default function page() {
  const [principal, setPrincipal] = useState(10000);
  const [annualRate, setAnnualRate] = useState(10);
  const [period, setPeriod] = useState(1);
  const [periodUnit, setPeriodUnit] = useState(1);
  const [interestEarned, setInterestEarned] = useState();
  const [totalAmount, setTotalAmount] = useState();
  function calculate(){
    let p = Number(principal);
    let r = Number(annualRate);
    let t = Number(period);
    let pu = Number(periodUnit);

    let si = ((p * r * t)/100) / pu;
    let fi = Number(si.toFixed(2))
    setInterestEarned(fi);
    console.log(typeof(fi))
    setTotalAmount(p + fi)
  }
  return (
    <>
    <div className='content-container pt-4'>
      <h1 className='text-center text-2xl pb-10'>Simple Interest</h1>
      <div className='grid grid-cols-2 px-4 justify-center'>
        <div className='bg-slate-100 rounded-sm shadow p-8'>
          <p>Principal Amount:</p>
          <input type='number' className='w-full rounded-lg py-2 px-3' value={principal} onChange={(e)=>setPrincipal(e.target.value)}></input>
          <p className='mt-4'>Annual Rate:</p>
          <input type='number' className='w-full rounded-lg py-2 px-3' value={annualRate} onChange={(e)=>setAnnualRate(e.target.value)}></input>
          <div className="grid grid-cols-5 my-4">
            <div className="flex">
              <input type="radio" name="periodUnit" value="365" onChange={(e)=>setPeriodUnit(e.target.value)}/>
              <p className='ml-1'>Days</p>
            </div>
            <div className="flex">
              <input type="radio" name="periodUnit" value="52" onChange={(e)=>setPeriodUnit(e.target.value)}/>
              <p className='ml-1'>Weeks</p>
            </div>
            <div className="flex">
              <input type="radio" name="periodUnit" value="12" onChange={(e)=>setPeriodUnit(e.target.value)}/>
              <p className='ml-1'>Months</p>
            </div>
            <div className="flex">
              <input type="radio" name="periodUnit" value="4" onChange={(e)=>setPeriodUnit(e.target.value)}/>
              <p className='ml-1'>Quaters</p>
            </div>
            <div className="flex">
              <input type="radio" name="periodUnit" value="1" onChange={(e)=>setPeriodUnit(e.target.value)} checked={periodUnit === 1}/>
              <p className='ml-1'>Years</p>
            </div>
          </div>
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
