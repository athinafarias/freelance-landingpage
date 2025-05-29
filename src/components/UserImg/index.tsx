import { FC } from 'react';
import styles from './styles.module.css';
import { UserImgProps } from './types';

const UserImg: FC <UserImgProps> = ({ src }) => {
    return (
        <div className={`${styles.UserImg} flex items-center justify-center rounded-full overflow-hidden border-(--orange) border-2`}>
            <img src={src} alt="" />
        </div>
    )
}

export default UserImg