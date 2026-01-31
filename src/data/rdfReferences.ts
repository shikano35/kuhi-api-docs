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
    routeDescriptions: ['句碑一覧をRDFで取得', '特定の句碑をRDFで取得'],
    Icon: BookOpenIcon,
  },
  {
    title: '俳句',
    label: 'poems',
    routes: ['/poems', '/poems/{id}'],
    routeDescriptions: ['俳句一覧をRDFで取得', '特定の俳句をRDFで取得'],
    Icon: ChatBubbleBottomCenterTextIcon,
  },
  {
    title: '俳人',
    label: 'poets',
    routes: ['/poets', '/poets/{id}'],
    routeDescriptions: ['俳人一覧をRDFで取得', '特定の俳人をRDFで取得'],
    Icon: UserIcon,
  },
  {
    title: '場所',
    label: 'locations',
    routes: ['/locations', '/locations/{id}'],
    routeDescriptions: ['場所一覧をRDFで取得', '特定の場所をRDFで取得'],
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
