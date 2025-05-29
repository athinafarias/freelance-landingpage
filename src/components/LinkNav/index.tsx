import styles from './styles.module.css'
import { LinkNavProps } from './types'
import { FC } from 'react'

const LinkNav: FC <LinkNavProps> = ({ text }) => {
    return (
        <div className={`${styles.LinkNav} .cursor-pointer h-12 px-8 py-4 font-(family-name:--fontText) font-bold text-sm`}>
            {text}
        </div>
    )
}

export default LinkNav