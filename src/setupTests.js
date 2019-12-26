import chai from 'chai'
import createChaiEnzyme from 'chai-enzyme';
import createChaiJestDiff from 'chai-jest-diff'
import sinonChai from 'sinon-chai'
import dirtychai from 'dirty-chai'
import { configure as configureEnzyme } from "enzyme";
import Adapter from 'enzyme-adapter-react-16'

chai
    .use(dirtychai)
    .use(createChaiJestDiff())
    .use(createChaiEnzyme())
    .use(sinonChai) // N'est pas une factory, donc pas de parenthèses !

configureEnzyme({ adapter: new Adapter() })