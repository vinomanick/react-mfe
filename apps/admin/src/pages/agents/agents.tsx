import { NavLink } from 'react-router-dom';

export const AgentsPage = () => (
  <section>
    Agents page is rendered from react
    <NavLink to="/admin/agents/create">New agent</NavLink>
  </section>
);
