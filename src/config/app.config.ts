interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Restaurant Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Restaurant Owner', 'Restaurant Manager'],
  tenantName: 'Restaurant',
  applicationName: 'Restaurant booking engine',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read restaurant information',
    'Read menus from the restaurant',
    'Create reservations',
    'Create orders',
  ],
  ownerAbilities: ['Manage the restaurant', 'Manage the menus', 'Manage the tables', 'Manage the reservations'],
  getQuoteUrl: 'https://app.roq.ai/proposal/4fcbbb29-f704-4fb8-995e-3a738e93ed0a',
};
