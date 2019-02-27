import * as React from 'react'

export default class ErrorBoundary extends React.Component<
    any,
    { hasError: boolean }
> {
    static getDerivedStateFromError(error: object) {
        return { hasError: !!error }
    }

    constructor(props: any) {
        super(props)
        this.state = { hasError: false }
    }

    componentDidCatch(error: object, info: object) {
        console.log(error, info)
    }

    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong.</h1>
        }

        return this.props.children
    }
}
