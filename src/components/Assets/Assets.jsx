import PropTypes from 'prop-types';
import Hexagon from '../Shapes/Hexagon ';

const Assets = ({ data, filter }) => {
   const filteredAssets = filter ? data.assets.filter(asset => asset.type === filter) : data.assets;

   return (
      <div className="overflow-auto bg-gray-900 rounded-xl text-white p-4 font-bold">
         <h2 className="text-lg pb-6">Assets</h2>
         <table className="min-w-full border-separate border-spacing-y-2 rounded-xl">
            <thead className="bg-gray-700 rounded-xl">
               <tr className="rounded-xl text-left">
                  <th className="pl-5 py-3 rounded-l-xl">Grade</th>
                  <th className="py-3">Name</th>
                  <th className="py-3">Total Vulnerabilities</th>
                  <th className="py-3 rounded-r-xl">Last Seen</th>
               </tr>
            </thead>
            <tbody>
               {filteredAssets.map((asset) => (
                  <tr key={asset.name} className="bg-gray-800 my-5 rounded-xl">
                     <td className="pl-5 py-3 rounded-l-xl">
                        <div className="relative flex items-center justify-center w-10 h-10">
                           <Hexagon fillColor={asset.grade === 'F' ? '#68190b' : '#7c0724'} />
                           <span className="absolute text-black font-bold">
                              {asset.grade}
                           </span>
                        </div>
                     </td>
                     <td>{asset.name}</td>
                     <td>{asset.total_vuls}</td>
                     <td className="rounded-r-xl pr-4">{asset.lastSeen}</td>
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