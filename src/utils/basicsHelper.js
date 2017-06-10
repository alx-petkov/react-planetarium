import { SECTIONS } from '../constants/sections';
import { solarSystemBasics } from '../data/solar_system/basics';
import { starsBasics } from '../data/stars/basics';
import { menu as universe } from '../data/universe/menu';
// import { menu as stars } from '../data/stars/menu';

const selectFundamentals = (section, item) => {
  switch (section) {
    case SECTIONS.solar_system:
      return solarSystemBasics[item] || [];
    case SECTIONS.stars:
        return starsBasics[item];
    case SECTIONS.universe:
        return universe;
    //case SECTIONS.discoverers:
    //    return discoverers;
    default:
    return {};
  }
};

export default selectFundamentals;
