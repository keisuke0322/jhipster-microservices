import MenuItem from 'app/shared/layout/menus/menu-item';
import React from 'react';
import { Translate } from 'react-jhipster'; // JHipsterが提供するTranslateコンポーネント

const EntitiesMenu = () => {
  return (
    <>
      {/* prettier-ignore */}
      <MenuItem icon="asterisk" to="/category">
        <Translate contentKey="global.menu.entities.categoryCategory" />
      </MenuItem>
      {/* jhipster-needle-add-entity-to-menu - JHipster will add entities to the menu here */}
    </>
  );
};

export default EntitiesMenu;
