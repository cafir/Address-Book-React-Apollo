import { Col, Container, Image, Row } from "react-bootstrap";
import NavigationBar from "../components/NavigationBar";
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import { fontSize } from "@mui/system";

function About() {
    return (
        <div style={{margin:"20px"}}>
            <NavigationBar/>
            <div style={{marginTop:"70px", textAlign:"center"}}>
                <h1 ><PeopleOutlineOutlinedIcon sx={{ fontSize: 60, color: "#7D1935" }} /> <strong style={{marginTop:"60px", color:"#630000"}}>My Team</strong> <PeopleOutlineOutlinedIcon sx={{ fontSize: 60, color: "#7D1935" }}/></h1>
                <Row>
                    <Col style={{paddingTop:"30px"}} >
                        <Container style={{backgroundColor:"#EEEBDD",padding:"20px", margin:"10px", borderRadius:"40px"}}>
                            <div className="d-flex justify-content-center">
                                <Image src="data:image/png;base64,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" roundedCircle />
                            </div>
                            <div style={{textAlign:"center", color:"#630000"}}>
                                <h2>Farhan Ismail</h2>
                                <text>Spesialis Bang FrontEnd</text>
                            </div>
                        </Container>
                    </Col>
                    <Col>
                        <Container style={{backgroundColor:"#EEEBDD",padding:"20px", margin:"10px", borderRadius:"40px"}}>
                            <div className="d-flex justify-content-center">
                                <Image src="data:image/png;base64,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" roundedCircle />
                            </div>
                            <div style={{textAlign:"center", color:"#630000"}}>
                            <h2>Reza Firhan</h2>
                            <text>Spesialis Bang BackEnd</text>
                            </div>
                        </Container>
                    </Col>
                    <Col style={{paddingTop:"30px", color:"#630000"}}>
                        <Container style={{backgroundColor:"#EEEBDD",padding:"20px", margin:"10px", borderRadius:"40px"}}>
                            <div className="d-flex justify-content-center">
                                <Image src="data:image/png;base64,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" roundedCircle />
                            </div>
                            <div style={{textAlign:"center", color:"#630000"}}>
                            <h2>Fransisca Renny</h2>
                            <text>Spesialis Mbak FrontEnd</text>
                            </div>
                        </Container>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default About;