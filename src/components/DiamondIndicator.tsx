import '../App.css'

const DiamondIndicator = () => {
    return (
        <div className="flex justify-center items-center gap-0 my-5">
            {/* Left gradient dashed line */}
            <div className="gradient-dash-line left"></div>

            {/* Diamond */}
            <div className="diamond-indicator mx-2"></div>

            {/* Right gradient dashed line */}
            <div className="gradient-dash-line right"></div>
        </div>
    )
}

export default DiamondIndicator
