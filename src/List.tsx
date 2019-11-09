import React from 'react';
import Nav from './Nav';

export default function List() {
  return (
    <div>
      <Nav />
      <ListContents balances={[]} />
    </div>
  )
}

interface Balance {
  kind: 'debit' | 'credit'
  otherParty: string
  amount: number
}

interface ListContentsProps {
  balances: Balance[]
}

function ListContents({ balances }: ListContentsProps) {
  return (
    <ul>
      {balances.map(balance => {
        return (
          <li key={balance.otherParty + '-' + balance.kind}>
            <ListItem balance={balance} />
          </li>
        );
      })}
    </ul>
  )
}


interface ListItemProps {
  balance: Balance
}
function ListItem({ balance }: ListItemProps) {
  return (
    <ul>
      <li>{balance.kind}</li>
      <li>{balance.otherParty}</li>
      <li>{balance.amount}</li>
    </ul>
  )
}
