import classes from './MenuCard.module.css';

const MenuCard = () => {
  return (
    <div className={classes['menu-card']}>
      <ul>
        <li>
          <div className={classes['menu-info']}>
            <h4 className={classes['menu-title']}>
              Bruschetta, &nbsp;
              <span className={classes['menu-price']}>$20</span>
            </h4>
            <hr />
            <p className={classes['menu-description']}>
              Tomato Reduction base, Mozzarella, Torn Basil, Olive Oil
            </p>
          </div>
          {/* <div className={classes['menu-form']}>
            <form>
              <div className={classes['menu-form-control']}>
                <label>Amount</label>
                <input
                  type="number"
                  min="1"
                  step="1"
                  max="5"
                  defaultValue="1"
                />
              </div>

              <div className="form-action">
                <button className="btn-secondary">Add</button>
              </div>
            </form>
          </div> */}
        </li>
      </ul>
    </div>
  );
};

export default MenuCard;
