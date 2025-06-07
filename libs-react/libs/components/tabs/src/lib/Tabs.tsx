import React, { useState, ReactNode } from 'react';
import './tabs.scss';

export interface Tab {
  label: string;
  content: ReactNode;
}

export interface TabsProps {
  tabs: Tab[];
}

export const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [active, setActive] = useState(0);
  return (
    <div className="sky-tabs">
      <ul className="sky-tab-list">
        {tabs.map((t, i) => (
          <li key={i} className={active === i ? 'active' : ''}>
            <button onClick={() => setActive(i)}>{t.label}</button>
          </li>
        ))}
      </ul>
      <div className="sky-tab-content">{tabs[active]?.content}</div>
    </div>
  );
};
