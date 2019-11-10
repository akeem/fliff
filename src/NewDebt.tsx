import React from 'react';
import { Link } from 'react-router-dom';
import './newdebt.css'

interface Props {
  balances: any
}

export default function NewDebt({ balances }: Props) {
  return (
    <div className="newdebt">
      <Link className="newlink" to="/add">+</Link>
      <BalanceTable balances={balances} />
    </div>
  );
}

function BalanceTable({ balances }: Props) {
  let credit = 0
  Object.keys(balances.credits).forEach((key: string) => {
    credit += balances.credits[key]
  })
  let debt = 0
  Object.keys(balances.debts).forEach((key: string) => {
    debt += balances.debts[key]
  })

  let balance = credit - debt
  return (
    <div className="balancetable">
      <div className="balancetablecell">
        <div>Balance</div><div>{(balance / 10).toFixed(2)}</div>
      </div>
      <div className="balancetablecell">
        <div>Credits</div><div className="credit">{(credit / 10).toFixed(2)}</div>
      </div>
      <div className="balancetablecell">
        <div>Debts</div><div className="debt">{(debt / 10).toFixed(2)}</div>
      </div>
    </div>
  )
}
