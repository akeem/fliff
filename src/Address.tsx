import React, { useEffect, useState } from 'react';

interface Props {
  address: string
}

export default function Address({ address }: Props) {
  const [ensName, setEnsName] = useState(null);
  useEffect(() => {
    async function getEnsName() {
      try {
        const name = await (window as any).provider.lookupAddress(address)
        if (name) {
          setEnsName(name)
        }
      } catch (err) {
        console.log(err)
      }
    }

    getEnsName();
  }, [address]);

  return (
    <div>{ensName || address}</div>
  )
}
