import React from 'react'

import { shallow } from 'enzyme';
import { expect } from 'chai'; // Utilisation de la syntaxe chai
import sinon from 'sinon'

import GuessCount from './GuessCount';
import Card from './Card'
import App from './App'

describe('<Card/>', () => {
  it('Appel l\'événement "onClick" quand une carte est cliquée', () => {
      const onClick = sinon.spy()
      const wrapper = shallow(
      <Card card="😁" feedback="hidden" index={0} onClick={onClick} />
      )

      wrapper.simulate('click')
      expect(onClick).to.have.been.calledWith(0)
  })

  it('Comparaison snapshot', () => {
    const onClick = sinon.spy()
    const wrapper = shallow(
    <Card card="😁" feedback="hidden" index={0} onClick={onClick} />
    )

    expect(wrapper).to.matchSnapshot()
  })
})

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