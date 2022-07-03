type PropsHeaderType={
  titleForHeader: string
}

export const Header=(props:PropsHeaderType)=> {
  return (
    <div>
      {props.titleForHeader}
    </div>
  )
}