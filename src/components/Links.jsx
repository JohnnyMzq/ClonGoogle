import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  { url: '/search', text: '🔎 All' },
  { url: '/images', text: '📸 Images' },
  { url: '/videos', text: '📺 Videos' },
];

export const Links = () => (
  <div className="flex sm:justify-between items-center mt-4">
    {links.map(({ url, text }) => (
      <NavLink to={url} className={({ isActive }) =>
      isActive ? 'm-2 mb-0 text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 dark:border-slate-100 pb-2' : 'm-2 mb-0 dark:text-blue-300'
    }>
        {text}
      </NavLink>
    ))}
  </div>
);

export default Links