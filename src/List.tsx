import React from 'react';
import Nav from './Nav';
import Address from './Address';
import NewDebt from './NewDebt';
import './list.css'

const balances: Balance[] = [
  {
    otherParty: '0x7ede84f17fdbd17cf820b6a984e6a3f62574ddd5',
    kind: 'debit',
    amount: 13.37,
  },
  {
    otherParty: '0xaFAEfc6dd3C9feF66f92BA838b132644451F0715',
    kind: 'credit',
    amount: 1500,
  },
]

export default function List() {
  return (
    <div className="content">
      <Nav />
      <ListContents balances={balances} />
      <NewDebt />
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
    <div className="balances">
    {balances.map(balance => {
      return (
        <ListItem balance={balance} key={balance.otherParty + '-' + balance.kind} />
      );
    })}
    </div>
  )
}

interface ListItemProps {
  balance: Balance
}

function ListItem({ balance }: ListItemProps) {
  return (
    <div className="balance">
      <div><Address address={balance.otherParty} /></div>
      <div>USDC</div>
      <div className={balance.kind}><span>{balance.amount}</span></div>
    </div>
  )
}
