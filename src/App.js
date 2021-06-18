import React, { useState } from 'react';
import { Layout, } from 'antd';
import styled from 'styled-components';
import HeaderComponent from './components/HeaderComponent';
import FilterComponent from './components/FilterComponent';
import JobList from './components/JobList';
import FooterComponent from './components/FooterComponent';
import jobsData from './data';

const { Content } = Layout;

const App = (props) => {
  const [jobs, setJobs] = useState(jobsData)

  return (
    <Layout className="layout" >
      <HeaderComponent />
        <ContentContainer>
          <FilterComponent data={jobsData} jobs={jobs} setFilteredJobs={setJobs} />
          <JobList jobs={jobs} />
        </ContentContainer>
        <FooterComponent />
    </Layout>
  );
}

export default App;


const ContentContainer = styled(Content)`
  padding: 0 200px;

  @media only screen and (max-width : 1000px) {
    padding: 30px;
  }

  @media only screen and (max-width : 600px) {
    width: 100%;
    padding: 20px;
    overflow: hidden;
  }


`;
