import '../App.css'

const FlexiPassHeader = () => {
    return (
        <div className="text-center mb-5">
            <h2
                className="text-[#D4A004] italic"
                style={{
                    fontFamily: 'Georgia, serif',
                    fontSize: '22px',
                    fontWeight: 400,
                    marginBottom: '2px',
                }}
            >
                cityflo
            </h2>
            <h1
                className="text-white font-bold"
                style={{
                    fontSize: '28px',
                    letterSpacing: '3px',
                    fontFamily: 'sans-serif',
                }}
            >
                FLEXI PASS
            </h1>
        </div>
    )
}

export default FlexiPassHeader
