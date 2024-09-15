import React from 'react'
import Container from '../Container'
import Badge from '../Badge.jsx'
import Heading from '../Heading.jsx'
import WishListHover from '../WishListHover.jsx'
import SpecialOfferImg1 from '/src/assets/SpecialOfferImg1.svg'
import SpecialOfferImg2 from '/src/assets/SpecialOfferImg2.svg'
import SpecialOfferImg3 from '/src/assets/SpecialOfferImg3.svg'
import SpecialOfferImg4 from '/src/assets/SpecialOfferImg4.svg'

const SpecialOffer = () => {
  return (
    <div className='mt-36'>
        <Container>
        <Heading title='Special Offer'/>
        <div className="flex justify-between mt-28">
        <div>
          <div className="relative overflow-y-hidden group">
            <img className="max-w-[350px]" src={SpecialOfferImg1} alt="" />
            <Badge title="New" />
            <WishListHover />
          </div>
          <div className="flex justify-between mt-6">
            <h3 className="font-dm text-xl font-bold">Basic Crew Neck Tee</h3>
            <p className="text-primaryBg">$44.00</p>
          </div>
          <p className="text-primaryBg mt-5">Black</p>
        </div>

        <div>
          <div className="relative overflow-y-hidden group">
            <img className="max-w-[350px]" src={SpecialOfferImg2} alt="" />
            <Badge title="New" />
            <WishListHover />
          </div>
          <div className="flex justify-between mt-6">
            <h3 className="font-dm text-xl font-bold">Basic Crew Neck Tee</h3>
            <p className="text-primaryBg">$44.00</p>
          </div>
          <p className="text-primaryBg mt-5">Black</p>
        </div>

        <div>
          <div className="relative overflow-y-hidden group">
            <img className="max-w-[350px]" src={SpecialOfferImg3} alt="" />
            <Badge title="New" />
            <WishListHover />
          </div>
          <div className="flex justify-between mt-6">
            <h3 className="font-dm text-xl font-bold">Basic Crew Neck Tee</h3>
            <p className="text-primaryBg">$44.00</p>
          </div>
          <p className="text-primaryBg mt-5">Black</p>
        </div>

        <div>
          <div className="relative overflow-y-hidden group">
            <img className="max-w-[350px]" src={SpecialOfferImg4} alt="" />
            <Badge title="New" />
            <WishListHover />
          </div>
          <div className="flex justify-between mt-6">
            <h3 className="font-dm text-xl font-bold">Basic Crew Neck Tee</h3>
            <p className="text-primaryBg">$44.00</p>
          </div>
          <p className="text-primaryBg mt-5">Black</p>
        </div>
      </div>
      </Container>
    </div>
  )
}

export default SpecialOffer