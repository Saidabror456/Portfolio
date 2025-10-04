import './logo.css'

function Logo() {
  return (
    <div className="logo-container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 60"
        className="logo-svg"
      >
        <circle
          cx="30"
          cy="30"
          r="26"
          stroke="url(#grad)"
          strokeWidth="4"
          fill="url(#bgGrad)"
        />

        <text
          x="30"
          y="38"
          textAnchor="middle"
          fontSize="24"
          fontWeight="700"
          fill="url(#grad)"
          fontFamily="Poppins, sans-serif"
          style={{
            paintOrder: 'stroke',
            stroke: 'rgba(0,0,0,0.15)',
            strokeWidth: '1px',
          }}
        >
          S
        </text>

        <defs>
          {/* Основной градиент */}
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>

          {/* Фон (слегка прозрачный) */}
          <radialGradient id="bgGrad" cx="50%" cy="50%" r="65%">
            <stop offset="0%" stopColor="rgba(56,189,248,0.15)" />
            <stop offset="100%" stopColor="rgba(168,85,247,0.05)" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}

export default Logo;
