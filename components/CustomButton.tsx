"use client"
import { CustomButtonProps } from '@/types'
import Image from 'next/image'


const CustomButton = ({ title, btnType, containerStyle, textStyles, rightIcon, isDisabled, handleClick }: CustomButtonProps) => {
    return (
        <button
            disabled={false}
            type={btnType}
            className={`custom-btn ${containerStyle}`}
            onClick={handleClick}

        >
            <span className={`flex-1 ${textStyles}`}>
                {title}

            </span>
            {rightIcon &&
                <div className='relative w-6 h-6'>
                    <Image 
                      src={rightIcon}
                      alt='right icon'
                      fill
                      className='object-contain'

            
                    />
                </div>
            }

        </button>
    )
}

export default CustomButton