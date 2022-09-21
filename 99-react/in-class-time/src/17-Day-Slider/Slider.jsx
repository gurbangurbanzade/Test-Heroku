import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import SimpleImageSlider from "react-simple-image-slider";
import styles from "./style.module.css";
import Carousel from "react-bootstrap/Carousel";

export default function Slider() {
  const [source, setSource] = useState([]);
  useEffect(() => {
    axios.get(`https://picsum.photos/v2/list`).then((response) => {
      console.log(response.data);
      setSource(response.data);
    });
  }, []);

  // console.log(source);

  return (
    <Carousel className={`${styles.carusel} container`}>
      {source.map((src, i) => {
        return (
          <Carousel.Item className={styles.itemCar} interval={3000} key={i}>
            <img
              className={styles.image}
              src={src.download_url}
              alt="Third slide"
            />

            <Carousel.Caption>{/* Text */}</Carousel.Caption>
          </Carousel.Item>
        );
      })}

      {/* <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=373940"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=282c34"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item> */}
    </Carousel>
  );
}
