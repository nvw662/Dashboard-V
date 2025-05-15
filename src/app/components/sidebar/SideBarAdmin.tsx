"use client";

import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';
import { styled, useTheme, alpha } from '@mui/material/styles';
import { motion } from 'framer-motion';


import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsIcon from '@mui/icons-material/Settings';
import PeopleIcon from '@mui/icons-material/People';
import LanguageIcon from '@mui/icons-material/Language';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import StorageIcon from '@mui/icons-material/Storage';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import AssessmentIcon from '@mui/icons-material/Assessment';
import InsightsIcon from '@mui/icons-material/Insights';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import EditNoteIcon from '@mui/icons-material/EditNote';
import ApiIcon from '@mui/icons-material/Api';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WebIcon from '@mui/icons-material/Web';
import DnsIcon from '@mui/icons-material/Dns';
import LogoutIcon from '@mui/icons-material/Logout';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CircleIcon from '@mui/icons-material/Circle';
import { JSX } from 'react/jsx-runtime';

interface NavItem {
  segment?: string;
  title?: string;
  children?: NavItem[];
  icon?: JSX.Element;
  isLogout?: boolean;
}

const defaultNavigationItems: NavItem[] = [
  { segment: 'dashboard', title: 'Dashboard', icon: <DashboardIcon fontSize="small" /> },
  {
    segment: 'management',
    title: 'Management',
    icon: <SettingsIcon fontSize="small" />,
    children: [
      { segment: 'users', title: 'User Management', icon: <PeopleIcon fontSize="small" /> },
      { segment: 'websites', title: 'Site Management', icon: <LanguageIcon fontSize="small" /> },
    ],
  },
  {
    segment: 'monitoring',
    title: 'Monitoring',
    icon: <NotificationsActiveIcon fontSize="small" />,
    children: [
      { segment: 'monitoring/ohdear', title: 'OhDear', icon: <NotificationsActiveIcon fontSize="small" /> },
      { segment: 'monitoring/server-info', title: 'Server Info', icon: <StorageIcon fontSize="small" /> },
      { segment: 'monitoring/error-logs', title: 'Error Logs', icon: <ReportProblemIcon fontSize="small" /> },
      {
        segment: 'monitoring/combell-reports',
        title: 'Combell Reports',
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
    title: 'Analysis & Data',
    icon: <InsightsIcon fontSize="small" />,
    children: [
      { segment: 'reports/seo', title: 'SEO Reports', icon: <InsightsIcon fontSize="small" /> },
      { segment: 'reports/module-versions', title: 'Module Versions', icon: <ViewModuleIcon fontSize="small" /> },
      { segment: 'data/entry', title: 'Data Entry', icon: <EditNoteIcon fontSize="small" /> },
    ],
  },
  {
    segment: 'system',
    title: 'System',
    icon: <ApiIcon fontSize="small" />,
    children: [
      { segment: 'system/api-proxy', title: 'API Proxy', icon: <ApiIcon fontSize="small" /> },
      { segment: 'system/settings', title: 'Settings', icon: <SettingsIcon fontSize="small" /> },
    ],
  },
];

interface SidebarProps {
  navigationItems?: NavItem[];
  onNavigate?: (path: string) => void;
  onLogoutClick?: () => void;
  currentPathname?: string;
  drawerWidth?: number;
  logoContent?: React.ReactNode;
}


const SidebarContainer = styled(Box)(({ theme }) => ({
  height: '100vh',
  background: 'linear-gradient(180deg, #111827 0%, #0F172A 100%)',
  color: theme.palette.grey[300],
  borderRight: 'none',
  overflowY: 'auto',
  overflowX: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
  boxShadow: '4px 0 16px rgba(0, 0, 0, 0.1)',
  '&::-webkit-scrollbar': {
    width: '6px',
  },
  '&::-webkit-scrollbar-track': {
    background: 'rgba(255, 255, 255, 0.05)',
  },
  '&::-webkit-scrollbar-thumb': {
    background: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '3px',
  },
  '&::-webkit-scrollbar-thumb:hover': {
    background: 'rgba(255, 255, 255, 0.2)',
  },
}));

const LogoContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: 72,
  borderBottom: `1px solid ${alpha(theme.palette.common.white, 0.08)}`,
}));

