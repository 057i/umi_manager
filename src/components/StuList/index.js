import React from 'react'
import { fetchByPage } from "../../Utils/fetchStu"


export default function index(props) {

    const arr = props.datas && props.datas.map((elm, index) => (
        <tr key={elm + index}>
            <th>{elm.name}</th>
            <th>{elm.sNo}</th>
            <th>{elm.sex === 1 ? "男" : "女"}</th>
            <th>{elm.age}</th>
            <th>{elm.phone}</th>
            <th>{elm.address}</th>
            <th>{elm.email}</th>
        </tr>
    ))
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>姓名</th>
                        <th>学号</th>
                        <th>性别</th>
                        <th>年龄</th>
                        <th>电话</th>
                        <th>住址</th>
                        <th>email</th>
                    </tr>
                </thead>
                <tbody>
                    {arr}
                </tbody>
            </table>
        </div >
    )
}
