import React from 'react'
import TextInput from '../../components/TextInput/TextInput'

function Cart() {
  return (
    <>
      <div>Cart</div>
      <TextInput isTextarea={false} inputType='number' color='red' />
    </>
  )
}

export default Cart