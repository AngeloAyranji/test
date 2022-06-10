import React from "react";
import { SiDiscord, SiTwitter } from "react-icons/si";
import { Col, Row, Container } from "react-bootstrap";
import styles from "./Footer.module.scss";

const Footer = () => {
    return (
        <>
            <Container fluid className={styles["footer"]}>
                <Row xs={12} sm={12} className={styles["itemPositioning"]}>
                    <div className={styles["leftItems"]}>
                        <Col xs={12} sm={6} className={styles["paragraph"]}>Join our growing community</Col>
                        <Col xs={12} sm={3}>
                            <SiDiscord className={styles["discord-icon-positioning"]} size={28} onClick={() => {
                                window.location.href = "https://discord.gg/qPrutr2w8a";
                            }} />
                            <SiTwitter className={styles["twitter-icon-positioning"]} size={28} onClick={() => {
                                window.location.href = "https://twitter.com/Shabakat_io";
                            }} />
                        </Col>
                    </div>
                    <Col xs={12} sm={3} className={styles["copyright"]}> Shabakat <span>&copy;</span> 2022 </Col>
                </Row>
            </Container>
        </>
    );
};

export default Footer;