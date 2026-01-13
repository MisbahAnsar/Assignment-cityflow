import './App.css'
import FlexiPassHeader from './components/FlexiPassHeader'
import DottedSeparator from './components/DottedSeparator'
import FeatureCards from './components/FeatureCards'
import DiamondIndicator from './components/DiamondIndicator'
import RefundPolicy from './components/RefundPolicy'
import SelectPlan from './components/SelectPlan'
import HowItWorks from './components/HowItWorks'
import FAQ from './components/FAQ'

function App() {
  return (
    <div className="min-h-screen bg-[#001726] text-white relative overflow-hidden">
      {/* Background Image at top */}
      <div
        className="absolute inset-x-0 top-0 h-[280px] bg-cover bg-center opacity-50"
        style={{ backgroundImage: 'url(/bg.png)' }}
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#001726]/70 to-[#001726]" />

      {/* Content */}
      <div className="relative z-10">
        {/* Top Status Bar */}
        <div className="px-4 pt-3 pb-1 flex items-center justify-between">
          <span
            className="text-white"
            style={{
              fontFamily: 'Roboto',
              fontWeight: 500,
              fontSize: '14px',
            }}
          >
            9:30
          </span>

          <div className="flex items-center gap-1">
            <img src="/topright.png" alt="status" className="h-4 w-auto" />
          </div>
        </div>

        {/* Back Button */}
        <div className="px-4 py-3">
          <svg
            className="w-6 h-6 text-[#D4A004]"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </div>

        {/* Main Content */}
        <div className="px-6 pt-2 pb-4">
          <FlexiPassHeader />
          <DottedSeparator />
          <FeatureCards />
          <DiamondIndicator />
          <RefundPolicy />
        </div>

        {/* Select a Plan Section */}
        <SelectPlan />

        {/* How It Works Section */}
        <HowItWorks />

        {/* FAQ Section */}
        <FAQ />
      </div>
    </div>
  )
}

export default App
