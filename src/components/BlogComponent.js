import React, { useState, useEffect } from "react";
import { Row, Col, Carousel } from "react-bootstrap";

import disneystatue from "../Assets/DisneyStatue.jpg";
import blog from '../Assets/blog.jpg'
import blogCreate from '../Assets/blogCreate.jpg'
import { getPublishedBlogItems } from "../Services/DataService";

export default function BlogComponent() {
  const [blogItems, setBlogItems] = useState([]);

  useEffect( async () => {
    let publishedItems = await getPublishedBlogItems();
    console.log(publishedItems);
    setBlogItems(publishedItems);
  }, [])


  // const [blogItems, setBlogItems] = useState([
  //   {
  //     Id: 1,
  //     Title: "Growing Tomatos",
  //     Publisher: "Walaa AlSalmi",
  //     Date: "01-12-2022",
  //     Text: "Devote a prime, sunny spot to growing tomatoes. Tomatoes need at least 6 to 8 hours of sun to bring out their best flavors. You will need to stake, trellis, or cage most tomato plants to keep them off the ground. Decide on a support plan before you set out your plants, then add that support directly after planting. You will need to stake, trellis, or cage most tomato plants to keep them off the ground. Decide on a support plan before you set out your plants.",
  //     Image:
  //       "https://www.almanac.com/sites/default/files/styles/landscape/public/image_nodes/tomatoes_helios4eos_gettyimages-edit.jpeg?itok=m9c3T-XV",
  //     published: true,
  //   },

  //   {
  //     Id: 2,
  //     Title: "Growing Peppers",
  //     Date: "01-06-2022",
  //     Publisher: "Tom Finland",
  //     Text: "Set pepper plant seedlings out after the last spring frost. They grow well in raised beds, containers, and in-ground gardens. Plant them 18 to 24 inches apart in a sunny, well-drained spot. Pepper plants need at least 6-8 hours of sunlight per day. They grow well in raised beds, containers, and in-ground gardens. Plant them 18 to 24 inches apart in a sunny, well-drained spot. Pepper plants need at least 6-8 hours of sunlight per day.",
  //     Image:
  //       "https://www.farmersalmanac.com/wp-content/uploads/2020/11/Planting-Guide-Bell-Peppers-A105431708.jpg",
  //     published: true,
  //   },
  //   {
  //     Id: 3,
  //     Title: "Growing Eggplants",
  //     Publisher: "Sam Bilton",
  //     Date: "12-24-2021",
  //     Text: "Start eggplant seeds indoors up to 10 weeks before the last frost date. Plant the seeds 1/4inch deep, water after planting and cover loosely with plastic to retain moisture. Transplant the seedlings to the garden when soil temperatures reach 60 degrees. Transplant the seedlings to the garden when soil temperatures reach 60 degrees.",
  //     Image:
  //       "https://cleangreensimple.com/wp-content/uploads/2020/05/growing-eggplant.jpg",
  //     published: true,
  //   },
  //   {
  //     Id: 4,
  //     Title: "Growing Zucchinis",
  //     Publisher: "Tina Freedman",
  //     Date: "12-15-2021",
  //     Text: "Zucchini needs full sun (at least 6 to 8 hours) and consistently moist soil that is high in organic matter. Some zucchini varieties are vining types that require a trellis or a lot of room to sprawl. There are also bush types suitable for container gardening and mdall space gardening. There are also bush types suitable for container gardening and mdall space gardening.",
  //     Image:
  //       "https://greenhouseemporium.com/wp-content/uploads/2020/02/How_to_Grow_Zucchini_2.jpg",
  //     published: true,
  //   },
  // ]);

  return (
    <div>
      <Row>
        <Col md={12} className="p-0">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100 "
                src={blog}
                height="500vh"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={disneystatue}
                height="500vh"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 "
                src={blogCreate}
                height="500vh"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      {/* <Row className="m-5">
        <Col md={6}>
          <Row>
            <Col>
              <h1 className="text-center">Title</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3 className="text-center">Publish Name</h3>
            </Col>
            <Col>
              <h3 className="text-center">Date</h3>
            </Col>
          </Row>
          <Row>
            <Col>
              <img
                className="d-block w-100 p-4"
                src={disneystatue}
                alt=""
              />
            </Col>
          </Row>
        </Col>
        <Col md={6} className="p-5 font">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiumdod tempor incididunt ut labore et dolore magna aliqua.
            Pellentesque adipiscing commodo elit at. Nisl vel pretium lectus
            quam id leo in vitae. Cras sed felis eget velit aliquet sagittis id
            consectetur. Nisi vitae suscipit tellus mauris a diam maecenas sed.
            Tortor condimentum lacinia quis vel eros donec ac odio. Suscipit
            tellus mauris a diam. Egestas fringilla phasellus faucibus
            scelerisque eleifend. Pharetra sit amet aliquam id diam maecenas. A
            cras semper auctor neque vitae tempus. Habitasse platea dictumst
            vestibulum rhoncus est. Lorem ipsum dolor sit amet consectetur
            adipiscing elit. Et odio pellentesque diam volutpat commodo sed.
            Cursus risus at ultrices mi tempus imperdiet. Eget sit amet tellus
            cras adipiscing enim eu turpis. Turpis cursus in hac habitasse
            platea.
          </p>
        </Col>
      </Row>

      <Row className="m-5">
        <Col md={6} className="p-5 font">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiumdod tempor incididunt ut labore et dolore magna aliqua.
            Pellentesque adipiscing commodo elit at. Nisl vel pretium lectus
            quam id leo in vitae. Cras sed felis eget velit aliquet sagittis id
            consectetur. Nisi vitae suscipit tellus mauris a diam maecenas sed.
            Tortor condimentum lacinia quis vel eros donec ac odio. Suscipit
            tellus mauris a diam. Egestas fringilla phasellus faucibus
            scelerisque eleifend. Pharetra sit amet aliquam id diam maecenas. A
            cras semper auctor neque vitae tempus. Habitasse platea dictumst
            vestibulum rhoncus est. Lorem ipsum dolor sit amet consectetur
            adipiscing elit. Et odio pellentesque diam volutpat commodo sed.
            Cursus risus at ultrices mi tempus imperdiet. Eget sit amet tellus
            cras adipiscing enim eu turpis. Turpis cursus in hac habitasse
            platea.
          </p>
        </Col>

        <Col md={6}>
          <Row>
            <Col>
              <h1 className="text-center">Title</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3 className="text-center">Publish Name</h3>
            </Col>
            <Col>
              <h3 className="text-center">Date</h3>
            </Col>
          </Row>
          <Row>
            <Col>
              <img
                className="d-block w-100 p-4"
                src={disneystatue}
                alt=""
              />
            </Col>
          </Row>
        </Col>
      </Row>

      <Row className="m-5">
        <Col md={6}>
          <Row>
            <Col>
              <h1 className="text-center">Title</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3 className="text-center">Publish Name</h3>
            </Col>
            <Col>
              <h3 className="text-center">Date</h3>
            </Col>
          </Row>
          <Row>
            <Col>
              <img
                className="d-block w-100 p-4"
                src={disneystatue}
                alt=""
              />
            </Col>
          </Row>
        </Col>
        <Col md={6} className="p-5 font">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiumdod tempor incididunt ut labore et dolore magna aliqua.
            Pellentesque adipiscing commodo elit at. Nisl vel pretium lectus
            quam id leo in vitae. Cras sed felis eget velit aliquet sagittis id
            consectetur. Nisi vitae suscipit tellus mauris a diam maecenas sed.
            Tortor condimentum lacinia quis vel eros donec ac odio. Suscipit
            tellus mauris a diam. Egestas fringilla phasellus faucibus
            scelerisque eleifend. Pharetra sit amet aliquam id diam maecenas. A
            cras semper auctor neque vitae tempus. Habitasse platea dictumst
            vestibulum rhoncus est. Lorem ipsum dolor sit amet consectetur
            adipiscing elit. Et odio pellentesque diam volutpat commodo sed.
            Cursus risus at ultrices mi tempus imperdiet. Eget sit amet tellus
            cras adipiscing enim eu turpis. Turpis cursus in hac habitasse
            platea.
          </p>
        </Col>
      </Row>

      <Row className="m-5">
        <Col md={6} className="p-5 font">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiumdod tempor incididunt ut labore et dolore magna aliqua.
            Pellentesque adipiscing commodo elit at. Nisl vel pretium lectus
            quam id leo in vitae. Cras sed felis eget velit aliquet sagittis id
            consectetur. Nisi vitae suscipit tellus mauris a diam maecenas sed.
            Tortor condimentum lacinia quis vel eros donec ac odio. Suscipit
            tellus mauris a diam. Egestas fringilla phasellus faucibus
            scelerisque eleifend. Pharetra sit amet aliquam id diam maecenas. A
            cras semper auctor neque vitae tempus. Habitasse platea dictumst
            vestibulum rhoncus est. Lorem ipsum dolor sit amet consectetur
            adipiscing elit. Et odio pellentesque diam volutpat commodo sed.
            Cursus risus at ultrices mi tempus imperdiet. Eget sit amet tellus
            cras adipiscing enim eu turpis. Turpis cursus in hac habitasse
            platea.
          </p>
        </Col>

        <Col md={6}>
          <Row>
            <Col>
              <h1 className="text-center">Title</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3 className="text-center">Publish Name</h3>
            </Col>
            <Col>
              <h3 className="text-center">Date</h3>
            </Col>
          </Row>
          <Row>
            <Col>
              <img
                className="d-block w-100 p-4"
                src={disneystatue}
                alt=""
              />
            </Col>
          </Row>
        </Col>
      </Row> */}

      <Row className="m-5">
        <Col>
          {blogItems.map((item, i) => {
            return (
              <>
                {i % 2 === 0 ? 
                (
                  <>
                    <Row>
                      <Col md={6}>
                        <Row>
                          <Col
                            md={12}
                            className="d-flex justify-content-center"
                          >
                          {item.title}
                          </Col>
                          <Col md={12}>
                            <Row>
                              <Col
                                md={6}
                                className="d-flex justify-content-center"
                              >
                                {item.publisherName}
                              </Col>
                              <Col
                                md={6}
                                className="d-flex justify-content-center"
                              >
                                {item.date}
                              </Col>
                            </Row>
                          </Col>
                          <Col
                            md={12}
                            className="d-flex justify-content-center"
                          >
                            <img src={item.image}
                            className="d-block w-100 p-4"/>
                          </Col>
                        </Row>
                      </Col>
                      <Col md={6} className="d-flex justify-content-center">
                        {item.description}
                      </Col>
                    </Row>
                  </>
                ) : 
                (
                  <>
                    <Row>
                      <Col md={6} className="d-flex justify-content-center">
                        {item.description}
                      </Col>
                      <Col md={6}>
                        <Row>
                          <Col
                            md={12}
                            className="d-flex justify-content-center"
                          >
                            {item.title}
                          </Col>
                          <Col md={12}>
                            <Row>
                              <Col
                                md={6}
                                className="d-flex justify-content-center"
                              >
                                {item.publisherName}
                              </Col>
                              <Col
                                md={6}
                                className="d-flex justify-content-center"
                              >
                                {item.Date}
                              </Col>
                            </Row>
                          </Col>
                          <Col
                            md={12}
                            className="d-flex justify-content-center"
                          >
                            <img src={item.image}
                            className="d-block w-100 p-4"/>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </>
                )}
              </>
            );
          })}
        </Col>
      </Row>
    </div>
  );
}
