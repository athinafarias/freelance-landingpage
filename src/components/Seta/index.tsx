import styles from './styles.module.css'
import { SetaProps } from './types'
import { FC } from 'react'

const Seta: FC <SetaProps> = ({ variant }) => {
    return (
        <div className={`${styles.Seta} ${variant === 'orange' ? styles.orange : styles.blue}`}>
            <img src="/assets/icons/icon-arrow-down.svg" alt="Ícone de seta para baixo" />
        </div>
    )
}

export default Seta