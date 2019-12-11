import React from 'react'
import Login from "@/pages/login"
import styles from "./index.css"
import Aside from "@/components/Aside/index"
import Menu from "@/Container/MenuContainer"

export default function index(props) {

    //判断，如果是登录页，则不显示通用模板页；
    // 如果是其他页面，就和通用模板页一起展示。方法有很多，
    //可以利用上下文属性中的location.pathname

    if (props.location.pathname === "/login") {
        return <Login />


    } else {
        return (
            <>
                <Menu />
                <div className={styles.main}>
                    <Aside className={styles.aside} />
                    <div className={styles.content}>
                        {props.children}
                    </div>
                </div>
            </>
        )
    }
}
