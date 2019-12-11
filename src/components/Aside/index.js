import React from 'react'
import Link from "umi/link"
import styles from "./index.css"

export default function index(props) {
    console.log(props)
    return (
        <div className={props.className}>
            <ul className={styles.leftWrapper}>
                <li>
                    <Link to="/student">学生列表页</Link>
                </li>
                <li>
                    <Link to="/student/add">添加学生页</Link>
                </li>
            </ul>
        </div>
    )
}
