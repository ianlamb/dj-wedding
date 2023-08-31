import React from 'react'

export const Divider: React.FC<{ className?: string }> = ({
  className = '',
}) => <hr className={`${className} bg-gold h-[3px] w-full`} />
