import React, { useState, useEffect } from 'react';
import { Badge, Tooltip, Slider, Input, Checkbox, Typography, Row, Col, InputNumber, Button } from 'antd';
import { SearchOutlined, EnvironmentOutlined, CaretDownOutlined, FilterOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const { Text, Title } = Typography;


const FilterComponent = (props) => {

    const { jobs, data, setFilteredJobs } = props;
    const CheckboxGroup = Checkbox.Group;
    const plainOptions = ['Full Time', 'Part Time', 'Free Lancer'];
    const defaultCheckedList = ['Full Time', 'Free Lancer'];

    const [checkedList, setCheckedList] = React.useState(defaultCheckedList);
    const [indeterminate, setIndeterminate] = React.useState(true);
    const [checkAll, setCheckAll] = React.useState(false);
    const [experience, setExperience] = useState(10)
    const [advancedFilters, setAdvancedFilters] = useState(false)
    const [searchByTitle, setearchByTitle] = useState('');
    const [searchLocation, setSearchLocation] = useState('');
    const [searchBySkills, setSearchBySkills] = useState('');


    const onChangelist = (list) => {
        setCheckedList(list);
        setIndeterminate(!!list.length && list.length < plainOptions.length);
        setCheckAll(list.length === plainOptions.length);
    };

    const onChangeSlider = value => {
        setExperience(value)
    };
    const onCheckAllChange = e => {
        setCheckedList(e.target.checked ? plainOptions : []);
        setIndeterminate(false);
        setCheckAll(e.target.checked);
    };

    const toggleAdvancedSearch = () => {
        setAdvancedFilters(!advancedFilters)
    }

    const marks = {
        1: '1 Year',
        10: '10 Year',
        // {
        //     style: {
        //         color: '#000',
        //     },
        //     label: <strong>10 Years</strong>,
        // },
    };

    useEffect(() => {
        // console.log("searchByTitle", searchByTitle);
        if (searchByTitle) {
            const filtered = jobs.filter(item => item.title.toLowerCase().indexOf(searchByTitle && searchByTitle.toLowerCase()) !== -1);
            setFilteredJobs(filtered)
        } else { setFilteredJobs(data) }
    }, [searchByTitle]);

    useEffect(() => {
        // console.log("searchBySkills", searchBySkills);
        if (searchBySkills) {
            const filtered = jobs.filter(item => item.tagsAndSkills.toLowerCase().indexOf(searchBySkills && searchBySkills.toLowerCase()) !== -1);
            setFilteredJobs(filtered)
        } else { setFilteredJobs(data) }
    }, [searchBySkills]);

    useEffect(() => {
        // console.log("searchLocation", searchLocation);
        if (searchLocation) {
            const filtered = jobs.filter(item => {
                const location = item.placeholders.find(item => item.type === 'location').label
                return location && location.toLowerCase().indexOf(searchLocation && searchLocation.toLowerCase()) !== -1
            })
            setFilteredJobs(filtered)
        } else { setFilteredJobs(data) }
    }, [searchLocation]);


    return (
        <ExtraContainer>
            <Title level={3}>Job Board</Title>
            <RowComponent>
                <Input value={searchByTitle} onChange={(evt) => { setearchByTitle(evt.target.value) }} placeholder="Search by job title" prefix={<SearchOutlined style={{ color: 'rgb(58 47 212)' }} />} style={{ width: '80%', marginRight: 20, borderRadius: 2, padding: 10 }} />
                <Input value={searchLocation} onChange={(evt) => { setSearchLocation(evt.target.value) }}
                    style={{ width: '60%', marginRight: 20, borderRadius: 2, padding: 10 }}
                    placeholder="Location"
                    prefix={<EnvironmentOutlined className="site-form-item-icon" style={{ color: 'rgb(58 47 212)' }} />}
                    suffix={
                        <Tooltip title="Extra information">
                            <CaretDownOutlined style={{ color: 'rgb(58 47 212)' }} />
                        </Tooltip>
                    }
                />
                <Input value={searchBySkills} onChange={(evt) => { setSearchBySkills(evt.target.value) }}
                    style={{ width: '60%', borderRadius: 2, padding: 10, marginRight: 20, }}
                    placeholder="Enter your skills"
                    prefix={<FilterOutlined className="site-form-item-icon" style={{ color: 'rgb(58 47 212)' }} />}
                    suffix={
                        <Tooltip title="Extra information">
                            <Badge count={5} style={{ marginRight: 10 }}>
                                <a href="#" className="head-example" />
                            </Badge>
                        </Tooltip>
                    }
                />
                <Button size={'large'} type="primary" onClick={toggleAdvancedSearch} style={{ borderRadius: 2 }}>{advancedFilters ? 'Hide' : 'Show'} Advanced Filters</Button>
            </RowComponent>
            {advancedFilters &&
                <RowComponent style={{ marginTop: 40 }}>
                    <CheckboxGroup options={plainOptions} value={checkedList} onChange={onChangelist} style={{ marginTop: 20 }} />
                    <Checkbox style={{ marginTop: 20 }} indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>All </Checkbox>

                    <SliderComponent>
                        <Text>Serach by experience</Text>
                        <Row>
                            <Col>
                                <Slider style={{ width: 180, marginRight: 10 }}
                                    min={1}
                                    max={10}
                                    onChange={onChangeSlider}
                                    value={typeof experience === 'number' ? experience : 0}
                                    marks={marks}
                                />
                            </Col>
                            <Col>
                                <InputNumber
                                    min={1}
                                    max={20}
                                    style={{ margin: '0 16px' }}
                                    value={experience}
                                    onChange={onChangeSlider}
                                />
                            </Col>
                        </Row>
                    </SliderComponent>
                </RowComponent>
            }
        </ExtraContainer>

    );
}

export default FilterComponent;

const ExtraContainer = styled.div`
    margin-top: 50px;

    /* Small Devices, Tablets */
    @media only screen and (max-width : 600px) {
      width: 100%;

      h3.ant-typography, .ant-typography h3 {
        margin-bottom: 0.5em;
        color: rgba(0, 0, 0, 0.85);
        font-weight: 600;
        font-size: 15px;
        line-height: 1.35;
         }
    
    }


`;

const RowComponent = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 30px;

    .ant-slider-step {
        background: #5facff;
    }
    
    @media only screen and (max-width : 1100px) {
        flex-direction: column;
        & > span {
            margin-right: 0 !important;
            width: 100% !important;
            flex: 1;
            margin-bottom: 10px;
        }
    }

`;


const SliderComponent = styled.div`
    margin-Left: 40px;
    @media only screen and (max-width : 1100px) {
        margin-Left: 0px;
        margin-Top: 10px;

         }

`;