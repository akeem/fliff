interface Debt {
  amount: string
  _debtor: string
  _debtee: string
}

interface Settlement extends Debt {}

interface GraphResult {
  debtor: Debt[]
  debtee: Debt[]
  settler: Settlement[]
  settlee: Settlement[]
}

interface Value {
  [address: string]: number
}

interface MergedData {
  credits: Value
  debts: Value
}

export default function mergeBalances(graphData: GraphResult): MergedData {
  const debts: Value = {}
  
  graphData.debtor.forEach(debt => {
    const amount = parseInt(debt.amount)
    if (debts[debt._debtee]) {
      debts[debt._debtee] += amount
    } else {
      debts[debt._debtee] = amount
    }
  })

  graphData.settler.forEach(settlement => {
    const amount = parseInt(settlement.amount)
    debts[settlement._debtee] -= amount
  })

  const credits: Value = {}
  graphData.debtee.forEach(debt => {
    const amount = parseInt(debt.amount)
    if (credits[debt._debtor]) {
      credits[debt._debtor] += amount
    } else {
      credits[debt._debtor] = amount
    }
  })

  graphData.settlee.forEach(settlement => {
    const amount = parseInt(settlement.amount)
    credits[settlement._debtor] += amount
  })

  // time to filter out the zeroes
  Object.keys(debts).forEach(address => {
    if (debts[address] === 0) {
      delete debts[address]
    }
  })
  Object.keys(credits).forEach(address => {
    if (credits[address] === 0) {
      delete credits[address]
    }
  })

  return {
    credits,
    debts,
  }
}
