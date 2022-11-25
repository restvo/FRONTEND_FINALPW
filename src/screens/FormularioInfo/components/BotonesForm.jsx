import React from "react";
import { ButtonGroup,Button } from 'react-bootstrap'

const BotonesForm = () => {
    return <ButtonGroup vertical>
      <Button size="lg" variant="light">Order History</Button>
      <p> </p>
      <Button size="lg" variant="light">Profile Info</Button>
      <p> </p>
      <Button size="lg" variant="light">Log Out</Button>
      <p> </p>
      
      </ButtonGroup>
}

export default BotonesForm