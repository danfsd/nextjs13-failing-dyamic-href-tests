"use client";
import React, {FC} from 'react';
import Link from 'next/link';

const MyButton: FC<React.PropsWithChildren<{slug: string}>> = ({
    slug, ...props
}) => (
  <Link
    href={{pathname: '/course/[courseSlug]', query: {courseSlug: slug}}}
    legacyBehavior
    passHref
  >
    <a className="button" {...props}>
      See Course Details
    </a>
  </Link>
);

export default MyButton;
