import React from 'react';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';

interface TriggerProps {
  collapsed: boolean;
  toggle: () => void;
}

export const Trigger: React.FC<TriggerProps> = ({ collapsed, toggle }) => {
  if (collapsed) {
    return (
      <MenuUnfoldOutlined
        className="trigger"
        onClick={toggle}
        style={{ display: 'block', fontSize: '16px' }}
      />
    );
  } else {
    return (
      <MenuFoldOutlined
        className="trigger"
        onClick={toggle}
        style={{ display: 'block', fontSize: '16px' }}
      />
    );
  }
};
