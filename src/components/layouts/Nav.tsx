import { useRouter } from 'next/router';

import TreeView from '@mui/lab/TreeView';
import TreeItem from '@mui/lab/TreeItem';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import { PATH_DASHBOARD } from '../../routes/paths';

interface NavProps {
  open: boolean;
}

const Nav = (props: NavProps) => {
  const { open } = props;

  const router = useRouter();

  return (
    <TreeView
      aria-label="file system navigator"
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      sx={{ height: 240, flexGrow: 1, maxWidth: 400, overflowY: 'auto', opacity: open ? 1 : 0 }}
    >
      {menuList.map((menu) => (
        <TreeItem key={`top-${menu.id}`} nodeId={`top-${menu.id}`} label={menu.topMenu}>
          {menu.subMenu.map((subMenu) => (
            <TreeItem
              key={`sub-${subMenu.id}`}
              nodeId={`sub-${subMenu.id}`}
              label={subMenu.label}
              onClick={() => router.push(PATH_DASHBOARD[subMenu.path])}
            />
          ))}
        </TreeItem>
      ))}
    </TreeView>
  );
};

export default Nav;

interface MenuList {
  id: number;
  topMenu: string;
  subMenu: {
    id: number;
    label: string;
    path: string;
  }[];
}

const menuList: MenuList[] = [
  {
    id: 1,
    topMenu: 'Applications',
    subMenu: [{ id: 1, label: 'Calendar', path: 'calendar' }]
  },
  {
    id: 2,
    topMenu: 'Document',
    subMenu: []
  }
];
