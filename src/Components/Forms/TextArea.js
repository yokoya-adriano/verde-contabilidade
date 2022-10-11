import React from 'react'
import styles from './TextArea.module.css'

const TextArea = ({ label, type, name, value, onChange, error, onBlur }) => {
    return (
        <div className={styles.wrapper}>
            <label htmlFor={name} className={styles.label} >{label}</label>
            <textarea 
                id={name}
                name={name}
                className={styles.textarea}
                type={type} onChange={onChange}
                value={value}
                onBlur={onBlur}
            />
            {error && <p className={styles.error}>{error}</p>}
        </div>
    )
}

export default TextArea
