import { NavLink } from 'react-router-dom';

export const AdminPage = () => {
  return (
    <div>
      Admin settings
      <div>
        <NavLink to="/admin/agents">Agents</NavLink>
        <NavLink to="/admin/groups">Groups</NavLink>
      </div>
    </div>
  );
};
