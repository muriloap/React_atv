"use client";
import Image from "next/image";
import { Carousel } from "react-bootstrap";
import styles from "./page.module.css";

export default function Features() {
  return (
    <>
      <Carousel>
        <Carousel.Item className={styles.teste}>
          <Image src="/images/monitor.jpg" alt={""} width="600" height="600" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={styles.teste}>
          <Image src="/images/pc1.jpg" alt={""} width="600" height="600" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={styles.teste}>
          <Image src="/images/pc2.jpg" alt={""} width="600" height="600" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}
