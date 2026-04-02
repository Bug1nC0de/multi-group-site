import { Link } from 'react-router-dom';
import logoImg from '../assets/logo.png';

const WordmarkLogo = ({ to = '/', compact = false, boxed = true, logoHeight }) => {
  return (
    <Link
      to={to}
      className="no-underline flex items-center"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        backgroundColor: boxed ? '#FFFFFF' : 'transparent',
        padding: boxed ? (compact ? '0.55rem 0.8rem' : '0.7rem 1rem') : '0',
        boxShadow: boxed ? '0 12px 30px rgba(15, 23, 42, 0.12)' : 'none',
        borderRadius: boxed ? '4px' : '0'
      }}
    >
      <img 
        src={logoImg} 
        alt="Multi Group Inc" 
        style={{
          height: logoHeight || (compact ? '64px' : '96px'),
          width: 'auto',
          display: 'block'
        }}
      />
    </Link>
  );
};

export default WordmarkLogo;
