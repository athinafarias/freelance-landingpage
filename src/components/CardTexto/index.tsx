import styles from './styles.module.css'
import { CardTextoProps } from './types'
import { FC } from 'react'

const CardTexto: FC <CardTextoProps> = ({ text, icon, variant, height, width }) => {
    return (
        <div
            style={{ height, width }}

            className={`${styles.CardTexto} ${variant === 'orange' ? styles.orange : styles.blue} bg-(--componentsBackground) rounded-2xl py-5 px-8 flex gap-6 justify-center items-start text-base`
        }>
            {icon}
            <p className="break-words text-left">{text}</p>
        </div>
    )
}

export default CardTexto