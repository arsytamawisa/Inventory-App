import configureMockStore from 'redux-mock-store'
import { shallow } from 'enzyme';
import UnitList from './../pages/UnitList/UnitList';

const mockStore = configureMockStore()

describe('Unit List Component', () => {
    let wrapper, store

    beforeEach(()=>{
        const initialState = {
            findAllUnit: {
                data: null,
                loading: false,
                error: null
            },
            removeUnitById: {
                data: null,
                loading: false,
                error: null
            }
        }

        store = mockStore(initialState)
        wrapper = shallow(<UnitList store={store} />).dive()
    })

    it('should return the data state', () => {
        expect(wrapper.props().units).toStrictEqual([])
    })

    it('should return the loading [] from state', () => {
        expect(wrapper.props().isLoading).toBe(false)
    })

    it('should return the error null from state props', () => {
        expect(wrapper.props().error).toStrictEqual(null)
    })

    it('should return the data null from state props', () => {
        expect(wrapper.props().data).toStrictEqual(undefined)
    })
})