const StackItem = ({image, altT}) => {
  return (
    <li className='grid place-items-center p-4 rounded-buble bg-white shadow-lg png-shadow'>
      <img src={image} alt={altT} className='w-[50px] aspect-square'/>
    </li>
  )
}

export default StackItem
