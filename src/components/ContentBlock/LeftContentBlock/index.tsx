import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../../common/SvgIcon";
import { SvgIcon2 } from "../../../common/SvgIcon2";
import { ContentBlockProps } from "../types";
import { Fade } from "react-awesome-reveal";
import {
  LeftContentSection,
  Content,
  ContentWrapper,
  ServiceWrapper,
  MinTitle,
  MinPara,
} from "./styles";

import { Player, Controls } from '@lottiefiles/react-lottie-player';

const LeftContentBlock = ({
  icon,
  title,
  content,
  section,
  t,
  id,
}: ContentBlockProps) => {
  return (
    <LeftContentSection>
      <Fade direction="left">
        <Row justify="space-between" align="middle" id={id}>
          <Col lg={11} md={11} sm={12} xs={24}>
            <SvgIcon src={icon} width="100%" height="100%" />
          </Col>
          <Col lg={11} md={11} sm={11} xs={24}>
            <ContentWrapper>
              <h6>{t(title)}</h6>
              <Content>{t(content)}</Content>
              <ServiceWrapper>
                <Row justify="space-between">
                  {typeof section === "object" &&
                    section.map((item: any, id: number) => {
                      return (
                        <Col key={id} span={11}>
                          {/* <SvgIcon src={item.icon} width="60px" height="60px" /> */}
                          {/* <SvgIcon2 src={item.icon} width="60px" height="60px" /> */}
                          <Player
                            autoplay
                            loop
                            src="https://assets3.lottiefiles.com/packages/lf20_UJNc2t.json"
                            style={{ height: '300px', width: '300px' }}
                          >
                            <Controls visible={true} buttons={['play', 'repeat', 'frame', 'debug']} />
                          </Player>
                          <MinTitle>{t(item.title)}</MinTitle>
                          <MinPara>{t(item.content)}</MinPara>
                        </Col>
                      );
                    })}
                </Row>
              </ServiceWrapper>
            </ContentWrapper>
          </Col>
        </Row>
      </Fade>
    </LeftContentSection>
  );
};

export default withTranslation()(LeftContentBlock);
