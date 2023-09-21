import { Tab } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface TabListCustomComponentProps {
  bgColor: string
  children: ReactNode
}

export function TabListCustomComponent({
  bgColor,
  children,
}: TabListCustomComponentProps) {
  return (
    <Tab
      _selected={{
        background: `linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, ${bgColor} 100%)`,
      }}
    >
      {children}
    </Tab>
  )
}
