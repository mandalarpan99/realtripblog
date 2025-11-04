import Container from 'react-bootstrap/Container';
import {Row, Col} from 'react-bootstrap'
export const Home =()=>{
    return<>
    <section className="hero">
        <Container>
            <Row>
                <Col sm={5} md={5} lg={5} className='hero-content'>
                    <h1>Real Trip</h1>
                    <h2>Real Exprience</h2>
                    <h3>Real Places</h3>
                    <div className="hero-btn">
                        <a href='#packegs' className='button'>
                            Book Now
                            </a>
                    </div>
                </Col>
                <Col sm={5} md={5} lg={5} className='hero-image'>
                    <img src='/photos/hero-image.jpg' width={550} height={550}/>
                </Col>
            </Row>
        </Container>
    </section>
       
    </>
}