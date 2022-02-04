import React from "react"
import { useSelector } from "react-redux"


export default function IsItemExists({ itemId }) {
    const listItem = useSelector((state) => state.spisok.list)
    return Boolean(Object.values(listItem).find((item) => item.id === itemId))
}