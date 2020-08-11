import React, { useState } from 'react'
import {Card, Button, Container, Row, Col} from 'react-bootstrap'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'
import { FaSearch } from 'react-icons/fa'

const Works = ({portfolioData}) => {
    
    const [isOpen, setIsOpen] = useState(false);

    const [photoIndex, setPhotoIndex] = useState(1);

    const images = portfolioData.works && portfolioData.works
    .map((work, index)=>{
        return {
            "img": "img/work/"+work.img,
            "desc": work.desc,
            "title": work.title
        }
    })

    const showImage = (index) =>{
        setPhotoIndex(index);
        setIsOpen(true);
    }
    return ( 
        <section className="resume-section" id="works">
            <div className="resume-section-content">
                <h2 className="mb-5">Works</h2>
                <Container>
                    <Row>
                        {
                            portfolioData.works && portfolioData.works
                            .map((work, index) => {
                                return (
                                    <Col sm={5} xs={10} key={index}>
                                        <Card style={{ marginBottom: '10px' }} >
                                            <Card.Img variant="top" src={"img/work/"+work.img} onClick={() => showImage(index)} />
                                            <Card.Body>
                                                <Row>
                                                    <Col xs={8}>
                                                        <Card.Title>{work.title}</Card.Title>
                                                        <Card.Text>
                                                            
                                                            {work.tech}
                                                        </Card.Text>
                                                    </Col>
                                                    <Col xs={2} className="show-image-btn">
                                                        <Button variant="outline-primary" onClick={() => showImage(index)}>
                                                            <FaSearch />
                                                        </Button>
                                                    </Col>
                                                </Row>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                )
                            })
                        }
                        
                    </Row>
                </Container>
                
                {isOpen && (
                    <Lightbox
                        mainSrc={images[photoIndex]["img"]}
                        nextSrc={images[(photoIndex + 1) % images.length]["img"]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]["img"]}
                        onCloseRequest={() => setIsOpen(false)}
                        onMovePrevRequest={() =>
                        setPhotoIndex(
                            (photoIndex + images.length - 1) % images.length,
                        )
                        }
                        onMoveNextRequest={() =>
                        setPhotoIndex(
                            (photoIndex + 1) % images.length,
                        )
                        }
                        imageCaption={images[photoIndex]["desc"]}
                        imageTitle={images[photoIndex]["title"]}
                    />
                )}
            </div>
        </section>
     );
}
 
export default Works;