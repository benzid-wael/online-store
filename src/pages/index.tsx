import React from 'react'
import withRedux from 'next-redux-wrapper'

// import { store } from '../store/configureStore'
// import { Footer, Homepage } from '../components';
// import { AppContainer, HeaderContainer } from '../containers';

const Page = () => (
    <div className='App Homepage'>
        <h1>Hello World!</h1>
    </div>
)

// export default withRedux(store)(Page)
export default Page;