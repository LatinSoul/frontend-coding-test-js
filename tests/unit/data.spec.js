import { mount, flushPromises } from '@vue/test-utils'
import axios from 'axios'
import Data from '@/components/Data.vue'

// Using Jest to mock api call with `axios.get`
jest.spyOn(axios, 'get')

describe('Data.vue', () => {
  it('loads data through axios', async () => {
    const wrapper = mount(Data)

    // Wait until the DOM updates.
    await flushPromises()

    // Check for axios 1x call and from the correct url
    expect(axios.get).toHaveBeenCalledTimes(1)
    expect(axios.get).toHaveBeenCalledWith('https://nekos.best/api/v2/hug?amount=10')
  })
})
