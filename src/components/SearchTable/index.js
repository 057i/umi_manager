import React, { useRef } from 'react'
import styles from "./index.css"

export default function index(props) {
    const searchValRef = useRef()
    const sexRef = useRef()
    return (
        <div className={styles.searchWrapper}>
            <div className={styles.searchBox}>
                <label>搜索词:</label>
                <input type="text" ref={searchValRef}
                    value={props.searchVal}
                    onChange={(e) => {
                        props.onSearchValChange(e.target.value)
                    }} />
            </div>
            <div className={styles.sexBox}>
                男<input type="radio" name="sex" ref={sexRef} value="1" />
                女<input type="radio" name="sex" ref={sexRef} value="0" />
                不限<input type="radio" name="sex" ref={sexRef} value="-1" />
            </div>
            <button onClick={() => {
                props.onSearch({
                    searchVal: searchValRef.current.value,
                    sex: sexRef.current.value
                })
            }}>搜索</button>
        </div>
    )
}
