import React, { useState } from 'react';
import Header from './Header'
import { Table, Form, Button, Row, Col, Container,
    Card, Breadcrumb ,Tabs, Tab,Alert} from 'react-bootstrap';
    import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRotateRight,
  faPlus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import Modal from 'react-bootstrap/Modal';

function Categories() {
    const [filterText, setFilterText] = useState('');
    const [status, setStatus] = useState("");
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [key, setKey] = useState('general');
    const categories = [
        {
          id: 1,
          name: "Cameras",
          sortOrder: 6,
          image: "https://t3.ftcdn.net/jpg/00/79/36/04/360_F_79360425_13tH0FGR7nYTNlXWKOWtLmzk7BAikO1b.jpg",
        },
        {
          id: 2,
          name: "Components",
          sortOrder: 3,
          image: "https://t3.ftcdn.net/jpg/00/79/36/04/360_F_79360425_13tH0FGR7nYTNlXWKOWtLmzk7BAikO1b.jpg",
        },
        {
          id: 3,
          name: "Components > Mice and Trackballs",
          sortOrder: 1,
          image: "https://t3.ftcdn.net/jpg/00/79/36/04/360_F_79360425_13tH0FGR7nYTNlXWKOWtLmzk7BAikO1b.jpg",
        },
        {
          id: 4,
          name: "Components > Monitors",
          sortOrder: 1,
          image: "https://t3.ftcdn.net/jpg/00/79/36/04/360_F_79360425_13tH0FGR7nYTNlXWKOWtLmzk7BAikO1b.jpg",
        },
        {
          id: 5,
          name: "Components > Monitors > test 1",
          sortOrder: 0,
          image: "https://t3.ftcdn.net/jpg/00/79/36/04/360_F_79360425_13tH0FGR7nYTNlXWKOWtLmzk7BAikO1b.jpg",
        },
      ];
    
      const filtered = categories.filter((cat) =>
        cat.name.toLowerCase().includes(filterText.toLowerCase())
      );

      
  return (
    <div>
     <Header/>
     <div style={{
         marginLeft: '250px', // same as sidebar width
         marginTop: '70px',   // space below the navbar
         padding: '20px',
         backgroundColor: '#f4f4f4',
         minHeight: '100vh'
       }}>

<div className="p-4">
<Container fluid className="mt-4 mb-3">
      <Row className="align-items-center">
        {/* Left: Title + Breadcrumb */}
        <Col md={6}>
          <h4 className="mb-0">Categories</h4>
          <Breadcrumb className="mb-0">
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item active>Categories</Breadcrumb.Item>
          </Breadcrumb>
        </Col>

        {/* Right: Buttons */}
        <Col md={6} className="text-end">
          <Button variant="warning" className="me-2">
            <FontAwesomeIcon icon={faRotateRight} />
          </Button>
          <Button onClick={handleShow} variant="primary" className="me-2">
            <FontAwesomeIcon icon={faPlus} />
          </Button>
          <Button variant="danger">
            <FontAwesomeIcon icon={faTrash} />
          </Button>
        </Col>
      </Row>
    </Container>

      <Container fluid>
      <Row className="mt-4">
        {/* Left: Table Section */}
        <Col md={9}>
          <Card>
            <Card.Header className="fw-bold">Category List</Card.Header>
            <Card.Body className="p-0">
              <Table bordered hover responsive className="mb-0">
                <thead className="table-light">
                  <tr>
                    <th>
                      <Form.Check type="checkbox" />
                    </th>
                    <th>Image</th>
                    <th>
                      <span className="text-primary">Category Name ↑</span>
                    </th>
                    <th className="text-primary">Sort Order</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((cat) => (
                    <tr key={cat.id}>
                      <td>
                        <Form.Check type="checkbox" />
                      </td>
                      <td>
                        <img
                          src={cat.image}
                          alt="category"
                          width="32"
                          height="32"
                        />
                      </td>
                      <td>{cat.name}</td>
                      <td>{cat.sortOrder}</td>
                      <td>
                        <Button variant="primary" size="sm">
                          ✏️
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>

        {/* Right: Filter Section */}
        <Col md={3}>
          <Card>
            <Card.Header className="fw-bold">Filter</Card.Header>
            <Card.Body>
              <Form.Group className="mb-3">
                <Form.Label>Category Name</Form.Label>
                <Form.Control
                  placeholder="Category Name"
                  value={filterText}
                  onChange={(e) => setFilterText(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Status</Form.Label>
                <Form.Select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value="">Select</option>
                  <option value="enabled">Enabled</option>
                  <option value="disabled">Disabled</option>
                </Form.Select>
              </Form.Group>

              <div className="d-flex gap-2">
                <Button variant="dark" className="w-100">
                  🔍 Filter
                </Button>
                <Button variant="secondary" className="w-100">
                  ❌ Reset
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </div>
    




















      {/* modal of add categoreies--------------------------------------------------------------------- */}
        
      <Modal show={show} onHide={handleClose} size="xl">
      <Modal.Header closeButton>
        <Modal.Title>Add Category</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Tabs activeKey={key} onSelect={(k) => setKey(k)} className="mb-3">
        <Tab eventKey="general" title="General">
  <Form style={{
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.06)'
  }}>
    <Form.Group className="mb-3">
      <Form.Label style={{ fontWeight: '600', color: '#333' }}>Category Name</Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter category name"
        style={{
          borderRadius: '8px',
          border: '1px solid #ccc',
          transition: 'border-color 0.3s, box-shadow 0.3s'
        }}
      />
    </Form.Group>

    <Form.Group className="mb-3">
      <Form.Label style={{ fontWeight: '600', color: '#333' }}>Description</Form.Label>
      <Form.Control
        as="textarea"
        rows={5}
        placeholder="Enter description"
        style={{
          borderRadius: '8px',
          border: '1px solid #ccc',
          transition: 'border-color 0.3s, box-shadow 0.3s'
        }}
      />
    </Form.Group>

    <Form.Group className="mb-3">
      <Form.Label style={{ fontWeight: '600', color: '#333' }}>Meta Tag Title</Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter meta tag title"
        style={{
          borderRadius: '8px',
          border: '1px solid #ccc',
          transition: 'border-color 0.3s, box-shadow 0.3s'
        }}
      />
    </Form.Group>

    <Form.Group className="mb-3">
      <Form.Label style={{ fontWeight: '600', color: '#333' }}>Meta Tag Description</Form.Label>
      <Form.Control
        as="textarea"
        rows={3}
        placeholder="Enter meta tag description"
        style={{
          borderRadius: '8px',
          border: '1px solid #ccc',
          transition: 'border-color 0.3s, box-shadow 0.3s'
        }}
      />
    </Form.Group>

    <Form.Group className="mb-3">
      <Form.Label style={{ fontWeight: '600', color: '#333' }}>Meta Tag Keywords</Form.Label>
      <Form.Control
        as="textarea"
        rows={2}
        placeholder="Enter meta tag keywords"
        style={{
          borderRadius: '8px',
          border: '1px solid #ccc',
          transition: 'border-color 0.3s, box-shadow 0.3s'
        }}
      />
    </Form.Group>
  </Form>
</Tab>


          <Tab eventKey="data" title="Data">
          <Form style={{
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.06)'
  }}>
    {/* Parent Field */}
    <Form.Group className="mb-3">
      <Form.Label style={{ fontWeight: '600', color: '#333' }}>Parent</Form.Label>
      <Form.Control
        type="text"
        placeholder="Parent"
        style={{
          borderRadius: '8px',
          border: '1px solid #ccc'
        }}
      />
      <Form.Text muted>(Autocomplete)</Form.Text>
    </Form.Group>

    {/* Filters */}
    <Form.Group className="mb-3">
      <Form.Label style={{ fontWeight: '600', color: '#333' }}>Filters</Form.Label>
      <Form.Control
        as="textarea"
        rows={3}
        placeholder="Filters"
        style={{
          borderRadius: '8px',
          border: '1px solid #ccc'
        }}
      />
      <Form.Text muted>(Autocomplete)</Form.Text>
    </Form.Group>

    {/* Stores */}
    <Form.Group className="mb-3">
      <Form.Label style={{ fontWeight: '600', color: '#333' }}>Stores</Form.Label>
      <div style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '8px' }}>
        <Form.Check type="checkbox" label="Default" />
      </div>
    </Form.Group>

    {/* Image Upload Preview */}
    <Form.Group className="mb-3">
      <Form.Label style={{ fontWeight: '600', color: '#333' }}>Image</Form.Label>
      <div style={{
        width: '150px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '5px',
        textAlign: 'center'
      }}>
        <img src="https://via.placeholder.com/120x100.png?text=Preview" alt="Preview"
          style={{ width: '100%', borderRadius: '6px', marginBottom: '8px' }} />
        <Button variant="primary" size="sm" style={{ width: '100%', marginBottom: '5px' }}>✎ Edit</Button>
        <Button variant="warning" size="sm" style={{ width: '100%' }}>✖ Clear</Button>
      </div>
    </Form.Group>

    {/* Sort Order */}
    <Form.Group className="mb-3">
      <Form.Label style={{ fontWeight: '600', color: '#333' }}>Sort Order</Form.Label>
      <Form.Control
        type="number"
        defaultValue="0"
        style={{
          width: '100px',
          borderRadius: '8px',
          border: '1px solid #ccc'
        }}
      />
    </Form.Group>

    {/* Status Switch */}
    <Form.Group className="mb-3">
      <Form.Label style={{ fontWeight: '600', color: '#333' }}>Status</Form.Label>
      <div>
        <Form.Check
          type="switch"
          id="custom-switch"
          label=""
          defaultChecked
        />
      </div>
    </Form.Group>
  </Form>
          </Tab>
          <Tab eventKey="seo" title="SEO">
            <Form style={{
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.06)'
  }}>
    {/* Info Alert */}
    <Alert variant="info">
      <strong>Do not use spaces</strong>, instead replace spaces with <code>-</code> and make sure the SEO URL is globally unique.
    </Alert>

    {/* SEO URL Table */}
    <Table bordered hover responsive style={{ marginTop: '20px' }}>
      <thead>
        <tr>
          <th style={{ verticalAlign: 'middle' }}>Store</th>
          <th style={{ verticalAlign: 'middle' }}>Keyword</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{ verticalAlign: 'middle' }}>Default</td>
          <td>
            <Form.Control
              type="text"
              placeholder="Keyword"
              style={{
                borderRadius: '8px',
                border: '1px solid #ccc'
              }}
            />
          </td>
        </tr>
      </tbody>
    </Table>
  </Form>
          </Tab>
          <Tab eventKey="design" title="Design">
             <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.06)' }}>
    <Form>
      <Table bordered responsive>
        <thead style={{ backgroundColor: '#f7f7f7' }}>
          <tr>
            <th>Stores</th>
            <th>Layout Override</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ verticalAlign: 'middle' }}>Default</td>
            <td>
              <Form.Select>
                <option value="">-- Please Select --</option>
                <option value="default">Default</option>
                <option value="custom-layout-1">Custom Layout 1</option>
                <option value="custom-layout-2">Custom Layout 2</option>
              </Form.Select>
            </td>
          </tr>
        </tbody>
      </Table>
    </Form>
  </div>
          </Tab>
        </Tabs>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary">
          Save Category
        </Button>
      </Modal.Footer>
    </Modal>




     </div>
    </div>
  )
}

export default Categories