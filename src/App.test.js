import { shallow } from 'enzyme';
import { expect } from 'chai'; 
import React from 'react'

import App from './App'
import GuessCount from './GuessCount';

describe('<App />', () => {
  it('Ne crash pas !', () => {
    const wrapper = shallow(<App />)
  
    expect(wrapper).to.contain(<GuessCount guesses={0} />)
  })

  it('Possède 36 cartes', () => {
    const wrapper = shallow(<App />)
  
    expect(wrapper.find('Card')).to.have.length(36)
  })
})
