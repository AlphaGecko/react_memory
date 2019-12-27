import chai from 'chai'
import createChaiEnzyme from 'chai-enzyme';
import createChaiJestDiff from 'chai-jest-diff'
import sinonChai from 'sinon-chai'
import chaiJestSnapshot from 'chai-jest-snapshot'
import enzymeToJSON from 'enzyme-to-json/serializer'
import dirtychai from 'dirty-chai'
import { configure as configureEnzyme } from "enzyme";
import Adapter from 'enzyme-adapter-react-16'

chai
    .use(dirtychai)
    .use(chaiJestSnapshot) 
    .use(sinonChai) 
    .use(createChaiJestDiff()) // factory, donc ne pas oublier les parenthèses !
    .use(createChaiEnzyme())

expect.addSnapshotSerializer(enzymeToJSON)

configureEnzyme({ adapter: new Adapter() })