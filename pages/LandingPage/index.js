import Header from "../../components/Header/index.js"
import { Container, Col, Row } from "react-bootstrap";
import styles from "./LandingPage.module.scss"
import HomePageContent from "../../components/HomePageContent/index.js";

export default function Home() {
    return (
        <>
            <Container style={{ background: "#2B2B2B" }}>
                <Row>
                    <Header />
                </Row>
                <Row style={{ background: "#2B2B2B" }}>
                    <HomePageContent />
                </Row>
            </Container>
        </>
    )
}