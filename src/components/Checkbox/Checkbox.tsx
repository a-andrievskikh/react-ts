import React, { FC } from 'react'

export type CheckboxPropsTyep = {
  isChecked: boolean
  onChange: (isChacked: boolean) => void
}


export const Checkbox: FC<CheckboxPropsTyep> = React.memo((props) => {
  return (
    <input type="checkbox" checked={props.isChecked} onChange={e => props.onChange(e.currentTarget.checked)} />
  )
})