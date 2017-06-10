import { SECTIONS } from '../constants/sections';
import { menu as solar_system } from '../data/solar_system/menu';
import { menu as discoverers } from '../data/discoverers/menu';
import { menu as exploration } from '../data/exploration/menu';
import { menu as universe } from '../data/universe/menu';
import { menu as stars } from '../data/stars/menu';
import { menu as fun } from '../data/fun/menu';

const selectMenu = (section) => {
  switch (section) {
    case SECTIONS.solar_system:
      return solar_system;
    case SECTIONS.stars:
        return stars;
    case SECTIONS.universe:
        return universe;
    case SECTIONS.discoverers:
        return discoverers;
    case SECTIONS.exploration:
      return exploration;
    case SECTIONS.fun:
      return fun;
    default:
    return {};
  }
};

export default selectMenu;
