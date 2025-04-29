import {
  BookOpenIcon,
  UserIcon,
  MapPinIcon,
  DocumentTextIcon,
} from '@heroicons/react/24/outline';

export interface ApiReference {
  title: string;
  label: string;
  routes: string[];
  routeDescriptions: string[];
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export const apiReferences: ApiReference[] = [
  {
    title: '句碑',
    label: 'haiku-monuments',
    routes: ['/haiku-monuments', '/haiku-monuments/{id}'],
    routeDescriptions: ['句碑の情報を一覧取得', '句碑の情報を取得'],
    Icon: BookOpenIcon,
  },
  {
    title: '俳人',
    label: 'poets',
    routes: ['/poets', '/poets/{id}', '/poets/{id}/haiku-monuments'],
    routeDescriptions: [
      '俳人情報を一覧取得',
      '俳人情報を取得',
      '俳人に関連する句碑の一覧取得',
    ],
    Icon: UserIcon,
  },
  {
    title: '場所',
    label: 'locations',
    routes: [
      '/locations',
      '/locations/{id}',
      '/locations/{id}/haiku-monuments',
    ],
    routeDescriptions: [
      '設置場所の情報を一覧取得',
      '設置場所の情報を取得',
      '設置場所に関連する句碑の一覧取得',
    ],
    Icon: MapPinIcon,
  },
  {
    title: '出典',
    label: 'sources',
    routes: ['/sources', '/sources/{id}', '/sources/{id}/haiku-monuments'],
    routeDescriptions: [
      '出典情報を一覧取得',
      '出典情報を取得',
      '出典に関連する句碑の一覧取得',
    ],
    Icon: DocumentTextIcon,
  },
];
