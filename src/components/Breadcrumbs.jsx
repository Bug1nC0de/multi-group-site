import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  if (pathnames.length === 0) return null;

  return (
    <nav className="flex items-center space-x-2 text-[10px] font-black uppercase tracking-[0.2em] text-text-muted/50 mb-8">
      <Link to="/" className="hover:text-primary transition-colors flex items-center gap-2 text-text-muted">
        <Home size={12} />
        <span>Terminal</span>
      </Link>
      
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;
        const displayName = name.replace(/-/g, ' ');

        return (
          <div key={name} className="flex items-center space-x-2">
            <ChevronRight size={10} className="text-text-muted/20" />
            {isLast ? (
              <span className="text-primary">{displayName}</span>
            ) : (
              <Link to={routeTo} className="hover:text-text-main transition-colors text-text-muted">
                {displayName}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;
