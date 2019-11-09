import React, { useState, ChangeEvent } from 'react';
import Nav from './Nav';
import './add.css';

function submit() {
  console.log('We have submitted!')
}

export default function Add() {
  const [address, setAddress] = useState('')
  const [amount, setAmount] = useState('')

  const isValid = address.length && amount.length && amount.match(/[0-9]*\.?[0-9]*/)
  
  return (
    <div className="content">
      <Nav />
      <div className="form-control">
        <label>
          Who?
        </label>
        <input
          type="text"
          placeholder="Wallet or ENS address"
          required
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            e.preventDefault()
            setAddress(e.target.value)
          }}
        />
      </div>
      <div className="form-control">
        <label>
          How Much?
        </label>
        <input
          type="text"
          placeholder="Amount in USDC"
          required
          pattern="[0-9]*\.?[0-9]*"
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            e.preventDefault()
            setAmount(e.target.value)
          }}
        />
      </div>
      <button
        className={`fliff-it ${isValid ? 'valid' : 'invalid'}`}
        onClick={submit}
      >
        Fliff It!
      </button>
    </div>
  )
}
