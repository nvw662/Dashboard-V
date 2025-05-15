"use client";

import * as React from 'react';
import { styled, useTheme, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsIcon from '@mui/icons-material/Settings';
import PeopleIcon from '@mui/icons-material/People';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LanguageIcon from '@mui/icons-material/Language';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import StorageIcon from '@mui/icons-material/Storage';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import AssessmentIcon from '@mui/icons-material/Assessment';
import InsightsIcon from '@mui/icons-material/Insights';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import EditNoteIcon from '@mui/icons-material/EditNote';
import ApiIcon from '@mui/icons-material/Api';
import ListAltIcon from '@mui/icons-material/ListAlt';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WebIcon from '@mui/icons-material/Web';
import DnsIcon from '@mui/icons-material/Dns';
import LogoutIcon from '@mui/icons-material/Logout';
import { JSX } from 'react/jsx-runtime';

interface NavItem {
  segment?: string;
  title?: string;
  children?: NavItem[];
  icon?: JSX.Element;
  isLogout?: boolean;
}

const defaultUserNavigationItems: NavItem[] = [
  { segment: 'dashboard', title: 'Dashboard', icon: <DashboardIcon fontSize="small" /> },

  {
    segment: 'monitoring',
    title: 'Monitoring',
    icon: <NotificationsActiveIcon fontSize="small" />,
    children: [
      {
        segment: 'monitoring/combell-reports',
        title: 'Mijn Rapporten (Combell)',
        icon: <AssessmentIcon fontSize="small" />,
        children: [
          { segment: 'monitoring/combell/mailbox', title: 'Mailbox', icon: <MailOutlineIcon fontSize="small" /> },
          { segment: 'monitoring/combell/websites', title: 'Websites', icon: <WebIcon fontSize="small" /> },
          { segment: 'monitoring/combell/database', title: 'Database', icon: <DnsIcon fontSize="small" /> },
        ],
      },
    ],
  },

  {
    segment: 'analyse-data',
    title: 'Analyse & Data',
    icon: <InsightsIcon fontSize="small" />,
    children: [
      { segment: 'reports/seo', title: 'Mijn SEO Rapporten', icon: <InsightsIcon fontSize="small" /> },
      { segment: 'data/entry', title: 'Data Invoer', icon: <EditNoteIcon fontSize="small" /> },
    ],
  },
];

interface UserSidebarProps {
  navigationItems?: NavItem[];
  onNavigate?: (path: string) => void;
  onLogoutClick?: () => void;
  currentPathname?: string;
  drawerWidth?: number;
}

const SidebarContainer = styled(Box)(({ theme }) => ({
  height: '100vh',
  backgroundColor: '#000000',
  color: theme.palette.grey[300],
  borderRight: `1px solid ${theme.palette.grey[800]}`,
  overflowY: 'auto',
  overflowX: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
}));

const LogoContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2, 3),
  display: 'flex',
  alignItems: 'center',
  minHeight: 64,
  borderBottom: `1px dashed ${theme.palette.grey[800]}`,
}));

const NavList = styled(List)(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(1, 1.5),
  '& .MuiListSubheader-root': {
    backgroundColor: 'transparent',
    padding: theme.spacing(2, 2, 0.5, 2.5),
    textTransform: 'uppercase',
    fontSize: '0.7rem',
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.grey[600],
    letterSpacing: '0.06em',
  },
  '& .MuiDivider-root': {
    borderColor: alpha(theme.palette.grey[500], 0.15),
    margin: theme.spacing(1.5, 1),
  },
}));

