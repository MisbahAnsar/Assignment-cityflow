import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FAQItem {
    question: string
    answer: string
}

const faqs: FAQItem[] = [
    {
        question: 'What is Cityflo Flexi pass?',
        answer: 'Cityflo Flexi Pass is a subscription plan that allows you to book rides on consecutive weekdays at discounted prices. You get the flexibility to reschedule rides and receive full refunds on cancellations.'
    },
    {
        question: 'Why should I buy a round trip pass?',
        answer: 'A round trip pass offers better value as it covers both your morning and evening commute. You save more compared to booking individual one-way rides and enjoy the convenience of pre-booked seats.'
    },
    {
        question: 'Why should I buy a one way pass?',
        answer: 'A one-way pass is perfect if you only need transportation in one direction - either to work or back home. It\'s ideal for those with flexible schedules or alternative transport for one leg of their commute.'
    },
    {
        question: 'Does this pass include weekends or holidays?',
        answer: 'No, the Flexi Pass is valid only for weekdays (Monday to Friday). Weekends and public holidays are not included in the pass. You can book separate rides for those days if needed.'
    },
    {
        question: 'Can I transfer my pass to someone else?',
        answer: 'No, the Flexi Pass is non-transferable and is linked to your Cityflo account. Each pass is personalized for the registered user and cannot be shared or transferred to another person.'
    }
]

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null)
    const [showAll, setShowAll] = useState(false)

    const visibleFaqs = showAll ? faqs : faqs.slice(0, 3)

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <div
            className="bg-white"
            style={{
                borderTopLeftRadius: '24px',
                borderTopRightRadius: '24px',
                borderBottomLeftRadius: '0',
                borderBottomRightRadius: '0',
            }}
        >
            {/* Header */}
            <div className="py-6 px-6">
                <h2 className="text-center text-xl font-semibold text-gray-900">
                    Frequently Asked Questions
                </h2>
            </div>

            {/* FAQ Items */}
            <div className="px-4 pb-4">
                {visibleFaqs.map((faq, index) => (
                    <div
                        key={index}
                        className="border-b border-gray-100 last:border-b-0"
                    >
                        {/* Question */}
                        <button
                            onClick={() => toggleFaq(index)}
                            className="w-full py-4 flex items-center justify-between text-left"
                        >
                            <span
                                className={`text-base font-medium ${!showAll && index === 3 ? 'text-gray-400' : 'text-gray-800'
                                    }`}
                            >
                                {faq.question}
                            </span>
                            <ChevronDown
                                className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''
                                    }`}
                            />
                        </button>

                        {/* Answer - Smooth Accordion */}
                        <div
                            className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                }`}
                        >
                            <p className="pb-4 text-sm text-gray-600 leading-relaxed">
                                {faq.answer}
                            </p>
                        </div>
                    </div>
                ))}

                {/* Hidden FAQs Preview (grayed out) */}
                {!showAll && faqs.length > 3 && (
                    <div className="py-4 border-b border-gray-100">
                        <span className="text-base font-medium text-gray-300">
                            {faqs[3].question}
                        </span>
                    </div>
                )}

                {/* View All FAQs Button */}
                <button
                    onClick={() => setShowAll(!showAll)}
                    className="w-full py-4 flex items-center justify-center gap-2 text-blue-600 font-medium"
                >
                    <span>{showAll ? 'Show less' : 'View all FAQs'}</span>
                    <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${showAll ? 'rotate-180' : ''
                            }`}
                    />
                </button>
            </div>
        </div>
    )
}

export default FAQ
