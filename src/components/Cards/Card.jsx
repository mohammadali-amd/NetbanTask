import PropTypes from 'prop-types';

import { Bug, Conflict, DownLeftArrow, Globe } from "../../../public/icons"
import Chart from '../Chart/BarChart';

const Card = ({ title, totalMonitored, monitored, totalLive, live, ips, vulns, ports, total, bgColor, mainIcon, onClick }) => {
   const items = [
      { image: Globe, title: 'IPs', number: ips, },
      { image: Conflict, title: 'Ports', number: ports, },
      { image: Bug, title: 'Vulns', number: vulns, },
   ]

   return (
      <div className="bg-[#1D2229] text-white font-bold rounded-xl p-3 my-3 lg:my-0 cursor-pointer" onClick={onClick}>
         <div className="flex justify-between mb-4">
            <div className={`rounded-xl`} style={{ backgroundColor: `#${bgColor}` }}>
               <div className="flex justify-center px-3 py-1">
                  <img src={mainIcon} alt="main icon" className="h-10" />
               </div>
               <span className="flex justify-center rounded-b-xl bg-white text-black font-extrabold">{total}</span>
            </div>
            <div className="items-start">
               <img src={DownLeftArrow} alt="" className="h-5" />
            </div>
         </div>
         <h3 className="py-2">{title}</h3>
         <hr />
         <div className="lg:flex space-y-8 lg:space-y-0 gap-6 py-4">
            <div className="flex items-center justify-between gap-3">
               <div>
                  <p>Live</p>
                  <span className='text-xl'>{totalLive}</span>
               </div>
               <Chart data={live} />
            </div>
            <div className="flex items-center justify-between gap-3">
               <div>
                  <p>Monitored</p>
                  <span className='text-xl'>{totalMonitored}</span>
               </div>
               <Chart data={monitored} />
            </div>
         </div>
         <hr />
         <div className="lg:flex space-y-3 lg:space-y-0 gap-12 py-4">
            {items.map((item, index) => (
               <div className="flex" key={index}>
                  <div className="flex items-center bg-[#327794] p-2 rounded-xl">
                     <img src={item.image} alt="" className="h-8 w-8" />
                  </div>
                  <div className="pl-2">
                     <p>{item.title}</p>
                     <span className='text-xl'>{item.number}</span>
                  </div>
               </div>
            ))}
         </div>
      </div>
   )
}

Card.propTypes = {
   title: PropTypes.string.isRequired,
   totalMonitored: PropTypes.number.isRequired,
   monitored: PropTypes.array.isRequired,
   live: PropTypes.array.isRequired,
   totalLive: PropTypes.number.isRequired,
   ips: PropTypes.number.isRequired,
   vulns: PropTypes.number.isRequired,
   ports: PropTypes.number.isRequired,
   total: PropTypes.number.isRequired,
   bgColor: PropTypes.string.isRequired,
   mainIcon: PropTypes.string.isRequired,
   onClick: PropTypes.func.isRequired,
};

export default Card
