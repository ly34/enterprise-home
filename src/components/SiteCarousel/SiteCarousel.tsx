import React from "react";
import { Carousel } from "react-bootstrap";
import "./SiteCarousel.scss";

const list = [
  {
    title: "一厂一策",
    desc:
      "“一厂一策”是各地政府为应对突发重污染天气，要求各排污量较大的企业定制的专项应对策略。整合工商数据、 “二污普” 数据、 排污许可证等信息， 完善重污染天气应急减排清单， 动态更新涉气企业和工序， 做到涉气企业和工序减排措施全覆盖。 指导重污染天气应急减排工业企业制定“一厂一策” 实施方案， 明确不同应急等级条件下享受豁免政策的生产线和工艺环节， 以及各类减排措施关键性指标， 细化各减排工序等。",
    psrc:
      "//20042348.s21i.faiusr.com/2/ABUIABACGAAg24rm8wUo7ta_7QMwoAs4uAg.jpg",
  },
  {
    title: "助力企业提升环境治理能力，净水清源，还你碧水蓝天",
    desc:
      "在推动环境污染治理，共同参与全球环境改善的道路上，我们始终与您同在。我们以深刻的行业洞察，领先的技术解决方案，周到细致的顾问服务，助力企业提升环境治理能力，净水清源，还你碧水蓝天。",
    psrc:
      "//20042348.s21i.faiusr.com/2/ABUIABACGAAgo_nl8wUo7KrQ7wMwgA84tAY.jpg",
  },
  {
    title: "聚焦中小微企业，提供一站式环保管家服务",
    desc:
      "环境治理贯穿于企业的全生命周期，一站式的环保管家服务涵盖可研、环评、环保设备、排污许可、环保验收、环境检测、企业培训、企业管理等众多服务内容。我们致力于创造客户价值，成为企业最佳合作伙伴。",
    psrc:
      "//20042348.s21i.faiusr.com/2/ABUIABACGAAgpOnl8wUovoDKsgYwgA84uAg.jpg",
  },
  {
    title: "响应国家号召，助力企业做好污染源调查",
    desc:
      "问渠哪得清如许，为有源头活水来。我们以专业的态度，极致的服务体验，帮助企业完成污染源调查，完成排污许可申报，并取得排污许可证。",
    psrc:
      "//20042348.s21i.faiusr.com/2/ABUIABACGAAgo_nl8wUoqvSRlgMw-g44uAg.jpg",
  },
  {
    title: "独立公正    细致严谨    科学有效    贴心周到",
    desc:
      "环境空气和废气检测咨询        水和废水检测咨询 土壤检测咨询                         固体废物检测咨询",
    psrc:
      "//20042348.s21i.faiusr.com/2/ABUIABACGAAgo_nl8wUoyI-w0gYwgA84uAg.jpg",
  },
  {
    title: "技术先进   效益优先",
    desc:
      "一体化污水处理设备     中央除尘设备 UV光氧处理器              油烟处理设备 活性炭箱                      小型喷淋塔",
    psrc:
      "//20042348.s21i.faiusr.com/2/ABUIABACGAAgpOnl8wUo4LLtzAIwgA84uAg.jpg",
  },
];

export const SiteCarousel = () => {
  return (
    <Carousel interval={5000} nextIcon={null} prevIcon={null} pause={false}>
      {list.map((item) => (
        <Carousel.Item>
          <img className="d-block w-100" src={item.psrc} />
          <Carousel.Caption>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </Carousel.Caption>
          <div className="carousel-mask" />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};
