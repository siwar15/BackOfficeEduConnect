import { NavItem } from './nav-item/nav-item';

export const navItems: NavItem[] = [
  {
    navCap: 'Home',
  },
  {
    displayName: 'Dashboard',
    iconName: 'layout-dashboard',
    route: '/dashboard',
  },
  {
    navCap: 'Ui Components',
  },
  {
    displayName: 'competition',
    iconName: 'rosette',
    route: '/ui-components/competition',
  },
  {
    displayName: 'prizes',
    iconName: 'poker-chip',
    route: '/ui-components/Prize',
  },

  {
    displayName: 'Statistiques',
    iconName: 'list',
    route: '/ui-components/stat',
  },

  {
    displayName: 'Menu',
    iconName: 'layout-navbar-expand',
    route: '/ui-components/menu',
  },
  {
    displayName: 'Tooltips',
    iconName: 'tooltip',
    route: '/ui-components/tooltips',
  },
  {
    navCap: 'Auth',
  },
  {
    displayName: 'Login',
    iconName: 'lock',
    route: '/authentication/login',
  },
  {
    displayName: 'Register',
    iconName: 'user-plus',
    route: '/authentication/register',
  },
  {
    navCap: 'Extra',
  },
  {
    displayName: 'Icons',
    iconName: 'mood-smile',
    route: '/extra/icons',
  },
  {
    displayName: 'Sample Page',
    iconName: 'aperture',
    route: '/extra/sample-page',
  },
  {
    displayName: 'Afficher Cours',
    iconName: 'aperture',
    route: '/ui-components/course',
  },
  {
    displayName: 'Afficher Documents',
    iconName: 'aperture',
    route: '/ui-components/document',
  },
];
