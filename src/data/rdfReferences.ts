import {
  BookOpenIcon,
  UserIcon,
  MapPinIcon,
  ChatBubbleBottomCenterTextIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline';

export interface RdfReference {
  title: string;
  label: string;
  routes: string[];
  routeDescriptions: string[];
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export const rdfReferences: RdfReference[] = [
  {
    title: '句碑',
    label: 'monuments',
    routes: ['/monuments', '/monuments/{id}'],
    routeDescriptions: ['句碑の情報を一覧取得', '句碑の情報を取得'],
    Icon: BookOpenIcon,
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
    routes: ['/poets', '/poets/{id}'],
    routeDescriptions: ['俳人の情報を一覧取得', '俳人の情報を取得'],
    Icon: UserIcon,
  },
  {
    title: '場所',
    label: 'locations',
    routes: ['/locations', '/locations/{id}'],
    routeDescriptions: ['場所の情報を一覧取得', '場所の情報を取得'],
    Icon: MapPinIcon,
  },
  {
    title: 'VoID',
    label: 'void',
    routes: ['/void'],
    routeDescriptions: ['データセットのメタデータ'],
    Icon: GlobeAltIcon,
  },
];
