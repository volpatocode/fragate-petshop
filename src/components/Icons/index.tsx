
import { type } from "os";
import React from "react";
import { Icons } from "./styles"

type propsType = {
    type: "favorite" | "rating" | "search" | "cart" | "profile" | "arrowRight" | "arrowLeft" | "blog" | "logo" | "arrowBottom";
    size: "small" | "medium" | "large";
    color: "orange" | "grey" | "yellow";
}


export default function index({type, ...rest}: propsType) {
    const icons = {
        favorite: <img src="./favorite.png" alt="" />,
        rating: <img src="./rating.png" alt="" />,
        search: <img src="./search.png" alt="" />,
        cart: <img src="./cart.png" alt="" />,
        profile: <img src="./profile.png" alt="" />,
        arrowRight: <img src="./arrowRight.png" alt="" />,
        arrowLeft: <img src="./arrowLeft.png" alt="" />,
        blog: <img src="./blog.png" alt="" />,
        logo: <img src="./fragate-main-logo.png" alt="" />,
        arrowBottom: <img src=".arrowBottom" alt="" />,
    }
        return <Icons {...rest}>{icons[type]}</Icons>
    }
  