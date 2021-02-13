import App from '../App';
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'

describe('App Component', () => {
    
    const tree = renderer.create(<App/>).toJSON()
    const wrapper = shallow(<App/>)

    it('display the result', () => {
        expect(tree).toMatchSnapshot()
    })

    it('should have one provider', () => {
        expect(wrapper.find('Provider')).toHaveLength(1)
    })

    it('should not have div', () => {
        expect(wrapper.find('div')).toHaveLength(0)
    })

    it('should have render', () => {
        expect(wrapper.render()).toHaveLength(2)
    })

    it('should have one router', () => {
        expect(wrapper.find('BrowserRouter')).toHaveLength(1)
    })

    it('should have one switch', () => {
        expect(wrapper.find('Switch')).toHaveLength(1)
    })
})