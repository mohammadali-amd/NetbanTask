import PropTypes from 'prop-types';

import { Bug, Conflict, DownLeftArrow, Globe } from "../../../public/icons"
import Chart from '../Chart/Chart';

const Card = ({ title, totalMonitored, monitored, totalLive, live, ips, vulns, ports, total, bgColor, mainIcon, onClick }) => {
   const items = [
      { image: Globe, title: 'IPs', number: ips, },
      { image: Conflict, title: 'Ports', number: ports, },
      { image: Bug, title: 'Vulns', number: vulns, },
   ]

   return (
      <div className="bg-[#1D2229] text-white font-bold rounded-xl p-3 cursor-pointer" onClick={onClick}>
         <div className="flex justify-between mb-4">
            <div className={`bg-[#${bgColor}] rounded-xl`}>
               <div className="flex justify-center px-3 py-1">
                  <img src={mainIcon} alt="main icon" className="h-10" />
               </div>
               <span className="flex justify-center rounded-b-xl bg-white text-black font-bold">{total}</span>
            </div>
            <div className="items-start">
               <img src={DownLeftArrow} alt="" className="h-5" />
            </div>
         </div>
         <h3 className="py-2">{title}</h3>
         <hr />
         <div className="flex gap-6 py-4">
            <div className="flex items-center gap-3">
               <div>
                  <p>Live</p>
                  <span>{totalLive}</span>
               </div>
               {/* <img src={DashboardFull1} alt="" className="h-12" /> */}
               <Chart data={live} />
            </div>
            <div className="flex items-center gap-3">
               <div>
                  <p>Monitored</p>
                  <span>{totalMonitored}</span>
               </div>
               {/* <img src={DashboardFull1} alt="" className="h-12" /> */}
               <Chart data={monitored} />
            </div>
         </div>
         <hr />
         <div className="flex gap-12 py-4">
            {items.map((item, index) => (
               <div className="flex" key={index}>
                  <div className="flex items-center bg-[#327794] p-2 rounded-xl">
                     <img src={item.image} alt="" className="h-8 w-8" />
                  </div>
                  <div className="pl-2">
                     <p>{item.title}</p>
                     <span>{item.number}</span>
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
