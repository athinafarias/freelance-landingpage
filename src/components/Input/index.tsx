import styles from './styles.module.css'
import { InputProps } from './types'
import { FC } from 'react'

const Input: FC <InputProps> = ({ placeholder, type, name }) => {
    return (
        <input
            className={`${styles.Input} rounded-full px-6 py-3 border border-(--textColorMain) bg-transparent focus:outline-none focus:border-(--orangeHover)`}
            type={type} 
            placeholder={placeholder} 
            name={name}
            required
        />
    )
}

export default Input