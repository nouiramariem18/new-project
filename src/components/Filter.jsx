import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';

function Filter({ titleFilter, setTitleFilter, ratingFilter, setRatingFilter }) {
  return (
    <Form className="mb-4">
      <Row>
        <Col md={6}>
          <Form.Control
            type="text"
            placeholder="Filtrer par titre"
            value={titleFilter}
            onChange={(e) => setTitleFilter(e.target.value)}
          />
        </Col>
        <Col md={6}>
          <Form.Control
            type="number"
            min={0}
            placeholder="Note minimale"
            value={ratingFilter === 0 ? '' : ratingFilter}
            onChange={(e) => setRatingFilter(e.target.value === '' ? 0 : Number(e.target.value))}
          />
          <div>Note minimale actuelle : {ratingFilter}</div>
        </Col>
      </Row>
    </Form>
  );
}

export default Filter;
