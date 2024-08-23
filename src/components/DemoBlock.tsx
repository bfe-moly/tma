import React from 'react';

export const DemoBlock = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div style={{ padding: 16 }}>
    <h3>{title}</h3>
    {children}
  </div>
);
