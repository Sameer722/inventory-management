import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './Home_.module.css';

interface Props {
  className?: string;
}
/* @figmaId 100:301 */
export const Home_: FC<Props> = memo(function Home_(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.image9}></div>
      <div className={classes.inventoryManagementSystem}>
        <div className={classes.textBlock}>Inventory </div>
        <div className={classes.textBlock2}>Management</div>
        <div className={classes.textBlock3}>System</div>
      </div>
      <div className={classes.rectangle12}></div>
      <div className={classes.logInBox}></div>
      <div className={classes.signUpBox}></div>
      <div className={classes.signUp}>Sign Up</div>
      <div className={classes.logIn}>Log In</div>
      <div className={classes.StreamlineYourStockAndOptimize}>
        “Streamline your stock and optimize your success with our inventory management system.”
      </div>
      <div className={classes.welcomeToTheApplicationForMana}>
        Welcome to the application for managing your equipments.
      </div>
      <div className={classes.lOGO2}></div>
    </div>
  );
});
