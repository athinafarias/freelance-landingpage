import styles from './styles.module.css'
import { TagProps } from './types'
import { FC } from 'react'

const Tag: FC <TagProps> = ({ text, variant }) => {
    return (
        <div className={`${styles.Tag} ${variant === 'orange' ? styles.orange : styles.blue} rounded-xl h-12 px-4 py-2 font-(family-name:--fontText) font-bold text-sm text-(--textColorContrast)`}>
            {text}
        </div>
    )
}

export default Tag