'use client';

import { Breadcrumb } from 'flowbite-react';
import { HiHome } from 'react-icons/hi';

export default function Breadcrumbs({stockName}) {
  return (
    <Breadcrumb
      aria-label="Solid background breadcrumb example"
      className="pb-6 "
    >
      <Breadcrumb.Item
        href=""
        icon={HiHome}
      >
        <p>
          Home
        </p>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        {stockName}
      </Breadcrumb.Item>
  
    </Breadcrumb>
  )
}


