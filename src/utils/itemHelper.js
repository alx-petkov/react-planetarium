import { SECTIONS } from '../constants/sections';
import { solarSystemItems } from '../data/solar_system/items';
import { starsBasics } from '../data/stars/basics';
import { menu as universe } from '../data/universe/menu';
// import { menu as stars } from '../data/stars/menu';

const selectItem = (section, item) => {
  switch (section) {
    case SECTIONS.solar_system:
      return solarSystemItems[item] || [];
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

export default selectItem;
