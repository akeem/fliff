import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import Nav from './Nav';
import Address from './Address';
import NewDebt from './NewDebt';
import './list.css'
import mergeBalances from './dataMungers'

const queryBy = (address: string) => gql`
  {
    debtor: debts(where: { _debtor: "${address}"}) {
      amount
      _debtor
      _debtee
    }
    debtee: debts(where: { _debtee: "${address}"}) {
      amount
      _debtor
      _debtee
    }
    settler: settlements(where: { _debtor: "${address}" }) {
      amount
      _debtor
      _debtee
    }
    settlee: settlements(where: { _debtee: "${address}" }) {
      amount
      _debtor
      _debtee
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

  const mergedBalances = mergeBalances(data)
  
  return (
    <div className="content">
      <Nav />
      <ListContents balances={mergedBalances} />
      <NewDebt />
    </div>
  )
}

interface Balances {
  credits: {
    [address: string]: number
  }
  debts: {
    [address: string]: number
  }
}

interface ListContentsProps {
  balances: Balances
}

function ListContents({ balances }: ListContentsProps) {
  console.log(balances)
  return (
    <div className="balances">
    {Object.keys(balances.debts).map(debtor => {
      return (
        <ListItem address={debtor} value={balances.debts[debtor]} kind="debt" key={debtor} />
      );
    })}
    </div>
  )
}

interface ListItemProps {
  address: string
  value: number
  kind: 'debt' | 'credit'
}

function ListItem({ address, value, kind }: ListItemProps) {
  return (
    <div className="balance">
      <div><Address address={address} /></div>
      <div>USDC</div>
      <div className={kind}><span>{value}</span></div>
    </div>
  )
}
