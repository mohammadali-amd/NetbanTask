import PropTypes from 'prop-types';
import Hexagon from '../Shapes/Hexagon ';
import { formatTimestamp } from '../../utils/formatTimestamp';

const Assets = ({ data, filter }) => {
   const filteredAssets = filter ? data.assets.filter(asset => asset.type === filter) : data.assets;

   return (
      <div className="overflow-auto bg-gray-900 rounded-xl text-white p-4 font-bold">
         <h2 className="text-lg pb-6">Assets</h2>
         <table className="min-w-full border-separate border-spacing-y-2 rounded-xl">
            <thead className="bg-gray-700 rounded-xl">
               <tr className="rounded-xl text-left">
                  <th className="pl-5 py-2 rounded-l-md">Grade</th>
                  <th>Name</th>
                  <th className='text-center'>Total Vulnerabilities</th>
                  <th className=" rounded-r-md text-center">Last Seen</th>
               </tr>
            </thead>
            <tbody>
               {filteredAssets.map((asset) => (
                  <tr key={asset.name} className="bg-gray-800">
                     <td className="pl-5 py-2 rounded-l-md">
                        <div className="relative flex items-center justify-center w-10 h-10">
                           <Hexagon fillColor={asset.grade === 'F' ? '#68190b' : '#7c0724'} />
                           <span className="absolute text-black font-bold">
                              {asset.grade}
                           </span>
                        </div>
                     </td>
                     <td className='font-normal'>{asset.name}</td>
                     <td className='font-normal text-center'>{asset.total_vuls}</td>
                     <td className="rounded-r-md pr-4 md:pr-0 font-normal text-center">{formatTimestamp(asset.lastSeen)}</td>
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
   )
}


Assets.propTypes = {
   data: PropTypes.shape({
      assets: PropTypes.arrayOf(PropTypes.shape({
         grade: PropTypes.string.isRequired,
         lastSeen: PropTypes.number.isRequired,
         name: PropTypes.string.isRequired,
         total_vuls: PropTypes.number.isRequired,
         type: PropTypes.string.isRequired,
      })).isRequired,
   }).isRequired,
   filter: PropTypes.string,
};

export default Assets