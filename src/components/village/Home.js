import React from 'react'
import { Link } from 'react-router-dom'
import {  Col, Row, Glyphicon } from 'react-bootstrap'
import Traffle from './neighborhoods/Traffle'
import Draw from './neighborhoods/Draw'
import Winner from './neighborhoods/Winner'
import { StickyContainer, Sticky } from 'react-sticky';


export default class Home extends React.Component {

  state = {
    switch_code: 1,
    traffle_code: true,
    draw_code: false, 
    winner_code: false
  }


  switch_method(code){

    switch (code) {
      case 1:
          this.state.traffle_code = true
          this.state.winner_code = false
          this.state.draw_code = false
        break;
      
      case 2:
          this.state.draw_code = true
          this.state.winner_code = false
          this.state.traffle_code = false
        break;
      
      case 3:
          this.state.winner_code = true
          this.state.traffle_code = false
          this.state.draw_code = false
        break;
    
      default:
        break;
    }

    this.forceUpdate();
    
  }

      render() {
            return (
                 
                <StickyContainer>
                   <Sticky>{({ style }) =>
                   <header style={style}>

                      <div className="navigation">
                    <Row>
                    <Col lg={6} md={6} sm={6} xs={6}>
                      <p className="app-name">Traffle Draw</p>
                    </Col>
                    <Col lg={6} md={6} sm={6} xs={6} className="list">
                      <Link to='/menu_list'>
                          <Glyphicon glyph="option-vertical" style={{ fontSize: 20 }}/>
                      </Link>
                    </Col>
                    </Row>
                    <Row className="tabs">
                      
                      <Col lg={4} md={4} sm={4} xs={4}>
                        <p onClick={() => this.switch_method(1)}>
                          Traffles
                        </p>
                      </Col>
                      <Col lg={4} md={4} sm={4} xs={4}>
                      <p onClick={() => this.switch_method(2)}>
                          Draws
                        </p>
                      </Col>
                      <Col lg={4} md={4} sm={4} xs={4}>
                      <p onClick={() => this.switch_method(3)}>
                          Winners
                        </p>
                      </Col>
                    </Row>
                  </div>
                   
                  </header>
                     
                   }</Sticky>

                  <Row>
                    {this.state.traffle_code && (
                      <Traffle/>
                    )}

                    {this.state.draw_code && (
                      <Draw/>
                    )}

                    {this.state.winner_code && (
                      <Winner/>
                    )}
                  </Row>
                  </StickyContainer>
               
                )
              }
         }
      
