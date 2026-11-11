import Link from 'next/link';
import type { ReactNode } from 'react';
import { getContactHref } from '@/lib/contact';

export default function ContactLink({
  message,
  className,
  children,
  requestType = message ? 'orientacao' : 'orcamento',
}: {
  message?: string;
  className?: string;
  children: ReactNode;
  requestType?: 'orcamento' | 'orientacao';
}) {
  return <Link href={getContactHref(message, requestType)} className={className}>{children}</Link>;
}
