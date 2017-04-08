import { ITEMS } from '../../constants/solar_system';
import { index } from './basics/index';
import { sun } from './basics/sun';
import { mercury } from './basics/mercury';
import { venus } from './basics/venus';
import { earth } from './basics/earth';
import { mars } from './basics/mars';
import { ceres } from './basics/ceres';
import { jupiter } from './basics/jupiter';
import { saturn } from './basics/saturn';
import { uranus } from './basics/uranus';
import { neptune } from './basics/neptune';
import { pluto } from './basics/pluto';
import { kuiper_belt } from './basics/kuiper_belt';
import { oort_cloud } from './basics/oort_cloud';



export const solarSystemBasics = {
  [ITEMS.index]: index,
  [ITEMS.sunn]: sun,
  [ITEMS.mercury]: mercury,
  [ITEMS.venus]: venus,
  [ITEMS.earth]: earth,
  [ITEMS.mars]: mars,
  [ITEMS.ceres]: ceres,
  [ITEMS.jupiter]: jupiter,
  [ITEMS.saturn]: saturn,
  [ITEMS.uranus]: uranus,
  [ITEMS.neptune]: neptune,
  [ITEMS.pluto]: pluto,
  [ITEMS.kuiper_belt]: kuiper_belt,
  [ITEMS.oort_cloud]: oort_cloud,
};
