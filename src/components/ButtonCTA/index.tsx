import styles from './styles.module.css'
import { ButtonCTAProps } from './types'
import { FC } from 'react'

const ButtonCTA: FC <ButtonCTAProps> = ({ link, text, padding }) => {
    return (
        <a href={link} target="_blank" style={{ padding }} className={`${styles.ButtonCTA} .cursor-pointer rounded-4xl h-12 px-10 py-6 font-(family-name:--fontText) font-bold text-base bg-(--purple) text-(--textColorMain)`}>
            {text}
        </a>
    )
}

export default ButtonCTA