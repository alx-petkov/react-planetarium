import { SECTIONS } from '../constants/sections';
import { menu as solar_system } from '../data/solar_system/menu';
import { menu as astronomy } from '../data/astronomy/menu';
import { menu as universe } from '../data/universe/menu';
import { menu as stars } from '../data/stars/menu';

const selectMenu = (section) => {
  switch (section) {
    case SECTIONS.solar_system:
      return solar_system;
    case SECTIONS.stars:
        return stars;
    case SECTIONS.universe:
        return universe;
    case SECTIONS.sciense:
        return astronomy;
    default:
    return {};
  }
};

export default selectMenu;
