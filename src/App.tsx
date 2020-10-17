import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./App.scss";
import { SiteCarousel } from "./components/SiteCarousel/SiteCarousel";
import { SiteFooter } from "./components/SiteFooter/SiteFooter";
import { SiteNav } from "./components/SiteNav/SiteNav";

function App() {
  return (
    <div className="App">
      <SiteNav />
      <div className="main-content">
        <SiteCarousel />
        <Container fluid={true}>
          <Row>
            <Col sm={12}>
              <h3>我们的优势</h3>
              <p className="sub-title">Our advantage</p>
              <p className="txt">
                光明四季专注于环境治理行业，我们以深刻的行业洞察，全面的解决方案，过硬的技术实力，极致的服务体验，服务于客户，回报社会。光明四季自成立以来，已服务超过1000家机构。
                专注、专业、极致、效率、口碑是光明四季人一以贯之的行为规范和服务标准。
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col sm={5} className="align-self-center">
              <h3>深刻的行业洞察</h3>
              <p className="sub-title">Deep Industry Insight</p>
              <p className="txt">
                超1000家企业的服务案例，专注于行业的专家团队，即时的政策分析与解读，助您占得先机，独立鳌头。
              </p>
            </Col>
            <Col sm={7} className="align-self-center">
              <img
                src="http://18549691.s61i.faiusr.com/2/AD0Iu5fsCBACGAAg2qD14QUoitzRhQEwqQg4wQM.jpg.webp"
                alt=""
              />
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col sm={7} className="align-self-center">
              <img
                src="http://20042348.s21i.faiusr.com/2/ABUIABACGAAgs-Hm8wUonvGBlQYwgA849gY.jpg.webp"
                alt=""
              />
            </Col>
            <Col sm={5} className="align-self-center">
              <h3>全面的解决方案</h3>
              <p className="sub-title">Comprehensive Solution</p>
              <p className="txt">
                一站式解决方案，包含八大产品与服务，覆盖工业企业全生命周期，省时省力，专业高效。
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col sm={5} className="align-self-center">
              <h3>过硬的技术实力</h3>
              <p className="sub-title">Excellent Technical Strength</p>
              <p className="txt">
                三支专业人才队伍，涵盖环保咨询、环保设备研发与生产、环境检测，人才齐备，技术领先。
              </p>
            </Col>
            <Col sm={7} className="align-self-center">
              <img
                src="http://20042348.s21i.faiusr.com/2/ABUIABACGAAgs-Hm8wUohaPctgcwgA84_AY.jpg.webp"
                alt=""
              />
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col sm={7} className="align-self-center">
              <img
                src="http://18549691.s61i.faiusr.com/2/AD0Iu5fsCBACGAAg8aD14QUo4PiYsAEwqQg4wQM.jpg.webp"
                alt=""
              />
            </Col>
            <Col sm={5} className="align-self-center">
              <h3>极致的服务体验</h3>
              <p className="sub-title">Ultimate Service Experience</p>
              <p className="txt">
                122管家服务模式，贴近业务实际，洞察客户需求，细致周到，助您环保无忧。
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <SiteFooter />
    </div>
  );
}

export default App;
