import styles from './styles.module.css'
import { ButtonNavProps } from './types'
import { FC } from 'react'

const ButtonNav: FC <ButtonNavProps> = ({ link, text, variant }) => {
    return (
        <a
            href={link}
            className={`${styles.ButtonNav} ${variant === 'fill' ? styles.fill : styles.outline} .cursor-pointer rounded-4xl h-12 px-8 py-4 font-(family-name:--fontText) font-bold text-sm`}
        >
            {text}
        </a>
    )
}

export default ButtonNav