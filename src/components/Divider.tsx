import React from 'react'
import DividerSVG from '../../assets/divider.svg'

export const Divider: React.FC<{ className?: string }> = ({
  className = '',
}) => <div className={`${className} w-full flex justify-center`}><DividerSVG className="w-full max-w-[600px] h-auto" /></div>
