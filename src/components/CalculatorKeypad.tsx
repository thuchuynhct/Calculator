import React from 'react'
import { ButtonType } from '../data/buttons'

const CalculatorKeypad = ({ buttons, onClick }: {
    buttons: ButtonType[],
    onClick: React.Dispatch<{ type: string, payload: ButtonType }>
}) => {
    return (
        <div className='grid grid-cols-4 gap-5 text-[32px] font-medium'>
            {
                buttons.map(item => (
                    <button
                        onClick={() => onClick({ type: item.type, payload: item })}
                        type='button'
                        key={item.id}
                        className={`block w-16 h-16 rounded-2xl text-center cursor-pointer hover:border-2 hover:border-gray-200 ${item.className ?? ""}`}>
                        {item.text}
                    </button>
                ))
            }
        </div>
    )
}

export default CalculatorKeypad