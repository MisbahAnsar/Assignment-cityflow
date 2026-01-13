import { useState } from 'react'
import { ArrowRight, ArrowLeftRight, Check } from 'lucide-react'

interface PlanOption {
    id: string
    rides: number
    pricePerRide: number
    morningRides: number
    eveningRides: number
    hasFullRefund: boolean
    hasFreeRescheduling: boolean
    planType: 'flexi' | 'saver'
}

const planOptions: PlanOption[] = [
    {
        id: 'flexi-40',
        rides: 40,
        pricePerRide: 195,
        morningRides: 20,
        eveningRides: 20,
        hasFullRefund: true,
        hasFreeRescheduling: true,
        planType: 'flexi'
    },
    {
        id: 'flexi-10',
        rides: 10,
        pricePerRide: 207,
        morningRides: 5,
        eveningRides: 5,
        hasFullRefund: true,
        hasFreeRescheduling: true,
        planType: 'flexi'
    },
    {
        id: 'saver-40',
        rides: 40,
        pricePerRide: 159,
        morningRides: 20,
        eveningRides: 20,
        hasFullRefund: false,
        hasFreeRescheduling: true,
        planType: 'saver'
    }
]

const SelectPlan = () => {
    const [tripType, setTripType] = useState<'one-way' | 'round-trip'>('one-way')
    const [selectedPlan, setSelectedPlan] = useState<string>('flexi-40')

    const flexiPlans = planOptions.filter(p => p.planType === 'flexi')
    const saverPlans = planOptions.filter(p => p.planType === 'saver')

    const PlanCard = ({ plan, isFirst = false }: { plan: PlanOption; isFirst?: boolean }) => {
        const isSelected = selectedPlan === plan.id

        return (
            <div
                className={`px-4 py-4 cursor-pointer transition-all ${isFirst ? 'bg-amber-50' : 'bg-white'
                    } border-b border-gray-100 last:border-b-0`}
                onClick={() => setSelectedPlan(plan.id)}
            >
                <div className="flex items-start gap-3">
                    {/* Selection Indicator */}
                    <div className="mt-1">
                        {isSelected ? (
                            <div className="w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center">
                                <Check className="w-4 h-4 text-white" strokeWidth={3} />
                            </div>
                        ) : (
                            <div className="w-6 h-6 rounded-full border-2 border-gray-300"></div>
                        )}
                    </div>

                    {/* Plan Details */}
                    <div className="flex-1">
                        <div className="flex justify-between items-baseline">
                            <span className="text-2xl font-bold text-gray-900">{plan.rides} Rides</span>
                            <span className="text-xl font-semibold text-gray-900">
                                ₹{plan.pricePerRide}
                                <span className="text-sm font-normal text-gray-500">/ride</span>
                            </span>
                        </div>
                        <p className="text-sm text-gray-500 mt-1">
                            ({plan.morningRides} morning + {plan.eveningRides} evening)
                        </p>

                        {/* Badges - more rounded, higher opacity, darker text */}
                        <div className="flex flex-wrap gap-2 mt-3">
                            {plan.hasFullRefund ? (
                                <span className="px-3 py-1.5 text-xs font-semibold rounded-2xl bg-teal-100/80 text-teal-800 border border-teal-300">
                                    Full refunds on cancellations
                                </span>
                            ) : (
                                <span className="px-3 py-1.5 text-xs font-semibold rounded-2xl bg-red-100/80 text-red-700 border border-red-300">
                                    No refund on cancellations
                                </span>
                            )}
                            {plan.hasFreeRescheduling && (
                                <span className="px-3 py-1.5 text-xs font-semibold rounded-2xl bg-teal-100/80 text-teal-800 border border-teal-300">
                                    Free rescheduling
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="select-plan-section pb-8">
            {/* Section Header with dotted lines */}
            <div className="flex items-center justify-center gap-4 mb-2">
                <div className="gradient-dash-line left flex-shrink-0"></div>
                <h2 className="text-white text-lg font-semibold whitespace-nowrap">
                    Select a plan
                </h2>
                <div className="gradient-dash-line right flex-shrink-0"></div>
            </div>

            <p className="text-gray-400 text-sm text-center mb-10">
                Rides are pre-booked on consecutive weekdays
            </p>

            {/* Main Card Container with Toggle positioned half-in/half-out */}
            <div className="px-4">
                {/* White Card Container - relative for toggle positioning */}
                <div className="relative mt-6">
                    {/* Toggle Switch - positioned at top of white card, half inside half outside */}
                    <div className="absolute top-0 left-0 right-0 flex justify-center z-10" style={{ transform: 'translateY(-50%)' }}>
                        <div
                            className="inline-flex rounded-full items-center"
                            style={{
                                background: '#00253F',
                                border: '0.5px solid #FFD66B',
                                padding: '4px 6px'
                            }}
                        >
                            <button
                                onClick={() => setTripType('one-way')}
                                className="flex items-center gap-2 text-sm font-medium transition-all whitespace-nowrap text-white"
                                style={{
                                    padding: '10px 24px',
                                    borderRadius: '24px',
                                    background: 'transparent'
                                }}
                            >
                                <ArrowRight className="w-4 h-4 text-white" />
                                One-way
                            </button>
                            <button
                                onClick={() => setTripType('round-trip')}
                                className="flex items-center gap-2 text-sm font-semibold transition-all whitespace-nowrap"
                                style={{
                                    background: '#FFD66B',
                                    boxShadow: '0px 0px 1px 0px rgba(0, 37, 63, 0.32), 0px 2px 8px 0px rgba(0, 37, 63, 0.5)',
                                    borderRadius: '24px',
                                    padding: '10px 16px',
                                    color: '#00253F',
                                    marginLeft: '8px'
                                }}
                            >
                                <ArrowLeftRight className="w-4 h-4" style={{ color: '#00253F' }} />
                                Round Trip
                            </button>
                        </div>
                    </div>

                    {/* White Card */}
                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg pt-10">
                        {/* Flexi Plan Section Header */}
                        <div
                            className="py-2 px-4 text-center"
                            style={{
                                background: '#FFE296',
                                borderTopLeftRadius: '4px',
                                borderTopRightRadius: '4px',
                                borderLeft: '3px solid #4db6ac',
                                borderRight: '3px solid #4db6ac'
                            }}
                        >
                            <p className="text-sm font-semibold text-gray-800">
                                Flexi Plan - Maximum flexibility
                            </p>
                        </div>

                        {flexiPlans.map((plan, index) => (
                            <PlanCard key={plan.id} plan={plan} isFirst={index === 0} />
                        ))}

                        {/* Super Saver Plan Section Header */}
                        <div
                            className="py-2 px-4 text-center"
                            style={{
                                background: '#FFE296',
                                borderTopLeftRadius: '4px',
                                borderTopRightRadius: '4px',
                                borderLeft: '3px solid #D4A004',
                                borderRight: '3px solid #D4A004'
                            }}
                        >
                            <p className="text-sm font-semibold text-gray-800">
                                Super Saver Plan - Maximum savings
                            </p>
                        </div>

                        {saverPlans.map((plan, index) => (
                            <PlanCard key={plan.id} plan={plan} isFirst={index === 0} />
                        ))}
                    </div>
                </div>

                {/* Proceed Button */}
                <button className="w-full mt-6 py-4 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold text-base rounded-full shadow-lg transition-all border-2 border-yellow-500">
                    Proceed with selected plan
                </button>
            </div>
        </div>
    )
}

export default SelectPlan
