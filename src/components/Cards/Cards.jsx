import PropTypes from 'prop-types';

import Card from '../Card/Card'
import { EarthPlanet, UploadToCloud } from '../../../public/icons';

const Cards = ({ data, onFilterChange }) => {
   const cardData = [
      {
         title: 'Domains',
         data: data.domain,
         bgColor: 'DF6710',
         icon: EarthPlanet,
         type: 'domain',
      },
      {
         title: 'IP Addresses',
         data: data.ip,
         bgColor: '483d8b',
         icon: EarthPlanet,
         type: 'ip',
      },
      {
         title: 'Cloud Accounts',
         data: data.cloud,
         bgColor: 'D1B003',
         icon: UploadToCloud,
         type: 'cloud',
      },
   ];
   return (
      <div className='flex gap-8'>
         {cardData.map((card, index) => (
            <Card
               key={index}
               title={card.title}
               totalMonitored={card.data.total_monitored}
               monitored={card.data.monitored}
               live={card.data.live}
               totalLive={card.data.total_live}
               ips={card.data.ips}
               vulns={card.data.vulns}
               ports={card.data.ports}
               total={card.data.total}
               bgColor={card.bgColor}
               mainIcon={card.icon}
               onClick={() => onFilterChange(card.type)}
            />
         ))}
      </div>
   )
}

Cards.propTypes = {
   data: PropTypes.shape({
      domain: PropTypes.object.isRequired,
      ip: PropTypes.object.isRequired,
      cloud: PropTypes.object.isRequired,
   }).isRequired,
   onFilterChange: PropTypes.func.isRequired,
};

export default Cards
