import React from 'react';
import { Link } from 'react-router-dom';
import './newdebt.css'

export default function NewDebt() {
  return (
    <div className="newdebt">
      <Link className="newlink" to="/add">+</Link>
      <BalanceTable />
    </div>
  );
}

function BalanceTable() {
  return (
    <div className="balancetable">
      <div className="balancetablecell">
        <div>Balance</div><div>1486.64</div>
      </div>
      <div className="balancetablecell">
        <div>Credits</div><div className="credit">1500.01</div>
      </div>
      <div className="balancetablecell">
        <div>Debits</div><div className="debit">13.37</div>
      </div>
    </div>
  )
}
