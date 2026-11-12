import type { IconType } from 'react-icons';
import { FaFacebookF, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

export interface SocialLink {
  label: string;
  href: string;
  icon: IconType;
}

export const socialLinks: SocialLink[] = [
  { label: 'Instagram', href: 'https://www.instagram.com/techcomponentes', icon: FaInstagram },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/techcomponentes', icon: FaLinkedin },
  { label: 'YouTube', href: 'https://www.youtube.com/@techcomponentes', icon: FaYoutube },
  { label: 'Facebook', href: 'https://www.facebook.com/techcomponentes', icon: FaFacebookF },
];
