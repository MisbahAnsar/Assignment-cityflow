import '../App.css'

const FeatureCards = () => {
    return (
        <div className="flex justify-center gap-3 mb-5">
            {/* Savings Card */}
            <div className="feature-card-wrapper">
                <div className="icon-badge">
                    <img src="/icon1.png" alt="savings" className="w-10 h-10" />
                </div>
                <div className="feature-card">
                    <p className="card-text">
                        Savings up<br />
                        to <span className="highlight">30%</span>
                    </p>
                </div>
            </div>

            {/* Pre-booked Card */}
            <div className="feature-card-wrapper">
                <div className="icon-badge">
                    <img src="/icon2.png" alt="pre-booked" className="w-10 h-10" />
                </div>
                <div className="feature-card">
                    <p className="card-text">
                        Rides are<br />
                        <span className="highlight">Pre-booked</span>
                    </p>
                </div>
            </div>

            {/* Reschedule Card */}
            <div className="feature-card-wrapper">
                <div className="icon-badge">
                    <img src="/icon3.png" alt="reschedule" className="w-10 h-10" />
                </div>
                <div className="feature-card">
                    <p className="card-text">
                        Reschedule<br />
                        for <span className="highlight">free</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default FeatureCards
