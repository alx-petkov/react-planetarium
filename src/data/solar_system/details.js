import { ITEMS } from '../../constants/solar_system';
import { index_details } from './details/index_details';
import { mercury_details } from './details/mercury_details';
import { venus_details } from './details/venus_details';
import { earth_details } from './details/earth_details';
import { mars_details } from './details/mars_details';


export const solarSystemDetails = {
  [ITEMS.index]: index_details,
  [ITEMS.sunn]: mercury_details,
  [ITEMS.mercury]: mercury_details,
  [ITEMS.venus]: venus_details,
  [ITEMS.earth]: earth_details,
  [ITEMS.mars]: mars_details,
  [ITEMS.ceres]: mars_details,
  [ITEMS.jupiter]: mars_details,
  [ITEMS.saturn]: mars_details,
  [ITEMS.uranus]: mars_details,
  [ITEMS.neptune]: mars_details,
  [ITEMS.pluto]: mars_details,
  [ITEMS.kuiper_belt]: mars_details,
  [ITEMS.oort_cloud]: mars_details,
};
