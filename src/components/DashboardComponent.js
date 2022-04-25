import React, { useState, useEffect } from "react";
import {
  Button,
  Container,
  Row,
  Col,
  Modal,
  Form,
  Accordion,
  ListGroup,
  Spinner
} from "react-bootstrap";
import { checkToken } from "../Services/DataService";
import { useNavigate } from 'react-router-dom';
import { loggedInData, addBlogItem, getBlogItemsByUserId, updateBlogItem } from "../Services/DataService";
import '../App.css';

export default function DashboardComponent() {
    let navigate = useNavigate();
    useEffect( () => {
        //on load useEffect is the first thing to fire
        //put any on load logic here
        //will only fire once if nothing is inside the dependency array or else if there is something in the array when the state of that value changes the useEffect will fire again
        if(!checkToken())
        {
            navigate("/Login");
        }else{
          setTimeout(async () => {
            let loggedIn = loggedInData();
            setUserId(loggedIn.userId);
            setPublisherName(loggedIn.publisherName);
         console.log(loggedIn);
         let userBlogItems = await getBlogItemsByUserId(loggedIn.userId);
         setBlogItems(userBlogItems);
         console.log(userBlogItems);
         setIsLoading(false);
          }, 1000)
        }
        
       

    }, [])


  //Form
  const [blogId, setBlogId] = useState(0);
  const [blogUserId, setUserId] = useState(0);
  const [blogPublisherName, setPublisherName] = useState("");
  const [blogTitle, setBlogTitle] = useState("");
  const [blogImage, setBlogImage] = useState("");
  const [blogDescription, setBlogDescription] = useState("");
  const [blogCategory, setBlogCategory] = useState("");
  const [blogTags, setBlogTags] = useState("");
  const [blogItems, setBlogItems] = useState([]);
  //Form
  //Bools
  const [show, setShow] = useState(false);
  const [editBool, setEditBool] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [blogIsDeleted, setIsDeleted] = useState(false);
  const [blogIsPublished, setIsPublished] = useState(false);
  //Bools
  //Functions
  //Modal
  const handleClose = () => setShow(false);
  const handleShow = (e, {id, userId, publisherName, isDeleted, isPublished, title, image, description, category, tags}) => {

        

    setShow(true);
    if (e.target.textContent === "Add Blog Item") {
      setEditBool(false);
      
    } else {
      setEditBool(true);
    }
    setBlogId(id);
    setUserId(userId);
    setPublisherName(publisherName);
    setBlogTitle(title);
    setBlogImage(image);
    setBlogDescription(description);
    setBlogCategory(category);
    setBlogTags(tags);
    setIsDeleted(isDeleted);
    setIsPublished(isPublished);
    
  };
  //Modal
  //Save with publish
  const handleSave = async ({target:{textContent}}) =>{
    
    

    const published = {
      Id : blogId,
      UserId : blogUserId,
      PublisherName : blogPublisherName,
      Title : blogTitle,
      Image : blogImage,
      Description : blogDescription,
      Date : new Date(),
      Tags : blogTags,
      Category : blogCategory,
      isPublished : textContent === "Save"  || textContent === "Save Changes" ? false : true,
      isDeleted : false
    }
    console.log(published);
    handleClose();
    let result = false;
    if(editBool){
      //edit code goes here
      result = await updateBlogItem(published)
    }else{
      result = await addBlogItem(published)
    }
    
    if(result){
      //setBlogItems([]);
      let userBlogItems = await getBlogItemsByUserId(blogUserId);
      console.log(userBlogItems);
      setBlogItems(userBlogItems);
    }else{
      alert(`Blog Item not ${editBool ? "Updated": "Added"}`);
    }
  }

  const handlePublish = async (item) => {
    item.isPublished = !item.isPublished;
    let result = await updateBlogItem(item);
    if(result){
    //setBlogItems([]);
    let userBlogItems = await getBlogItemsByUserId(blogUserId);
    console.log(userBlogItems);
    setBlogItems(userBlogItems);
    }else{
    alert(`Blog Item not ${editBool ? "Updated": "Added"}`);
    }
  }

  const handleDelete = async (item) => {
    item.isDeleted = !item.isDeleted;
    let result = await updateBlogItem(item);
    if(result){
    //setBlogItems([]);
    let userBlogItems = await getBlogItemsByUserId(blogUserId);
    console.log(userBlogItems);
    setBlogItems(userBlogItems);
    }else{
    alert(`Blog Item not ${editBool ? "Updated": "Added"}`);
    }
  }
  

  //Images
  const handleImage = (event) =>{
    let file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () =>{
      console.log(reader.result);
      setBlogImage(reader.result);
    }
    reader.readAsDataURL(file)
  }

  return (
    <div className="bgImageCreate">
      <Container>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{editBool ? "Edit" : "Add"} Blog Item</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              {/* Title, Image, Description, Category, Tags */}

              <Form.Group className="mb-3" controlId="Title">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Title"
                  onChange={(e) => setBlogTitle(e.target.value)}
                  value={blogTitle}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="Description">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Description"
                  onChange={(e) => setBlogDescription(e.target.value)}
                  value={blogDescription}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="Category">
                <Form.Select
                  aria-label="Pick a Category"
                  onChange={(e) => setBlogCategory(e.target.value)}
                  value={blogCategory}
                >
                  <option>Pick a Category</option>
                  <option value="Food">Food</option>
                  <option value="Tech">Tech</option>
                  <option value="Sports">Sports</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="Tags">
                <Form.Label>Enter Tags Separated by a Comma</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter a Tag separated by a comma"
                  onChange={({ target: { value } }) => setBlogTags(value)}
                  value={blogTags}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="Image">
                <Form.Label>Pick an Image</Form.Label>
                <Form.Control
                  type="File"
                  accept="image/png, image/jpg"
                  placeholder=""
                  onChange={handleImage}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleSave}>
              {editBool ? "Save Changes" : "Save"}
            </Button>
            <Button variant="primary" onClick={handleSave}>
              {editBool ? "Save Changes" : "Save"} and Publish
            </Button>
          </Modal.Footer>
        </Modal>

        <Row>
          <Col md={12}>
            <Button onClick={(e) => handleShow(e, {id:0, userId: blogUserId, publisherName: blogPublisherName, isDeleted:false, isPublished:false, title:"", image:"", description:"", category:"", tags:""})}>Add Blog Item</Button>
          </Col>
        </Row>
        <Row>
          <Col className="mt-5">
            
            {
              isLoading ? 
              //Loading screen here
              <h1>
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
                Loading...
              </h1>
              :
              blogItems.length === 0 ?
              <h1>No Blog Items, Add Blog Item Above</h1>
              :
              
            <Accordion defaultActiveKey={["0"]} alwaysOpen>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Published</Accordion.Header>
                <Accordion.Body>
                  <ListGroup className="">
                    {blogItems.map((item, idx) => {
                      return item.isPublished ? (
                        <>
                          {
                            item.isPublished && !item.isDeleted ?
                            <ListGroup.Item key={idx}>
                              <Col>{item.title}</Col>
                              <Col className='btnSpace'>
                                <Button variant="info" onClick={() => handleDelete(item)}>Delete</Button>
                                <Button variant="info" onClick={(e) => handleShow(e, item)}>Edit</Button>
                                <Button variant="info" onClick={async () => handlePublish(item)}>Unpublish</Button>
                              </Col>
                            </ListGroup.Item>
                            :
                            null
                          }
                        </>
                      ) : null;
                    })}
                  </ListGroup>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Unpublished</Accordion.Header>
                <Accordion.Body>
                  <ListGroup>
                    {blogItems.map((item, idx) => {
                      return !item.isPublished ? (
                        <>
                          {
                            !item.isPublished && !item.isDeleted ?
                            <ListGroup.Item key={idx}>
                              <Col>{item.title}</Col>
                              <Col className='btnSpace'>
                                <Button variant="info" onClick={() => handleDelete(item)}>Delete</Button>
                                <Button variant="info" onClick={(e) => handleShow(e, item)}>Edit</Button>
                                <Button variant="info" onClick={async () => handlePublish(item)}>Publish</Button>
                              </Col>
                            </ListGroup.Item>
                            :
                            null
                          }
                        </>
                      ) : null;
                    })}
                  </ListGroup>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            }

          </Col>
        </Row>
      </Container>
    </div>
  );
}
