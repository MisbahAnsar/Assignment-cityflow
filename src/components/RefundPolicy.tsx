import '../App.css'

const RefundPolicy = () => {
    return (
        <div className="refund-box mt-6 mb-4 mx-auto">
            <p className="text-white text-center leading-relaxed refund-text">
                Get a{' '}
                <span className="full-refund-highlight">
                    full refund
                </span>
                {' '}when you<br />
                <span className="full-refund-highlight">
                    cancel a ride
                </span>
            </p>
            <div className="flex justify-center mt-3">
                <img src="/line.png" alt="decorative line" className="w-auto h-auto" />
            </div>
        </div>
    )
}

export default RefundPolicy
