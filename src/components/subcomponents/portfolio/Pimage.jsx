const Pimage = ({image}) => {
  return (
    <div className='w-[full] h-[18rem] lg:w-[35rem] lg:h-[20rem] bg-cover bg-top hover:bg-bottom duration-[8s] rounded-xl shadow-lg' style={{backgroundImage: `url(${image})`
  }}></div>
  )
}

export default Pimage
