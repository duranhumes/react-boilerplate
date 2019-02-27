import * as React from 'react'
import { render } from 'react-testing-library'

import Loader from '..'

it('renders without crashing', () => {
    const { getByText } = render(<Loader />)
    const { textContent } = getByText(/Loading/i)
    expect(textContent).toContain('Loading')
})
