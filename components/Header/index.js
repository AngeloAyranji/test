import React from "react";
import styles from "./Header.module.scss";
import { Container, Col, Row } from "react-bootstrap";
import Image from 'next/image'

const Header = () => {
    return (
        <>
            <Container fluid className={styles["Header"]}>
                <Row className={styles["ContainerRow"]}>
                    <Col className={styles["logoPositioning"]}>
                        <div className={styles["logo"]}>
                            <Image src="/Logo.png" width={42} height={41} layout={"fixed"} />
                        </div>
                        <div className={styles["shabakat"]}>
                            <Image src="/SHABAKAT.png" width={135} height={25} layout={"intrinsic"} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Header;