import React from 'react'
import Asidefilter from './AsideFilter'
import SortProduct from './SortProduct'
import Product from './Product/Product'

export default function ProductList() {
  return (
    <div className='bg-gray-200 py-6'>
      <div className='container'>
        <div className='grid grid-cols-12 gap-6'>
          <div className='col-span-3'>
            <Asidefilter />
          </div>
          <div className='col-span-9'>
            <SortProduct />
            <div className='gird-cols-2 md:grids-cols-3 mt-6 grid gap-3 lg:grid-cols-4 xl:grid-cols-5'>
              {Array(30)
                .fill(0)
                .map((_, index) => {
                  return (
                    <div className='col-span-1' key={index}>
                      <Product />
                    </div>
                  )
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
