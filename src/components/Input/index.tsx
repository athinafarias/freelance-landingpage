import styles from './styles.module.css'
import { InputProps } from './types'
import { FC } from 'react'

const Input: FC <InputProps> = ({ placeholder, type, name }) => {
    return (
        <input
            className={styles.Input}
            type={type} 
            placeholder={placeholder} 
            name={name}
            required
        />
    )
}

export default Input