const StyledListItemButton = styled(ListItemButton, {
  shouldForwardProp: (prop) => prop !== 'selected' && prop !== 'level',
})<{ selected?: boolean; level: number }>(({ theme, selected, level }) => ({
  margin: theme.spacing(0.4, 0),
  paddingLeft: theme.spacing(2.5 + level * 2.5),
  paddingRight: theme.spacing(1.5),
  borderRadius: theme.shape.borderRadius,
  minHeight: 44,
  color: 'inherit',
  transition: theme.transitions.create(['background-color', 'color'], {
    duration: theme.transitions.duration.shortest,
  }),

  '& .MuiListItemIcon-root': {
    minWidth: 'auto',
    marginRight: theme.spacing(1.5),
    color: 'inherit',
    opacity: selected ? 1 : 0.7,
    transition: theme.transitions.create(['color', 'opacity'], {
      duration: theme.transitions.duration.shortest,
    }),
  },

  '& .MuiListItemText-primary': {
    fontSize: '0.875rem',
    fontWeight: theme.typography.fontWeightMedium,
  },


  '& .MuiSvgIcon-root:not(.MuiListItemIcon-root .MuiSvgIcon-root)': {
    fontSize: '1.125rem',
    opacity: 0.8,
    color: 'inherit',
    marginLeft: theme.spacing(1),
  },

  ...(selected && {
    backgroundColor: alpha(theme.palette.primary.main, 0.1),
    color: theme.palette.common.white,
    '& .MuiListItemText-primary': {
      fontWeight: theme.typography.fontWeightBold,
    },
    '&:hover': {
      backgroundColor: alpha(theme.palette.primary.main, 0.15),
    },
  }),

  ...(!selected && {
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.05),
      color: theme.palette.common.white,
    },
  }),
}));


const UserSidebar = ({
  navigationItems = defaultUserNavigationItems,
  onNavigate,
  onLogoutClick,
  currentPathname = '/',
  drawerWidth = 320,
}: UserSidebarProps) => {
  const theme = useTheme();
  const [open, setOpen] = React.useState<{ [key: string]: boolean }>({});

  const handleExpandClick = (segment?: string) => {
    if (segment) {
      setOpen((prevOpen) => ({ ...prevOpen, [segment]: !prevOpen[segment] }));
    }
  };

  const handleItemClick = (item: NavItem) => {
    if (item.isLogout && onLogoutClick) {
      onLogoutClick();
    } else if (item.segment && onNavigate) {
      const path = item.segment.startsWith('/') ? item.segment : `/${item.segment}`;
      onNavigate(path);
    }
  };

  const renderSidebarItem = (item: NavItem, level: number = 0): React.ReactNode => {
    const itemKey = `${level}-${item.segment || item.title || Math.random()}`;
    const isSelected = !item.isLogout && item.segment ? currentPathname === (item.segment.startsWith('/') ? item.segment : `/${item.segment}`) : false;

    if (item.children && item.children.length > 0) {
      const isOpen = item.segment ? open[item.segment] || false : false;
      return (
        <React.Fragment key={itemKey}>
          <StyledListItemButton
            level={level}
             selected={isSelected && !isOpen}
            onClick={() => handleExpandClick(item.segment)}
          >
            {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
            <ListItemText primary={item.title} />
            {isOpen ? <ExpandLess /> : <ExpandMore />}
          </StyledListItemButton>
          <Collapse in={isOpen} timeout="auto" unmountOnExit>
            <Box sx={{ bgcolor: alpha(theme.palette.common.white, 0.03), borderRadius: 1, my: 0.5 }}>
              <List component="div" disablePadding>
                {item.children.map((child) => renderSidebarItem(child, level + 1))}
              </List>
            </Box>
          </Collapse>
        </React.Fragment>
      );
    }

    return (
      <StyledListItemButton
        key={itemKey}
        level={level}
        selected={isSelected}
        onClick={() => handleItemClick(item)}
        disabled={!item.segment && !item.isLogout}
      >
        {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
        <ListItemText primary={item.title} />
      </StyledListItemButton>
    );
  };

  return (
    <SidebarContainer sx={{ width: drawerWidth }}>
      <LogoContainer>
         <Typography variant="h6" sx={{ color: theme.palette.common.white, fontWeight: 'bold' }}>
            Gebruiker Menu
         </Typography>
      </LogoContainer>
      <NavList as="nav" aria-labelledby="main-navigation-sidebar">
        {navigationItems.map((item) => renderSidebarItem(item))}
      </NavList>

      <Box sx={{ mt: 'auto', p: theme.spacing(1, 1.5) }}>
           <StyledListItemButton
               level={0}
               onClick={onLogoutClick}
           >
                <ListItemIcon><LogoutIcon fontSize="small" /></ListItemIcon>
                <ListItemText primary="Logout" />
           </StyledListItemButton>
       </Box>

    </SidebarContainer>
  );
};

export default UserSidebar;