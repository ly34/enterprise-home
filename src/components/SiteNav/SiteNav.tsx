import React, { useEffect, useState } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo from "./assets/logo.png";
import "./SiteNav.scss";

export const SiteNav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 1) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  let bg = "light";
  let variant = "light";
  if (window.innerWidth > 992) {
    bg = scrolled ? "light" : "transparent";
    variant = scrolled ? "light" : "dark";
  }

  return (
    <Navbar bg={bg} expand="lg" variant={variant as any} sticky="top">
      <Navbar.Brand href="/">
        <img
          alt=""
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{" "}
        {/* 四川光明四季环保科技有限公司 */}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav>
          <Nav.Link href="http://www.brightseasons.cn/">首页</Nav.Link>
          <NavDropdown title="环保咨询" id="ask-nav-dropdown">
            <NavDropdown.Item href="http://www.brightseasons.cn/h-col-103.html">
              环保咨询
            </NavDropdown.Item>
            <NavDropdown.Item href="http://www.brightseasons.cn/h-col-135.html">
              环保管家
            </NavDropdown.Item>
            <NavDropdown.Item href="http://www.brightseasons.cn/h-col-116.html">
              环境影响评价
            </NavDropdown.Item>
            <NavDropdown.Item href="http://www.brightseasons.cn/h-col-118.html">
              排污许可申报
            </NavDropdown.Item>
            <NavDropdown.Item href="http://www.brightseasons.cn/h-col-119.html">
              应急预案/一厂一策
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="环保设备" id="quip-nav-dropdown">
            <NavDropdown.Item href="http://www.brightseasons.cn/h-col-129.html">
              一体化汗水设备
            </NavDropdown.Item>
            <NavDropdown.Item href="http://www.brightseasons.cn/h-col-124.html">
              中央除尘
            </NavDropdown.Item>
            <NavDropdown.Item href="http://www.brightseasons.cn/h-col-125.html">
              油烟净化器
            </NavDropdown.Item>
            <NavDropdown.Item href="http://www.brightseasons.cn/h-col-126.html">
              焊烟净化器
            </NavDropdown.Item>
            <NavDropdown.Item href="http://www.brightseasons.cn/h-col-127.html">
              UV光氧催化设备
            </NavDropdown.Item>
            <NavDropdown.Item href="http://www.brightseasons.cn/h-col-130.html">
              活性炭箱
            </NavDropdown.Item>
            <NavDropdown.Item href="http://www.brightseasons.cn/h-col-138.html">
              喷淋塔
            </NavDropdown.Item>
            <NavDropdown.Item href="http://www.brightseasons.cn/h-col-128.html">
              低氮燃烧器
            </NavDropdown.Item>
            <NavDropdown.Item href="http://www.brightseasons.cn/h-col-137.html">
              催化燃烧装置
            </NavDropdown.Item>
            <NavDropdown.Item href="http://www.brightseasons.cn/h-col-136.html">
              自动在线监测设备
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="环境检测咨询" id="measure-nav-dropdown">
            <NavDropdown.Item href="http://www.brightseasons.cn/h-col-123.html">
              环境检测咨询
            </NavDropdown.Item>
            <NavDropdown.Item href="http://www.brightseasons.cn/h-col-131.html">
              大气检测咨询
            </NavDropdown.Item>
            <NavDropdown.Item href="http://www.brightseasons.cn/h-col-132.html">
              废水检测咨询
            </NavDropdown.Item>
            <NavDropdown.Item href="http://www.brightseasons.cn/h-col-133.html">
              土壤检测咨询
            </NavDropdown.Item>
            <NavDropdown.Item href="http://www.brightseasons.cn/h-col-134.html">
              噪声检测咨询
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="http://www.brightseasons.cn/h-col-134.html">
            案例分享
          </Nav.Link>
          <Nav.Link href="http://www.brightseasons.cn/h-col-101.html">
            公司理念
          </Nav.Link>
          <Nav.Link href="http://www.brightseasons.cn/h-col-104.html">
            动态要闻
          </Nav.Link>
          <Nav.Link href="http://www.brightseasons.cn/h-col-102.html">
            联系我们
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
