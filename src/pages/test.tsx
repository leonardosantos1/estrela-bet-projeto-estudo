import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'

export default function Test() {
  return (
    <Menu>
      <MenuButton>Actions</MenuButton>
      <MenuList bg="blackAlpha.800">
        <MenuItem>Download</MenuItem>
        <MenuItem>Create a Copy</MenuItem>
        <MenuItem>Mark as Draft</MenuItem>
        <MenuItem>Delete</MenuItem>
        <MenuItem>Attend a Workshop</MenuItem>
      </MenuList>
    </Menu>
  )
}
