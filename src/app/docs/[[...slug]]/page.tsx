import React from 'react';
import { notFound, redirect } from 'next/navigation';
import { getDocData } from '@/data/docs';
import { DocContent } from './DocContent';

interface PageProps {
  params: Promise<{
    slug?: string[];
  }>;
}

export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  const slugArray = resolvedParams.slug || ['simple-guide'];
  const slugKey = slugArray.join('/');
  const doc = getDocData(slugKey, 'en') || getDocData('simple-guide', 'en');

  if (!doc) {
    return {
      title: 'Doc Not Found | Stellar-Aegis',
    };
  }

  return {
    title: `${doc.title} | Stellar-Aegis Documentation`,
    description: doc.description,
  };
}

export default async function DocPage({ params }: PageProps) {
  const resolvedParams = await params;
  const slugArray = resolvedParams.slug || ['simple-guide'];
  const slugKey = slugArray.join('/');

  const doc = getDocData(slugKey, 'en');

  if (!doc) {
    // Fallback to simple-guide if slug is invalid or overview
    if (slugKey === 'overview' || !resolvedParams.slug) {
      redirect('/docs/simple-guide');
    } else {
      notFound();
    }
  }

  return <DocContent slugKey={slugKey} />;
}
