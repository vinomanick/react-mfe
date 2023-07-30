import { navigateToHostRoute } from '../utils';

export const GroupsPage = () => {
  const handleNavigation = () => {
    navigateToHostRoute({ route: '/dashboard' });
  };

  return (
    <section>
      <div>Groups page rendered from react</div>
      <button onClick={handleNavigation}>Navigate to host app dashboard</button>
    </section>
  );
};
