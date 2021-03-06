type ButtonPropsType= {
  name: string,
  callBack: ()=> void
}


export function Button (props: ButtonPropsType) {
  const onClickButtonHandler = () => {
    props.callBack()
  }
    return (
      <button onClick={onClickButtonHandler}>{props.name}</button>
    )
}