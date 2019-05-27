import React, { Component } from 'react'
import Promotion from './Promotion'
import CreditCards from './CreditCards'
import withOpen from './hocs/withOpen'

const PromotionWithOpen = withOpen(Promotion)
const CreditCardWithOpen = withOpen(CreditCards)

const App = () => {
   <div>
      <PromotionWithOpen />
      <CreditCardsWithOpen />
   </div>


}

export default App
