import React from "react";
import { Name } from "./Person.type";

type PersonsListProps = {
  names: Name[]
}

export const PersonList = (props: PersonsListProps) => {
  return (
    <div>
      {props.names.map(name => {
        return (
          <h2 key={name.first}>{name.first} {name.last}</h2>
        )
      })}
    </div>
  )
}