const NavList = styled(List)(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(2, 1.5),
}));

const NavSection = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(1.5),
}));

// Styled list item with animations
const StyledListItemButton = styled(ListItemButton, {
  shouldForwardProp: (prop) => prop !== 'selected' && prop !== 'level',
})<{ selected?: boolean; level: number }>(({ theme, selected, level }) => ({
  margin: theme.spacing(0.5, 0),
  paddingLeft: theme.spacing(2 + level * 1.5),
  paddingRight: theme.spacing(1.5),
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1),
  borderRadius: '8px',
  minHeight: 48,
  color: selected ? '#fff' : alpha(theme.palette.common.white, 0.7),
  position: 'relative',
  transition: theme.transitions.create(['background-color', 'color', 'padding-left'], {
    duration: 200,
  }),

  '&::before': selected ? {
    content: '""',
    position: 'absolute',
    left: '0',
    top: '0',
    bottom: '0',
    width: '3px',
    backgroundColor: theme.palette.primary.main,
    borderRadius: '0 4px 4px 0',
  } : {},

  '& .MuiListItemIcon-root': {
    minWidth: 'auto',
    marginRight: theme.spacing(1.5),
    color: selected ? theme.palette.primary.main : alpha(theme.palette.common.white, 0.6),
    transition: theme.transitions.create(['color'], {
      duration: theme.transitions.duration.shortest,
    }),
  },

  '& .MuiListItemText-primary': {
    fontSize: '0.925rem',
    fontWeight: selected ? 600 : 400,
    letterSpacing: '0.01em',
  },

  '& .nav-expand-icon': {
    fontSize: '1.125rem',
    opacity: 0.8,
    color: 'inherit',
    marginLeft: theme.spacing(1),
    transition: theme.transitions.create(['transform'], {
      duration: 200,
    }),
  },

  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.08),
    color: theme.palette.common.white,
    paddingLeft: theme.spacing(2.25 + level * 1.5),
    
    '& .MuiListItemIcon-root': {
      color: selected ? theme.palette.primary.main : theme.palette.primary.light,
    },
  },

  ...(selected && {
    backgroundColor: alpha(theme.palette.primary.main, 0.1),
    '&:hover': {
      backgroundColor: alpha(theme.palette.primary.main, 0.15),
      paddingLeft: theme.spacing(2.25 + level * 1.5),
    },
  }),
}));

// Styled sub-menu container
const SubMenuContainer = styled(Box)(({ theme }) => ({
  marginLeft: theme.spacing(1),
  marginRight: theme.spacing(0.5),
  marginTop: theme.spacing(0.5),
  marginBottom: theme.spacing(0.5),
  borderLeft: `1px solid ${alpha(theme.palette.common.white, 0.08)}`,
  paddingLeft: theme.spacing(0.5),
  borderRadius: 0,
}));

// Badge for notification counts or status indicators
const StatusBadge = styled(Box)<{ active?: boolean }>(({ theme, active }) => ({
  width: 8,
  height: 8,
  borderRadius: '50%',
  backgroundColor: active ? theme.palette.success.main : alpha(theme.palette.common.white, 0.3),
  marginLeft: theme.spacing(1),
}));

const MotionBox = styled(motion.div)({
  width: '100%',
});

