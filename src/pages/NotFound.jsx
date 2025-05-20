import { Link } from 'react-router-dom';

const NotFound = () => {
  const containerStyle = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 1rem'
  };

  const titleStyle = {
    fontSize: '4rem',
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: '1rem'
  };

  const subtitleStyle = {
    fontSize: '1.5rem',
    fontWeight: '600',
    color: '#4b5563',
    marginBottom: '1.5rem'
  };

  const textStyle = {
    color: '#6b7280',
    marginBottom: '2rem',
    textAlign: 'center',
    maxWidth: '28rem'
  };

  const linkStyle = {
    backgroundColor: '#2563eb',
    color: 'white',
    padding: '0.75rem 1.5rem',
    borderRadius: '0.375rem',
    textDecoration: 'none',
    transition: 'background-color 0.3s'
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>404</h1>
      <h2 style={subtitleStyle}>Página no encontrada</h2>
      <p style={textStyle}>
        La página que estás buscando no existe o ha sido movida.
      </p>
      <Link to="/" style={linkStyle}>
        Volver al inicio
      </Link>
    </div>
  );
};

export default NotFound;