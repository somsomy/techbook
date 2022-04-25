import TreeView from '@mui/lab/TreeView';
import TreeItem from '@mui/lab/TreeItem';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import Link from 'next/link';

interface NavProps {
  open: boolean;
}

const Nav = (props: NavProps) => {
  const { open } = props;

  return (
    <TreeView
      aria-label="file system navigator"
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      sx={{ height: 240, flexGrow: 1, maxWidth: 400, overflowY: 'auto', opacity: open ? 1 : 0 }}
    >
      {menuList.map((menu) => (
        <TreeItem key={menu.topMenu} nodeId={menu.topMenu} label={menu.topMenu}>
          {menu.subMenu.map((subMenu) => (
            <Link key={subMenu.label} href={`/${menu.topMenu}/${subMenu.label}`}>
              <TreeItem nodeId={subMenu.label} label={subMenu.label} />
            </Link>
          ))}
        </TreeItem>
      ))}
    </TreeView>
  );
};

export default Nav;

interface MenuList {
  topMenu: string;
  subMenu: { label: string }[];
}

const menuList: MenuList[] = [
  { topMenu: 'subject', subMenu: [{ label: 'sub' }, { label: 'react-hook-form' }] },
  { topMenu: 'css', subMenu: [{ label: 'water-drop' }, { label: 'theme' }] },
  { topMenu: 'react-library', subMenu: [{ label: 'sub' }, { label: 'react-hook-form' }] },
  { topMenu: 'animation', subMenu: [{ label: 'sub' }, { label: 'theme' }] }
];
