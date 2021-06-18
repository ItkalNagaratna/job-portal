import React  from 'react';
import styled from 'styled-components';
import { Badge, Typography } from 'antd';
import { BellOutlined, CaretDownOutlined } from '@ant-design/icons';

const HeaderComponent = (props) => {
    const { Text, Title } = Typography;

    return (
        <Header className="header" style={{ backgroundColor: '#fff', boxShadow: 'rgb(148 152 154) 3px -1px 20px 0px' }}>
            <LogoContainer >
                <Title level={5} style={{ color: '#000', margin: 0 }}>Job Portal</Title>
            </LogoContainer>
            <ExtraContainer>
                <div style={{ marginTop: 10, display: 'flex' }}>
                    <BellOutlined style={{ fontSize: 20 }} />
                    <Badge dot>
                        <a href="#" className="head-example" />
                    </Badge>
                </div>
                <Text style={{ fontSize: 15, fontWeight: 'bold', marginLeft: 20, marginRight: 5 }} type="primary" key="3">Nagaratna Itkal</Text>
                <CaretDownOutlined style={{ color: 'rgb(58 47 212)' }} />
            </ExtraContainer>
        </Header>

    );
}

export default HeaderComponent;


const Header = styled.div`
    display:  flex;
    flex-direction: row;
    justify-content: space-between;
    height: 80px;
    padding-left: 30px;
    padding-right: 30px;

`;

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: center;
    
`;


const ExtraContainer = styled.div`
    display:  flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

`;



