'use client';

import { Card } from 'flowbite-react';

export default function Table({stocks}) {
  return (
    <Card className='bg-gray border-none mt-10 md:mt-0 w-full md:w-1/3'>
      
      <div className="flow-root">
        <ul className="divide-y divide-gray-700">
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
              
              <div className="min-w-0 flex-1">
                <p className="truncate text-base font-medium text-white">
                  Previous Close
                </p>
                <p className="truncate text-base text-gray-400">
                  
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-white">
              ₹ {stocks.Previous_Close}
              </div>
            </div>
          </li>
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
              
              <div className="min-w-0 flex-1">
                <p className="truncate text-base font-medium text-white">
                  Day Range
                </p>
                <p className="truncate text-base text-gray-400">
                 
                </p>
              </div>
              <div className="inline-flex text-base items-center  font-semibold text-white">
              ₹ {stocks.Day_Low} - ₹ {stocks.Day_High}
              </div>
            </div>
          </li>
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
              
              <div className="min-w-0 flex-1">
                <p className="truncate text-base font-medium text-white">
                  Volume
                </p>
                <p className="truncate text-base text-gray-400">
                  {/* email@windster.com */}
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-white">
                ₹ {stocks.Volume}
              </div>
            </div>
          </li>
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
              
              <div className="min-w-0 flex-1">
                <p className="truncate text-base font-medium text-white">
                  Market Cap in Cr
                </p>
                <p className="truncate text-base text-gray-400">
                  {/* email@windster.com */}
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-white">
                ₹ {stocks.MarketCap}
              </div>
            </div>
          </li>
          <li className="pb-0 pt-3 sm:pt-4">
            <div className="flex items-center space-x-4">
              
              <div className="min-w-0 flex-1">
                <p className="truncate text-base font-medium text-white">
                Dividend Yield 
                </p>
                <p className="truncate text-base text-gray-400">
                  {/* email@windster.com */}
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-white">
                ₹ {stocks.Dividend_Yield}
              </div>
            </div>
          </li>
        </ul>
      </div>
    </Card>
  )
}


