import ButtonCTA from "../ButtonCTA"
import ListTopic from "../ListTopic"
import Tag from "../Tag"

import { CardProdutoProps } from './types'
import styles from './styles.module.css'
import { FC } from 'react'

const CardProduto:FC <CardProdutoProps> = ({ txtTag, titulo, text, txtList1, txtList2, txtList3, text2, linkCTA, txtButton, srcImg, imgPosition = 'right' }) => {
    return (
        <div className={`${styles.CardProduto} flex items-center gap-14 bg-(--componentsBackground) rounded-2xl p-14 justify-center text-base font-light`}>
            {imgPosition === 'left' && <img src={srcImg} alt="" />}
            <div className="flex flex-col items-start gap-10">
                <div className="flex flex-col items-start gap-4">
                    <Tag text={txtTag} variant='blue' />
                    <h3 className="text-(--blue) font-extrabold">{titulo}</h3>
                </div>
                <div className="flex flex-col items-start gap-8 text-justify">
                    <p>{text}</p>
                    <div className="flex flex-col items-start gap-2 text-left">
                        <ListTopic text={txtList1} />
                        <ListTopic text={txtList2} />
                        <ListTopic text={txtList3} />
                    </div>
                    <p>{text2}</p>
                </div>
                <ButtonCTA link={linkCTA} text={txtButton} padding="20px 40px" />
            </div>
            {imgPosition === 'right' && <img src={srcImg} alt="" />}
        </div>
    )
}

export default CardProduto