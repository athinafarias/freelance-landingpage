import styles from './styles.module.css'
import { ButtonCTAProps } from './types'
import { FC } from 'react'

const ButtonCTA: FC <ButtonCTAProps> = ({ text, padding }) => {
    return (
        <div
            style={{ padding }}

            className={`${styles.ButtonCTA} .cursor-pointer rounded-4xl h-12 px-10 py-6 font-(family-name:--fontText) font-bold text-base bg-(--purple) text-(--textColorMain)`}
        >
            {text}
        </div>
    )
}

export default ButtonCTA