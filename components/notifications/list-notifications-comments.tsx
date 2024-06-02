import React from 'react'
import { Button } from '../ui/button'
import ItemComment from './item-comment'

function ListNotificationsComment() {
  return (
    <div className="flex flex-col gap-4">
      <ItemComment />
      <ItemComment />
      <Button variant={"outline"}>Xem thêm</Button>
    </div>
  )
}

export default ListNotificationsComment