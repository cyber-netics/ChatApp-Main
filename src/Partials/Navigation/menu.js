export const tabsMenu = [
  {
    tab: 'chat',
    action: 'messages',
    icon: 'MessageCircle',
    status: 'warning',
  },
  {
    tab: 'users',
    action: 'messages',
    icon: 'User',
    status: 'error',
  },
  {
    tab: 'stars',
    icon: 'Star',
  },
  {
    tab: 'archive',
    icon: 'Archive',
  },
];

export const dropmenu = (handlers) => {
  return [
    {
      name: 'Edit profile',
      toggle: () => console.log(),
    },
    {
      name: 'Profile',
      toggle: (cnt) => handlers.toggleDrawer(true, cnt),
    },
    {
      name: 'Settings',
      toggle: (cnt) => handlers.toggleModal(true, cnt),
    },
    { divider: true },
    {
      name: 'Logout',
      toggle: () => console.log(),
    },
  ];
};
