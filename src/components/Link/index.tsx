import styles from './styles.module.css'
import { LinkProps } from './types'
import { FC } from 'react'

const Link: FC <LinkProps> = ({ text, fontWeight }) => {
    return (
        <div
            style={{ fontWeight }}
            className={`${styles.Link} .cursor-pointer h-12 px-8 py-4 font-(family-name:--fontText) text-sm`}
        >
            {text}
        </div>
    )
}

export default Link