import styles from './styles.module.css'
import { ButtonCTAProps } from './types'
import { FC } from 'react'

const ButtonCTA: FC <ButtonCTAProps> = ({ text }) => {
    return (
        <div className={`${styles.ButtonCTA} .cursor-pointer rounded-4xl h-12 px-8 py-4 font-(family-name:--fontText) font-bold text-sm bg-(--purple) text-(--textColorMain)`}>
            {text}
        </div>
    )
}

export default ButtonCTA