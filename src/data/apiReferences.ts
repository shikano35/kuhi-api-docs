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
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export const apiReferences: ApiReference[] = [
  {
    title: '句碑',
    label: 'haiku-monuments',
    routes: ['/haiku-monuments', '/haiku-monuments/{id}'],
    Icon: BookOpenIcon,
  },
  {
    title: '俳人',
    label: 'poets',
    routes: ['/poets', '/poets/{id}', '/poets/{id}/haiku-monuments'],
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
    Icon: MapPinIcon,
  },
  {
    title: '出典',
    label: 'sources',
    routes: ['/sources', '/sources/{id}', '/sources/{id}/haiku-monuments'],
    Icon: DocumentTextIcon,
  },
];
