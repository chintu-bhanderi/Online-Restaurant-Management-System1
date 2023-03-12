import "../styles.css"
import { Button } from '@mui/material';
import { useEffect, useState } from "react";
import axios from "axios";

export const TableOrderShow = (props) => {

    return (
        <>
            <span className="tableShow">
                <p>name: {props.name}</p>
                <p>quantity: {props.quantity}</p>
                <p>totalPrice: {props.totalPrice}</p>
                <p>tableBook: {props.tableNo}</p>
            </span>
        </>
    )
}