import React from 'react';

interface SkeletonProps {
  className?: string;
}

export const Skeleton: React.FC<SkeletonProps> = ({ className }) => {
  return (
    <div className={`animate-pulse bg-gray-200 rounded ${className}`}></div>
  );
};

export const ProductCardSkeleton = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col h-full">
      <Skeleton className="h-48 w-full rounded-none" />
      <div className="p-5 flex flex-col flex-grow">
        <Skeleton className="h-3 w-16 mb-2" />
        <Skeleton className="h-6 w-3/4 mb-3" />
        <Skeleton className="h-4 w-full mb-1" />
        <Skeleton className="h-4 w-5/6 mb-4" />
        <div className="mt-auto border-t border-gray-100 pt-4 flex justify-between items-center">
          <Skeleton className="h-8 w-24" />
          <Skeleton className="h-10 w-10 rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export const ProductDetailSkeleton = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 lg:p-12 flex flex-col lg:flex-row gap-12">
      <div className="lg:w-1/2">
        <Skeleton className="w-full h-96 rounded-xl" />
      </div>
      <div className="lg:w-1/2 flex flex-col justify-center">
        <Skeleton className="h-6 w-24 mb-4 rounded-full" />
        <Skeleton className="h-10 w-3/4 mb-4" />
        <div className="mb-6 pb-6 border-b border-gray-100">
          <Skeleton className="h-4 w-32 mb-2" />
          <Skeleton className="h-12 w-48 mb-2" />
          <Skeleton className="h-4 w-40" />
        </div>
        <Skeleton className="h-24 w-full mb-8" />
        <div className="flex flex-col sm:flex-row gap-4 mt-auto">
          <Skeleton className="h-14 flex-grow rounded-xl" />
          <Skeleton className="h-14 w-48 rounded-xl" />
        </div>
      </div>
    </div>
  );
};
