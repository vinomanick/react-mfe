import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export const RootPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleListener = (event: any) => {
      const { data } = event;

      if (!data.type) {
        return;
      }

      if (data.type === 'navigateToAdminMfeHome') {
        navigate('/admin');
      }
    };
    window.addEventListener('message', handleListener);

    return () => {
      window.removeEventListener('message', handleListener);
    };
  }, [navigate]);

  return <Outlet />;
};
