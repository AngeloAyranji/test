import React, { useEffect, useState } from "react";
import styles from "./HomePageContent.module.scss";
import { Container, Col, Row, Button } from "react-bootstrap";
import { FiSend } from "react-icons/fi";
import Image from 'next/image'
import HeroCarousel from "../HeroCarousel";
import Footer from "../Footer";
import firestore from "../../firebase";
import { collection, addDoc } from "firebase/firestore";

const HomePageContent = () => {
    const [image, setImage] = useState(1);
    const [email, setEmail] = useState(null);
    const [validmail, setValidMail] = useState(true);
    const [submitted, setSubmitted] = useState(false);

    async function addEmail(email) {
        if (email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
            const docRef = await addDoc(collection(firestore, "emails"), {
                email: email
            });
            setSubmitted(true);
            setValidMail(true);
        } else {
            setValidMail(false);
        }
    }

    return (
        <>
            <Container className={styles["homeContainer"]}>
                <Row className={styles["ContainerRow"]}>
                    <Col className={styles["itemPositioning"]}>
                        <h3 id={styles["paragraph1"]}>Get on the Shabakat<br></br>
                            Waiting List Now!</h3>
                        <div className={styles["inputField"]}>
                            <input className={styles["inputMail"]} onChange={(e) => { setEmail(e.target.value) }} placeholder="Your email address here"></input>
                            <FiSend size={35} className={styles["sendButton"]} onClick={() => {
                                addEmail(email)
                            }} type="submit" />
                            {!validmail && <div className={styles["validMail"]}>Not valid email address!</div>}
                            {submitted && <div className={styles["submitted"]}>Email submitted!</div>}
                        </div>
                    </Col>
                    <Col className={styles["itemPositioning2"]}>
                        <HeroCarousel image={image} />
                        <div className={styles["dots"]}>
                            <div className={styles[image == 1 ? "activedot" : "notactivedot"]} onClick={() => {
                                setImage(1);
                            }}></div>
                            <div className={styles[image == 2 ? "activedot" : "notactivedot"]} onClick={() => {
                                setImage(2);
                            }}></div>
                            <div className={styles[image == 3 ? "activedot" : "notactivedot"]} onClick={() => {
                                setImage(3);
                            }}></div>
                        </div>
                    </Col>
                </Row>
                <Row className={styles["ContainerRow"]}>
                    <Col className={styles["blackBox"]}>
                        <Row className={styles["blackBoxRow"]}>
                            <Col className={styles["blackBoxcol1"]}>
                                <Image src={"/Wallet.png"} width={179} height={234} ></Image>
                            </Col>
                            <Col className={styles["blackBoxcol2"]}>
                                <div id={styles["paragraph2"]}>Multitude of Wallets</div>
                                <div id={styles["paragraph3"]}>You can have many seed phrases on Shabakat, with multiple wallets under each one. You can also import individual wallets through your private key, or connect your hard wallet.</div>
                            </Col>
                        </Row>
                        <Row className={styles["blackBoxRow"]}>
                            <Col className={styles["blackBoxcol1"]}>
                                <Image src={"/Ethereum.png"} width={205} height={205} ></Image>
                            </Col>
                            <Col className={styles["blackBoxcol2"]}>
                                <div id={styles["paragraph2"]}>Browse dApps & Marketplaces</div>
                                <div id={styles["paragraph3"]}>Browse and use all the dApps and marketplaces on Ethereum and EVM blockchains.</div>
                            </Col>
                        </Row>
                        <Row className={styles["blackBoxRow"]}>
                            <Col className={styles["blackBoxcol1"]}>
                                <Image src={"/Key.png"} width={230} height={164} ></Image>
                            </Col>
                            <Col className={styles["blackBoxcol2"]}>
                                <div id={styles["paragraph2"]}>Non Custodial & Private</div>
                                <div id={styles["paragraph3"]}>You own your keys, assets, tokens and NFTs. No one can take them away from you. We can’t and won’t track your data or personal information.</div>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <Row className={styles["ContainerRow"]} style={{ margin: "0px" }}>
                    <Footer />
                </Row>
            </Container >
        </>
    );
};

export default HomePageContent;