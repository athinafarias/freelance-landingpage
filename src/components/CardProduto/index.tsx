import ButtonCTA from "../ButtonCTA"
import ListTopic from "../ListTopic"
import Tag from "../Tag"

import { CardProdutoProps } from './types'
import styles from './styles.module.css'
import { FC } from 'react'

const CardProduto:FC <CardProdutoProps> = ({ txtTag, titulo, text, txtList1, txtList2, txtList3, text2, linkCTA, txtButton, srcImg, imgPosition = 'right' }) => {
    return (
        <div className={`${styles.CardProduto} flex flex-col lg:flex-row items-center gap-6 lg:gap-14 bg-(--componentsBackground) rounded-2xl p-6 lg:p-14 justify-center text-base font-light`}>
            {imgPosition === 'left' && (
                <div className="w-full lg:w-auto order-1 lg:order-1 flex justify-center">
                    <img 
                        src={srcImg} 
                        alt={`Ilustração ${titulo}`} 
                        className="w-full max-w-sm lg:max-w-md h-auto rounded-xl"
                    />
                </div>
            )}
            <div className="flex flex-col items-start gap-6 lg:gap-10 order-2 lg:order-2 w-full">
                <div className="flex flex-col items-start gap-4">
                    <Tag text={txtTag} variant='blue' />
                    <h3 className="text-(--blue) font-extrabold">{titulo}</h3>
                </div>
                <div className="flex flex-col items-start gap-6 lg:gap-8 text-justify">
                    <p>{text}</p>
                    <div className="flex flex-col items-start gap-2 text-left">
                        <ListTopic text={txtList1} />
                        <ListTopic text={txtList2} />
                        <ListTopic text={txtList3} />
                    </div>
                    {text2 && <p>{text2}</p>}
                </div>
                <div className="w-full flex justify-center lg:justify-start">
                    <ButtonCTA link={linkCTA} text={txtButton} padding="16px 24px lg:20px 40px" />
                </div>
            </div>
            {imgPosition === 'right' && (
                <div className="w-full lg:w-auto order-1 lg:order-2 flex justify-center">
                    <img 
                        src={srcImg} 
                        alt={`Ilustração ${titulo}`} 
                        className="w-full max-w-sm lg:max-w-md h-auto rounded-xl"
                    />
                </div>
            )}
        </div>
    )
}

export default CardProduto