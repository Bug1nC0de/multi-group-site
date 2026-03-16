import { Link } from 'react-router-dom';

const WordmarkLogo = ({ to = '/', compact = false }) => {
  return (
    <Link
      to={to}
      className="no-underline"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        padding: compact ? '0.55rem 0.8rem' : '0.7rem 1rem',
        boxShadow: '0 12px 30px rgba(15, 23, 42, 0.12)'
      }}
    >
      <span
        style={{
          color: 'var(--primary)',
          fontWeight: 900,
          fontSize: compact ? '1.4rem' : '2rem',
          lineHeight: 1,
          letterSpacing: '-0.04em',
          textTransform: 'uppercase'
        }}
      >
        Multi
      </span>
      <span
        style={{
          color: '#0F172A',
          fontWeight: 900,
          fontSize: compact ? '1.4rem' : '2rem',
          lineHeight: 1,
          letterSpacing: '-0.04em',
          textTransform: 'uppercase',
          marginLeft: '0.35rem'
        }}
      >
        Group Inc
      </span>
    </Link>
  );
};

export default WordmarkLogo;
