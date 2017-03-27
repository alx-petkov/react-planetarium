import { SECTIONS } from '../constants/sections';
import { solarSystemFundfamentals } from '../data/solar_system/fundamentals';
import { starsFundamentals } from '../data/stars/fundamentals';
import { menu as universe } from '../data/universe/menu';
// import { menu as stars } from '../data/stars/menu';

const selectFundamentals = (section, item) => {
  switch (section) {
    case SECTIONS.solar_system:
      return solarSystemFundfamentals[item] || [];
    case SECTIONS.stars:
        return starsFundamentals[item];
    case SECTIONS.universe:
        return universe;
    //case SECTIONS.sciense:
    //    return astronomy;
    default:
    return {};
  }
};

export default selectFundamentals;
