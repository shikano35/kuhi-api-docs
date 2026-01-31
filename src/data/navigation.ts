export interface NavItem {
  title: string;
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { title: 'Top', label: 'トップ', href: '/' },
  { title: 'Home', label: '概要', href: '#overview' },
  { title: 'API Reference', label: 'APIリファレンス', href: '#reference' },
  { title: 'URI', label: 'URI', href: '#uri' },
  { title: 'Changelog', label: '変更履歴', href: '#changelog' },
];
