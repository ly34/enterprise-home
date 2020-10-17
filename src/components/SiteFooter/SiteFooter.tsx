import React from "react";
import { Col, Row } from "react-bootstrap";
import "./SiteFooter.scss";

export const SiteFooter = () => {
  return (
    <footer>
      <Row className="justify-content-center">
        <Col sm={4} className="align-self-center">
          Address/地址：四川省成都市高新区
        </Col>
        <Col sm={4} className="align-self-center">
          Tel/联系电话：18081081156
        </Col>
        <Col sm={4} className="align-self-center">
          Mail/邮箱：1468307521@qq.com
        </Col>
      </Row>
      <p className="text-center mt-4 mb-4">
        &copy;2020 四川光明四季环保科技有限公司 版权所有
      </p>
    </footer>
  );
};
