import { connect } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import React from "react";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const Header = (props) => {
  const toggleButtonLogic = (props) => {
    return props.cartProduct.length === 0 ? (
      <ShoppingCartIcon></ShoppingCartIcon>
    ) : (
      <div><ShoppingCartIcon></ShoppingCartIcon> {props.cartProduct.length}</div>
    );
  };

  return (
    <header className={styles.header}>
      <div className={styles.btn}>
        <Link
          className={styles.link}
          to="/cart"
        >
          <span>{toggleButtonLogic(props)}</span>
        </Link>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    cartProduct: state.cartReducer.cartProduct
  };
};

let HeaderContainer = connect(mapStateToProps, null)(Header);
export default HeaderContainer;
