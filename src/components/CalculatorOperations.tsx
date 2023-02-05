const CalculatorOperations = (props: { value: string }) => {
    return (
        <div className='text-[#818181] text-2xl text-right mb-[6px] h-8 overflow-auto no-scrollbar'>
            <h2>{props.value}</h2>
        </div>
    )
}

export default CalculatorOperations