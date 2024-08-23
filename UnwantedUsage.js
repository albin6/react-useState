import React, { useEffect, useState } from 'react'

const PRICE_PER_ITEM = 5
function UnwantedUsage() {
    const [quantity, setQUantity] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)


    useEffect(() => {
        setTotalPrice(quantity * PRICE_PER_ITEM)
    }, [quantity])
    
  return (
    <div>
        <button onClick={setQUantity(quantity + 1)}>Add Item</button>
        <h1>{totalPrice}</h1>
    </div>
  )
}

export default UnwantedUsage