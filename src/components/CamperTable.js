import React from 'react'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow
} from 'material-ui/Table'
import Camper from './Camper'
import './CamperTable.css'


const CamperTable = ({campers}) => {

  console.log('campers', campers)
  const Items = campers.map((camper, index) => {
    return <Camper key={index} camper={camper} number={index+1}/>
  })

  return (
    <div className="camper-table">
    <Table>
    <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
      <TableRow>
        <TableHeaderColumn>Rank</TableHeaderColumn>
        <TableHeaderColumn>Usernname</TableHeaderColumn>
        <TableHeaderColumn>Last 30 Days</TableHeaderColumn>
        <TableHeaderColumn>All Time Points</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody stripedRows={true} showRowHover={true}>
      {Items}
    </TableBody>
  </Table>
  </div>
  )
}

export default CamperTable
