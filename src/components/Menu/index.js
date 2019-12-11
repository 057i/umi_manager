import React from 'react'
import styles from "./index.css"
import Link from "umi/link"


export default function index(props) {
    console.log(props)
    return (
        <div className={styles.nav}>
            <h4 className={styles.left}><Link to="/student/">欢迎使用！！！</Link></h4>
            <div className={styles.right}>
                <span>欢迎你</span>
                <span>{props.loginName}</span>
                <button onClick={() => {
                    props.onLoginOut()


                }}>注销</button>
            </div>
        </div>
    )
}
