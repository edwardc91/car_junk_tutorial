import React, { useEffect } from "react";

import {
    message,
    Button,
    Modal,
    Table,
    Tooltip,
    Popconfirm,
    Icon,
    Input,
    Divider,
    Row,
    Col,
    notification
} from "antd";

import { useDispatch, useSelector } from 'react-redux'

import CenterSpin from '../../components/CenterSpin'

import * as actions from './actions'


const ElementManagment = () => {

    const currentKey = useSelector(state => state.navbar.currentKey)

    const elements = useSelector(state => state.elementManagment.elements)

    const loadingModule = useSelector(state => state.elementManagment.loadingModule)

    const error = useSelector(state => state.elementManagment.error)

    const dispatch = useDispatch()

    useEffect(
        () => {
            return () => {
                console.log("Doing a state cleanup")
            }
        },
        []
    )

    useEffect(
        () => {
            (async () => {
                dispatch(({ type: actions.FETCH_ELEMENTS_DATA, payload: { elementType: currentKey } }))
            })()
        },
        [currentKey]
    )

    useEffect(
        () => {
            if (error !== null) {
                console.log(error)
                notification["error"]({ message: "Error", "description": error.message, "duration": 0 });
            }
        },
        [error]
    )


    const columns = [
        {
            title: "Name",
            dataIndex: "name",
            key: "username",
            width: "60%"
        },
        {
            title: "Action",
            key: "action",
            render: (text, record) => (
                <>

                    <>
                        <Tooltip placement="topRight" title="Edit">
                            <span>
                                Edit
                            </span>
                        </Tooltip>
                        <Divider type="vertical" style={{ margin: "0 1em" }} />
                    </>


                    <Popconfirm
                        title={`You are about to delete user ${record.username}. Are you sure?`}
                        okText="Yes"
                        cancelText="No"
                        placement="bottomRight"
                    >
                        <Tooltip placement="topRight" title="Delete">
                            <span>
                                Delete
                            </span>
                        </Tooltip>
                    </Popconfirm>
                </>
            ),
            width: "20%",
            align: "center"
        }
    ]

    return loadingModule ? (
        <CenterSpin />
    ) : (
        <>
            <Row
                type="flex"
                justify="space-between"
                style={{
                    width: "100%",
                    marginBottom: "1.5em",
                    marginLeft: "0",
                    marginRight: "0"
                }}
            >
                <Col>
                    <Button
                        style={{ float: "left" }}
                        type="primary"
                        size="large"
                    >
                        Add
                    </Button>
                </Col>
            </Row>
            <Table
                bordered
                style={{ width: "100%" }}
                size="large"
                columns={columns}
                dataSource={elements.map(element => {
                    element.key = element.id;
                    return element;
                })}
            />
        </>
    )
}

export default ElementManagment;