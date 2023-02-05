const CalculatorDisplay = (props: { className?: string, value: string }) => {
    return (
        <div className={`text-[#424242] font-medium text-5xl text-right overflow-auto no-scrollbar ${props.className ?? ""}`}>
            <h1>{props.value}</h1>
        </div>
    )
}

export default CalculatorDisplay