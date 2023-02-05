const Calculator = (props: { children: JSX.Element | JSX.Element[] }) => {
    return (
        <div className='relative w-[375px]  bg-[#F7F8FB] backdrop-blur-[51px] rounded-[39px] px-8 pt-[138px] pb-11 shadow-box max-[425px]:pt-16 max-[425px]:h-screen max-[425px]:rounded-none'>
            {props.children}
        </div>
    )
}

export default Calculator