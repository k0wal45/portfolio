const StackItem = ({image, altT}) => {
  return (
    <div className='grid place-items-center p-4 rounded-full bg-white shadow-lg'>
      <img src={image} alt={altT} className='w-[50px] aspect-square'/>
    </div>
  )
}

export default StackItem
