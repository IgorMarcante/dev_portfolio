// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Card, Button } from 'react-materialize';
// Importando o componenet UserProfile
import UserProfile from '../user_profile/user_profile'

const ErrorPage = () => (
  <Row>
    <Col m={3} s={12}>
      <UserProfile />
    </Col>
    <Col m={8} s={12}>
        <h5>404 - Página não encontrada</h5>
        <Card>
          <Row>
          <p>Desculpe, não há nada para ver aqui...</p>
            <Col s={12} m={12}>
              <Button waves='light' className="right grey darken-2" node='a' href='/'> Home</Button>
            </Col>
          </Row>
        </Card>
    </Col>
  </Row>
);

export default ErrorPage;