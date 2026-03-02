
import Hero from '@components/Hero/Hero'
import Nav from '@components/Nav/Nav'
import About from '@components/About/About'
import Services from '@components/Services/Services'
import Portfolio from '@components/Portfolio/Portfolio'
import Form from '@components/Form/Form'
import Footer from '@components/Footer/Footer'



export default function Home() {
    return (
        <>
            <Nav />
            <Hero />
            <About />
            <Services />
            <Portfolio />
            <Form />
            <Footer />
                
        </>
    )
}