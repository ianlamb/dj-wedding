import React from 'react'

export const Section: React.FC<{ className?: string; children?: JSX.Element | Array<JSX.Element> }> = ({
  className = '',
  children,
}) => (
  <div className={`${className} w-full`}>
    <div className="p-8 mx-auto max-w-[1200px]">{children}</div>
  </div>
)
