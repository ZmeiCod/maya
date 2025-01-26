/* eslint-disable react/prop-types */
import classes from './Button.module.css'

export default function Button({children}) {
    return (
        <button className={classes.button}>{children}</button>
    )
}