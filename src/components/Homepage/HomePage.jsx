import React from 'react'
import EsgData from './EsgData'
import Generate from './Generate'
import ReduceWaste from './ReduceWaste'
import Reusing from './Reusing'
import Header from './Header'

const HomePage = () => (
        <section className="w-100">
             <Header />
            <main>
                <div className="container">
                    <EsgData />
                    <Generate />
                    <Reusing />
                    <ReduceWaste />
                </div>
            </main>
        </section>
    )

export default HomePage
