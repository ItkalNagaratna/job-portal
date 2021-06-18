import React, { useState, useEffect } from 'react';
import { Alert, Avatar, Button, Collapse, Select, Typography, message } from 'antd';
import styled from 'styled-components';

const { Option } = Select;
const { Text, Title } = Typography;
const { Panel } = Collapse;

const success = () => {
  message.success('You have successfully applied for this job');
};

const JobList = (props) => {
  const { jobs } = props;
  function callback(key) {
    console.log(key);
  }

  return (
    <Container >
      <JobContainer>
        <Text style={{ fontWeight: 'bold' }}>We have found <span style={{ color: 'rgb(58 47 212)', fontWeight: 'bold' }}>200</span> jobs</Text>
        {/* <Select defaultValue="Sort by data" style={{ width: 140, color: 'rgb(58 47 212)', fontWeight: 'bold' }} bordered={false}>
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="Yiminghe">yiminghe</Option>
        </Select> */}
      </JobContainer>

      {jobs && jobs.map((item, index) => {
        // console.log('item', item)
        const experience = item.placeholders.find(item => item.type === 'experience').label
        const salary = item.placeholders.find(item => item.type === 'salary').label
        const location = item.placeholders.find(item => item.type === 'location').label
        return (
          <CardComponent key={item.jobId}>

            <CardComponent>
              <AvatarContainer>
                <Avatar size={64} src="https://dieselpunkcore.com/wp-content/uploads/2014/06/logo-placeholder.png" />
              </AvatarContainer>
              <div>
                <div style={{ display: 'flex', flexDirection: 'row', marginBottom: 10 }}>
                  <Title level={5}>{item.title}</Title>
                  <Alert message={item.jobType.toLowerCase()} type="info" style={{ textTransform: 'capitalize' }} />
                  {/* <Alert message={item.jobType} type="info" /> */}
                </div>
                <Text style={{ fontSize: 13, color: 'rgb(179 57 57)' }}>Comapny Nmae: {item.companyName}</Text>
                <p style={{ fontSize: 12, marginBottom: 2 }}>Skills: {item.tagsAndSkills}</p>
                <p style={{ fontSize: 12, marginBottom: 2 }}>Location: {location}</p>
                <p style={{ fontSize: 12, marginBottom: 2 }}>Salary: {salary}</p>
                <p style={{ fontSize: 12, marginBottom: 2 }}>Experience: {experience}</p>
                <Collapse onChange={callback} style={{ backgroundColor: 'transparent', borderColor: 'transparent', marginTop: 10 }}>
                  <Panel header="Job Description" key="1" style={{ backgroundColor: 'transparent', borderColor: 'transparent' }}>
                    <div dangerouslySetInnerHTML={{ __html: item.jobDescription }} />
                  </Panel>
                </Collapse>
              </div>
            </CardComponent>

            <RightContainer >
              <Button type="primary" onClick={success}>Apply</Button>
              <Text style={{ fontSize: 12, marginBottom: 20 }} >{item.footerPlaceholderLabel}</Text>
            </RightContainer>

          </CardComponent>
        )
      })}

    </Container>

  );
}

export default JobList;


const Container = styled.div`
  margin-Bottom: 100px;

  /* Small Devices, Tablets */
    @media only screen and (max-width : 600px) {
      width: 100%;
      
    }

    /* Medium Devices, Desktops */
    @media only screen and (min-width : 992px) {
      width: 100%;
    }
`;

const AvatarContainer = styled.div`
  margin-Right: 30px;
  /* Small Devices, Tablets */
    @media only screen and (max-width : 600px) {
      display: flex;
      margin-left: 20px;
          margin-bottom: 15px
    }

`;



const JobContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 80px;

    .ant-select-arrow {
      color: rgb(0 0 0) !important;
  
    }

    /* Small Devices, Tablets */
    @media only screen and (max-width : 600px) {
      width: 100%;
      margin: 10px;
      margin-top: 20px;

  }
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: inherit;
  background-color: #fff;
  margin-top: 40px;
  @media only screen and (max-width : 600px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-Left: 10px;
    padding-Right: 10px;

  }
`;

const CardComponent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #fff;
  padding: 20px;
  border-radius: 20px;
  margin-top: 30px;

  .ant-alert-success {
  background-color: #f6ffed;
  border: 1px solid #b7eb8f;
  height: 30px;
  margin-left: 20px;
}
.ant-alert-info {
    background-color: #e6f7ff;
    border: 1px solid #91d5ff;
    height: 30px;
    margin-left: 20px;
}
/* Small Devices, Tablets */
  @media only screen and (max-width : 600px) {
    display: flex;
    flex-direction: column;
    padding: 10px;
    
    h5.ant-typography, .ant-typography h5 {
      margin-bottom: 0.5em;
      color: rgba(0, 0, 0, 0.85);
      font-weight: 600;
      font-size: 14px;
      line-height: 1.5;
  }
  }

`;