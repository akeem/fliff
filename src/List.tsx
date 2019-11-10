import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
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
    amount: 1500.01,
  },
]

const queryBy = (address: string) => gql`
  {
    debtor: debts(where: { _debtor: "${address}"}) {
      id
      count
      amount
      _debtor
    }
    debtee: debts(where: { _debtee: "${address}"}) {
      id
    }
    settler: settlements(where: { _debtor: "${address}" }) {
      id
    }
    settlee: settlements(where: { _debtee: "${address}" }) {
      id
    }
  }
`

interface ListProps {
  address: string
}
export default function List({ address }: ListProps) {
  const { loading, error, data } = useQuery(queryBy(address))

  if (loading) {
    return (
      <div className="content">
        <Nav />
        <h1>Loading...</h1>
      </div>
    )
  } else if (error) {
    return (
      <div className="content">
        <Nav />
        <h1>It borked.</h1>
      </div>
    )
  }
  
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
