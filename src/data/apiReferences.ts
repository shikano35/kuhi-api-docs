import {
  BookOpenIcon,
  UserIcon,
  MapPinIcon,
  DocumentTextIcon,
  PencilSquareIcon,
  ChatBubbleBottomCenterTextIcon,
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
    label: 'monuments',
    routes: [
      '/monuments',
      '/monuments/{id}',
      '/monuments/{id}/inscriptions',
      '/monuments/{id}/events',
      '/monuments/{id}/media',
    ],
    routeDescriptions: [
      '句碑の情報を一覧取得',
      '句碑の情報を取得',
      '句碑の碑文を取得',
      '句碑のイベント履歴を取得',
      '句碑のメディア情報を取得',
    ],
    Icon: BookOpenIcon,
  },
  {
    title: '碑文',
    label: 'inscriptions',
    routes: ['/inscriptions', '/inscriptions/{id}'],
    routeDescriptions: ['碑文の情報を一覧取得', '碑文の情報を取得'],
    Icon: PencilSquareIcon,
  },
  {
    title: '俳句',
    label: 'poems',
    routes: ['/poems', '/poems/{id}'],
    routeDescriptions: ['俳句の情報を一覧取得', '俳句の情報を取得'],
    Icon: ChatBubbleBottomCenterTextIcon,
  },
  {
    title: '俳人',
    label: 'poets',
    routes: ['/poets', '/poets/{id}', '/poets/{id}/monuments'],
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
    routes: ['/locations', '/locations/{id}', '/locations/{id}/monuments'],
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
    routes: ['/sources', '/sources/{id}', '/sources/{id}/monuments'],
    routeDescriptions: [
      '出典情報を一覧取得',
      '出典情報を取得',
      '出典に関連する句碑の一覧取得',
    ],
    Icon: DocumentTextIcon,
  },
];