const Sidebar = ({
  navigationItems = defaultNavigationItems,
  onNavigate,
  onLogoutClick,
  currentPathname = '/',
  drawerWidth = 280,
  logoContent,
}: SidebarProps) => {
  const theme = useTheme();
  const [open, setOpen] = React.useState<{ [key: string]: boolean }>({});

  // Initialize open state for parent menus when a child is active
  React.useEffect(() => {
    const initOpenState: { [key: string]: boolean } = {};
    
    const checkPath = (items: NavItem[], path: string) => {
      for (const item of items) {
        const itemSegment = item.segment || '';
        const itemPath = itemSegment.startsWith('/') ? itemSegment : `/${itemSegment}`;
        
        // Check if this is a parent with children
        if (item.children && item.children.length > 0) {
          // Check if any child is active
          const childActive = item.children.some(child => {
            const childSegment = child.segment || '';
            const childPath = childSegment.startsWith('/') ? childSegment : `/${childSegment}`;
            return path === childPath || (child.children && child.children.length > 0 && checkPath(child.children, path));
          });
          
          if (childActive) {
            if (item.segment) {
              initOpenState[item.segment] = true;
            }
            // Continue checking children
            checkPath(item.children, path);
          }
        }
      }
    };
    
    checkPath(navigationItems, currentPathname);
    setOpen(prev => ({ ...prev, ...initOpenState }));
  }, [navigationItems, currentPathname]);

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
    const itemPath = item.segment ? (item.segment.startsWith('/') ? item.segment : `/${item.segment}`) : '';
    const isSelected = !item.isLogout && item.segment ? currentPathname === itemPath : false;
    const hasChildren = item.children && item.children.length > 0;
    const isOpen = item.segment ? open[item.segment] || false : false;

    // Check if any child is selected
    const isChildSelected = hasChildren && item.children ? item.children.some(child => {
      const childSegment = child.segment || '';
      const childPath = childSegment.startsWith('/') ? childSegment : `/${childSegment}`;
      return currentPathname === childPath;
    }) : false;

    if (hasChildren) {
      return (
        <React.Fragment key={itemKey}>
          <StyledListItemButton
            level={level}
            selected={isSelected || isChildSelected}
            onClick={() => handleExpandClick(item.segment)}
          >
            {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
            <ListItemText 
              primary={item.title || ''} 
              primaryTypographyProps={{ 
                sx: { 
                  fontWeight: isSelected || isChildSelected ? 600 : 400,
                  color: (isSelected || isChildSelected) ? '#fff' : undefined 
                } 
              }}
            />
            {isOpen ? 
              <KeyboardArrowDownIcon className="nav-expand-icon" /> : 
              <KeyboardArrowRightIcon className="nav-expand-icon" />
            }
          </StyledListItemButton>
          
          <Collapse in={isOpen} timeout={300} unmountOnExit>
            <SubMenuContainer>
              <List component="div" disablePadding>
                {item.children && item.children.map((child) => renderSidebarItem(child, level + 1))}
              </List>
            </SubMenuContainer>
          </Collapse>
        </React.Fragment>
      );
    }

    return (
      <MotionBox
        key={itemKey}
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.2, delay: level * 0.05 }}
      >
        <StyledListItemButton
          level={level}
          selected={isSelected}
          onClick={() => handleItemClick(item)}
          disabled={!item.segment && !item.isLogout}
        >
          {item.icon ? (
            <ListItemIcon>{item.icon}</ListItemIcon>
          ) : (
            level > 0 && 
            <ListItemIcon>
              <CircleIcon sx={{ fontSize: 6, opacity: 0.7 }} />
            </ListItemIcon>
          )}
          <ListItemText primary={item.title || ''} />
          
          {/* Add status indicator for example items - this would be driven by real data in a real app */}
          {item.title === 'Error Logs' && (
            <StatusBadge active sx={{ backgroundColor: theme.palette.error.main }} />
          )}
          {item.title === 'OhDear' && (
            <StatusBadge active />
          )}
        </StyledListItemButton>
      </MotionBox>
    );
  };

  const renderNavSections = () => {
    return (
      <>
        {navigationItems.map((item, index) => (
          <NavSection key={`section-${index}`}>
            {renderSidebarItem(item)}
          </NavSection>
        ))}
        
      </>
    );
  };

  return (
    <SidebarContainer sx={{ width: drawerWidth }}>
      <LogoContainer>
        {logoContent || (
          <Typography variant="h6" component="div" sx={{ 
            fontWeight: 700, 
            background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: '0.02em'
          }}>
          </Typography>
        )}
      </LogoContainer>
      
      <NavList as="nav" aria-labelledby="main-navigation-sidebar">
        {renderNavSections()}
      </NavList>
    </SidebarContainer>
  );
};

export default Sidebar;