import React, { useState } from 'react'
import './portfolio.css'
import { portfolioLinks } from '../../helpers/portfolioLinks'
import { Image, Card, Row, Modal, Button, Container } from 'react-bootstrap'

function Portfolio() {
  const [modalShow, setModalShow] = useState(false);
  const [tempData, setTempData] = useState({})

  function createModal(data) {
    return (
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="lg"
        arial-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            {data.desc}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{data.summary}</p>
          <Image src={data.image} style={{ width: '200px' }} />
        </Modal.Body>
        <a id="portfolio__modal__link" href={data.link} target="_blank" rel="noreferrer">Go to site</a>
        <Modal.Footer>
          <div>Technologies used: </div>
          <p style={{ fontSize: '0.7rem', marginRight: 'auto' }}>{data.tech}</p>
          <Button onClick={() => setModalShow(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }

  const mapped = portfolioLinks.map((e, inx) => {
    return (
      <Card key={inx} id="portfolio__card__container">
        <Image className="portfolio__image"
          onClick={() => {
            setTempData({
              image: e.image,
              link: e.link,
              desc: e.desc,
              summary: e.summary,
              tech: e.tech
            })
            setModalShow(true)
          }}
          src={e.image} />
        <div className="portfolio__click__info">&#x1F50E;&#xFE0E;</div>
        {createModal(tempData)}
      </Card>
    )
  });

  return (
    <div className='portfolio__main__container' id='portfolio'>
      <h1>PORTFOLIO</h1>
      <p>This is my
        <a href='https://github.com/luifa04' target='_blank' rel='noreferrer'> GitHub</a>
      </p>
      <Container fluid='lg' style={{ padding: '2rem 0' }}>
        <Row>
          {mapped}
        </Row>
      </Container>
    </div>
  )
}

export default Portfolio