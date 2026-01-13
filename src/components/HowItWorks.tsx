import '../App.css'

interface WorkStep {
    icon: string
    description: string
}

const steps: WorkStep[] = [
    {
        icon: '/icon2.png',
        description: 'Once you buy the pass, rides are booked on consecutive weekdays at your selected timing(s) and seat'
    },
    {
        icon: '/icon3.png',
        description: 'If you decide to travel earlier or later, reschedule your ride anytime'
    },
    {
        icon: '/icon4.png',
        description: "For refundable passes: If you don't travel on a particular day, cancel up to 30 min before scheduled departure, and get a full refund in your Cityflo wallet"
    }
]

const HowItWorks = () => {
    return (
        <div className="how-it-works-section py-10 px-6">
            {/* Header with dotted lines */}
            <div className="flex items-center justify-center gap-4 mb-8">
                <div className="gradient-dash-line left flex-shrink-0"></div>
                <h2 className="text-white text-xl font-semibold whitespace-nowrap">
                    How it works
                </h2>
                <div className="gradient-dash-line right flex-shrink-0"></div>
            </div>

            {/* Steps */}
            <div className="space-y-6">
                {steps.map((step, index) => (
                    <div key={index}>
                        {/* Step Item */}
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0">
                                <img src={step.icon} alt="" className="w-12 h-12" />
                            </div>
                            <p
                                className="text-white leading-relaxed"
                                style={{
                                    fontFamily: "'Figtree', sans-serif",
                                    fontWeight: 400,
                                    fontSize: '14px',
                                    lineHeight: '140%',
                                }}
                            >
                                {step.description}
                            </p>
                        </div>

                        {/* Separator Line (not last item) */}
                        {index < steps.length - 1 && (
                            <div className="mt-6 ml-14">
                                <div className="step-separator-line"></div>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Did you know section */}
            <div className="mt-10 text-center">
                <div className="flex items-center justify-center gap-2 mb-3">
                    <span className="text-gray-400 text-sm">Did you know</span>
                    <img src="/arrow.png" alt="" className="w-5 h-5" />
                </div>

                <div className="did-you-know-content">
                    <p
                        className="cityfloers-text"
                        style={{
                            fontFamily: "'Fuzzy Bubbles', cursive",
                            fontWeight: 700,
                            fontSize: '18px',
                            lineHeight: '150%',
                            color: '#FFB800',
                        }}
                    >
                        7K+ Cityfloers
                    </p>
                    <p
                        className="flexi-pass-text"
                        style={{
                            fontFamily: "'Fuzzy Bubbles', cursive",
                            fontWeight: 700,
                            fontSize: '14px',
                            lineHeight: '150%',
                            color: '#FFB800',
                        }}
                    >
                        are on the Flexi Pass
                    </p>
                </div>
            </div>
        </div>
    )
}

export default HowItWorks
