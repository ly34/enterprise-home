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
        <Row className="justify-content-center">
            <Col sm={7} className="align-self-center">
              <h3>关于我们</h3>
              <p className="sub-title">About Us</p>
              <p className="txt">
                四川光明四季环保科技有限公司与国内外工业企业、公共事务部门、各地政府携手并肩，共同应对愈加严峻的环境挑战，助其提升环境治理能力，从而打造碧水蓝天的人居环境。自成立以来，已为超过1000家机构提供环境治理相关咨询服务。
              </p>
              <p className="txt">
                熟知环境标准与各地环保法律法规的人才队伍，专业的环境污染检测与污染治理技术，经济高效的服务模式是行业面临的主要挑战。公司基于国家和地方的法律法规，致力于前沿技术的研发，专业人才队伍的打造，专业服务能力的提升，为客户持续不断创造价值，并最终成为企业的成长伙伴。<a href="http://www.brightseasons.cn/h-col-103.html">了解更多&gt;&gt;</a>
              </p>
            </Col>
            <Col sm={5} className="align-self-center">
              <img
                src="http://18549691.s61i.faiusr.com/2/AD0Iu5fsCBACGAAg5o314QUox4HurwMwuAc47AQ.jpg.webp"
                alt=""
              />
            </Col>
          </Row>
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
